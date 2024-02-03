import { PostLike } from './post-like';
import { CommentButton } from './comment/comment-button';
import { Profile } from '@prisma/client';

interface PostButtonProps {
    postId: string;
    loginedProfile: Profile | undefined;
    onChangeCnt: (isIncrease: boolean) => void;
    onFocusCommentForm: () => void;
}

export const PostButton = ({
    loginedProfile,
    onChangeCnt,
    postId,
    onFocusCommentForm,
}: PostButtonProps) => {
    return (
        <div className="flex space-x-2 items-center">
            <PostLike
                postId={postId}
                loginedProfile={loginedProfile}
                onChangeCnt={onChangeCnt}
            />
            <CommentButton focusInCommentForm={onFocusCommentForm} />
        </div>
    );
};
