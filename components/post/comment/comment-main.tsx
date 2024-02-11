import { SafeCommentType } from './comment-types';
import { CommentUser } from './comment-user';
import CommentText from './comment-text';
import { Profile } from '@prisma/client';

interface CommentMainProps {
    comments: SafeCommentType[];
    loginedProfile: Profile | undefined;
}

export const CommentMain = ({ comments, loginedProfile }: CommentMainProps) => {
    if (comments.length === 0) {
        return (
            <div className="text-neutral-400 ">
                [첫 댓글을 작성해 주시는 거 어떠세요? 😊]
            </div>
        );
    }
    return (
        <>
            {comments.map((comment, idx) => (
                <div key={comment.id}>
                    <CommentUser
                        date={comment.createdAt}
                        imageUrl={comment.profile.imageUrl}
                        name={comment.profile.name}
                    />

                    <CommentText
                        isAtuor={loginedProfile?.id === comment.profileId}
                        text={comment.text}
                        isLast={idx + 1 === comments.length}
                    />
                </div>
            ))}
        </>
    );
};
