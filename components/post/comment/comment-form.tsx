'use client';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from '@/components/ui/form';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Profile } from '@prisma/client';
import React, { MutableRefObject, RefObject, useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import axios from 'axios';
import toast from 'react-hot-toast';

interface CommentFormProps {
    loginedProfile: Profile | undefined;
    postId: string;
    formRef: RefObject<HTMLTextAreaElement>;
}

const FormSchema = z.object({
    comment: z
        .string()
        .min(3, {
            message: '3자 이상 적어주세요',
        })
        .max(200, {
            message: '200자 이내로 적어주세요',
        }),
});

export const CommentForm = ({
    postId,
    loginedProfile,
    formRef,
}: CommentFormProps) => {
    const [isDisabled, setisDisabled] = useState(
        loginedProfile?.id ? false : true
    );

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    });

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        try {
            await axios({
                method: 'POST',
                url: `/api/comment`,
                data: {
                    postId,
                    text: data.comment,
                    profileId: loginedProfile!.id,
                },
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid md:grid-cols-8 w-full gap-3 md:px-10"
            >
                <FormField
                    control={form.control}
                    name="comment"
                    render={({ field }) => (
                        <FormItem className="md:col-span-7 md:relative">
                            <FormControl>
                                <Textarea
                                    name={field.name}
                                    onChange={field.onChange}
                                    value={field.value}
                                    ref={formRef}
                                    disabled={isDisabled}
                                    placeholder={
                                        isDisabled
                                            ? '로그인 해주세요.'
                                            : 'Type your message here.'
                                    }
                                />
                            </FormControl>
                            <FormMessage className="md:absolute -bottom-8 left-0" />
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    disabled={isDisabled}
                    className="md:h-full"
                >
                    등록
                </Button>
            </form>
        </Form>
    );
};
