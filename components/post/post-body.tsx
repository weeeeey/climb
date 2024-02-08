'use client';

import { PostTitle } from './post-title';
import { PostContent } from './post-content';
import { Profile } from '@prisma/client';
import { Loading } from '../loading';
import { useQueryContent } from '@/lib/use-query-content';
import { useEffect, useRef, useState } from 'react';
import { ErrorPage } from '../error';
import { CommentBody } from './comment/comment-body';
import { Separator } from '../ui/separator';
import { PostButton } from './post-button';

interface PostBodyProps {
    postId: string;
    loginedProfile: Profile | undefined;
}

export const PostBody = ({ postId, loginedProfile }: PostBodyProps) => {
    const [likeCount, setLikeCount] = useState(0);
    const commentFormRef = useRef<HTMLTextAreaElement>(null);

    const {
        data: post,
        isLoading,
        isError,
    } = useQueryContent({
        cType: 'post',
        id: postId,
    });
    useEffect(() => {
        if (post) {
            setLikeCount(post.like);
        }
    }, [post]);

    if (isLoading) {
        return <Loading />;
    }
    if (isError) {
        return <ErrorPage />;
    }

    const onChangeCnt = (isIncrease: boolean) => {
        const plusLike = isIncrease ? 1 : -1;
        setLikeCount((prev) => prev + plusLike);
    };
    const onFocusCommentForm = () => {
        if (commentFormRef.current) {
            commentFormRef.current.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                commentFormRef.current!.focus();
            }, 300);
        }
    };
    return (
        <div className="space-y-5">
            <PostTitle
                athuor={post.profile.name}
                title={post.title}
                viewed={post.viewed}
                createdAt={post.createdAt}
                updatedAt={post.updatedAt}
                like={likeCount}
            />
            <PostContent content={post.content} />
            <Separator />
            <PostButton
                onFocusCommentForm={onFocusCommentForm}
                loginedProfile={loginedProfile}
                onChangeCnt={onChangeCnt}
                postId={postId}
                athuorId={post.profile.id}
            />
            <CommentBody
                loginedProfile={loginedProfile}
                postId={postId}
                comments={post.comments}
                formRef={commentFormRef}
            />
        </div>
    );
};
