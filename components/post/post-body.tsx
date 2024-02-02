'use client';

import { PostTitle } from './post-title';
import { PostContent } from './post-content';
import { Profile } from '@prisma/client';
import { Loading } from '../loading';
import { PostLike } from './post-like';
import { useQueryContent } from '@/lib/use-query-content';
import { useEffect, useState } from 'react';
import { ErrorPage } from '../error';

interface PostBodyProps {
    postId: string;
    loginedProfile: Profile | undefined;
}

export const PostBody = ({ postId, loginedProfile }: PostBodyProps) => {
    const [likeCount, setLikeCount] = useState(0);
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
    return (
        <div className="space-y-10 ">
            <PostTitle
                athuor={post.profile.name}
                title={post.title}
                viewed={post.viewed}
                createdAt={post.createdAt}
                like={likeCount}
            />
            <PostContent content={post.content} />
            <PostLike
                postId={post.id}
                loginedProfile={loginedProfile}
                onChangeCnt={onChangeCnt}
            />
        </div>
    );
};
