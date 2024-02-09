import { Card, CardContent } from '@/components/ui/card';
import React from 'react';
import { CardHeaderComponent } from './card-header';
import { SafePost } from '../hot-types';
import { CardFooterComponent } from './card-footer';
import { CardContentComponent } from './card-contentt';

interface CardBodyProps {
    post: SafePost;
    subCategory: string;
    likeArray: string[] | null;
}

export const CardBody = ({ post, subCategory, likeArray }: CardBodyProps) => {
    return (
        <Card className="hover:bg-slate-100">
            <CardHeaderComponent
                city={post.city}
                gu={post.gu}
                subCategory={subCategory}
                place={post.place}
            />
            <CardContentComponent date={post.createdAt} title={post.title} />
            <CardFooterComponent
                commentsCnt={post._count.comments}
                like={post.like}
                viewed={post.viewed}
                likeArray={likeArray}
                postId={post.id}
            />
        </Card>
    );
};
