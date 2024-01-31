'use client';

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
    console.log(post);
    return <div>PostIdPage</div>;
};

export default PostIdPage;
