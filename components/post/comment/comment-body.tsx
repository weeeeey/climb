'use client';
import { Profile } from '@prisma/client';
import { CommentForm } from './comment-form';
import { CommentMain } from './comment-main';
import { SafeCommentType } from './comment-types';
import { RefObject, useEffect } from 'react';

interface CommentBodyProps {
    comments: SafeCommentType[];
    loginedProfile: Profile | undefined;
    postId: string;
    formRef: RefObject<HTMLTextAreaElement>;
}

export const CommentBody = ({
    comments,
    loginedProfile,
    postId,
    formRef,
}: CommentBodyProps) => {
    return (
        <>
            <CommentMain comments={comments} />
            <CommentForm
                formRef={formRef}
                postId={postId}
                loginedProfile={loginedProfile}
            />
        </>
    );
};
