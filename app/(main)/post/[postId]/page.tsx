'use client';

import { PostBody } from '@/components/post/post-body';
import { useQueryContent } from '@/lib/use-query-content';

const PostIdPage = ({ params }: { params: { postId: string } }) => {
    const { postId } = params;
    const {
        data: post,
        isError,
        isLoading,
    } = useQueryContent({
        cType: 'post',
        id: postId,
    });

    return <PostBody post={post} />;
};

export default PostIdPage;
