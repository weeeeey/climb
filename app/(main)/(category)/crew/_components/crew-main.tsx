import { HotCard } from '@/components/hot/hot-card';
import { SafePost } from '@/components/hot/hot-types';
import React from 'react';

interface CrewMainProps {
    posts: SafePost[];
    likesArray: string[] | null;
    subCategory: string;
}

export const CrewMain = ({ likesArray, posts, subCategory }: CrewMainProps) => {
    return (
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {posts.map((post) => (
                <HotCard
                    key={post.id}
                    likeArray={likesArray}
                    post={post}
                    subCategory={subCategory}
                />
            ))}
        </div>
    );
};
