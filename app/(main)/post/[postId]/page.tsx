import currentProfile from '@/action/current-profile';
import { PostBody } from '@/components/post/post-body';

const PostIdPage = async ({ params }: { params: { postId: string } }) => {
    const { postId } = params;
    const loginedProfile = await currentProfile();

    return (
        <PostBody
            postId={postId}
            loginedProfile={loginedProfile?.id ? loginedProfile : undefined}
        />
    );
};

export default PostIdPage;
