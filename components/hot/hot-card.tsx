import React from 'react';

import { SafePost } from './hot-types';
import Link from 'next/link';
import { CardBody } from './card/card-body';

interface HotCardProps {
    post: SafePost;
    subCategory: string;
    likeArray: string[] | null;
}

export const HotCard = ({ post, subCategory, likeArray }: HotCardProps) => {
    return (
        <Link href={`/post/${post.id}`} className="p-5">
            <CardBody
                likeArray={likeArray}
                post={post}
                subCategory={subCategory}
            />
        </Link>
    );
};
