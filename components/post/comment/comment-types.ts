import { Comment, ReplyComment } from '@prisma/client';

type SafeProfile = {
    name: string;
    imageUrl: string;
    createdAt: Date;
};
export type SafeCommentType = Comment & {
    profile: SafeProfile;
    replyComments: ReplyComment & {
        profile: SafeProfile;
    };
};
