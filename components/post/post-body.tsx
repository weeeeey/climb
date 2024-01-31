import { PostTitle } from './post-title';
import { PostContent } from './post-content';
import { Post } from '@prisma/client';
import { Loading } from '../loading';

interface PostBodyProps {
    post: Post;
}

export const PostBody = ({ post }: PostBodyProps) => {
    if (!post) {
        return <Loading />;
    }
    return (
        <div className="space-y-10">
            <PostTitle
                profileId={post.profileId}
                title={post.title}
                viewed={post.viewed}
            />
            <PostContent content={post.content} like={post.like} />
        </div>
    );
};
