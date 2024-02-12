'use client';
import { Profile } from '@prisma/client';
import { CommentForm } from './comment-form';
import { CommentMain } from './comment-main';
import { RefObject, useState } from 'react';
import { useQueryContent } from '@/lib/use-query-content';
import { Loading } from '@/components/loading';
import { ErrorPage } from '@/components/error';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useQueryClient } from '@tanstack/react-query';

interface CommentBodyProps {
    loginedProfile: Profile | undefined;
    postId: string;
    formRef: RefObject<HTMLTextAreaElement>;
}

const FormSchema = z.object({
    comment: z
        .string()
        .min(2, {
            message: '2자 이상 적어주세요',
        })
        .max(200, {
            message: '200자 이내로 적어주세요',
        }),
});

export const CommentBody = ({
    loginedProfile,
    postId,
    formRef,
}: CommentBodyProps) => {
    const queryClient = useQueryClient();
    const {
        data: comments,
        isError,
        isLoading,
    } = useQueryContent({
        cType: 'comment',
        id: postId,
    });
    const [isDisabled, setisDisabled] = useState(
        loginedProfile?.id ? false : true
    );

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    });

    async function refetchComments() {
        try {
            // 새로운 댓글을 등록한 후에 댓글을 다시 불러옵니다.
            await queryClient.invalidateQueries({
                queryKey: ['comment', postId],
            });

            await queryClient.invalidateQueries();
        } catch (error) {
            console.error('Error refetching comments:', error);
        }
    }

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        setisDisabled(true);
        try {
            if (!loginedProfile?.id) {
                throw new Error('Unauthorized User');
            }
            const res = await axios({
                method: 'POST',
                url: `/api/comment/${postId}`,
                data: {
                    text: data.comment,
                    profileId: loginedProfile.id,
                },
            });

            if (res.status === 200) {
                toast.success('댓글 등록 완료');
                form.reset({
                    comment: '',
                });
                await refetchComments();
            }
        } catch (error) {
            console.log(error);
            toast.error('댓글 등록 실패 ㅠㅠ 로그인을 유지 해주세요');
        } finally {
            setisDisabled(false);
        }
    }

    if (isLoading) {
        return <Loading />;
    }
    if (isError) {
        return <ErrorPage />;
    }
    return (
        <>
            <CommentMain comments={comments} loginedProfile={loginedProfile} />
            <CommentForm
                form={form}
                formRef={formRef}
                isDisable={isDisabled}
                onSubmit={onSubmit}
            />
        </>
    );
};
