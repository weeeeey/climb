import { PostLike } from './post-like';
import { CommentButton } from './comment/comment-button';
import { Profile } from '@prisma/client';
import { PostDelete } from './post-delete';
import { PostUpdate } from './post-update';

interface PostButtonProps {
    postId: string;
    loginedProfile: Profile | undefined;
    athuorId: string;
    onChangeCnt: (isIncrease: boolean) => void;
    onFocusCommentForm: () => void;
}

export const PostButton = ({
    loginedProfile,
    onChangeCnt,
    postId,
    athuorId,
    onFocusCommentForm,
}: PostButtonProps) => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex space-x-2 items-center">
                <PostLike
                    postId={postId}
                    loginedProfile={loginedProfile}
                    onChangeCnt={onChangeCnt}
                />
                <CommentButton focusInCommentForm={onFocusCommentForm} />
            </div>
            <div className="flex space-x-2 items-center">
                <PostUpdate
                    athuorId={athuorId}
                    loginedProfile={loginedProfile}
                    postId={postId}
                />
                <PostDelete
                    athuorId={athuorId}
                    loginedProfile={loginedProfile}
                    postId={postId}
                />
            </div>
        </div>
    );
};
