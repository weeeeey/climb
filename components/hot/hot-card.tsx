import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { SafePost } from './hot-types';
import Link from 'next/link';
import { CardBody } from './card/card-body';

interface HotCardProps {
    post: SafePost;
    subCategory: string;
}

export const HotCard = ({ post, subCategory }: HotCardProps) => {
    return (
        <Link href={`/post/${post.id}`} className="p-5">
            <CardBody post={post} subCategory={subCategory} />
        </Link>
    );
};
