import React from 'react';

interface PostTitleProps {
    title: string;
    profileId: string;
    createdAt?: Date;
    viewed: number;
}

export const PostTitle = ({
    createdAt,
    profileId,
    title,
    viewed,
}: PostTitleProps) => {
    return <div>PostTitle</div>;
};
