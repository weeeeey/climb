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
import { format } from 'date-fns';
import { Eye, Heart, MessageCircle } from 'lucide-react';
import Link from 'next/link';

interface HotCardProps {
    post: SafePost;
    subCategory: string;
}

export const HotCard = ({ post, subCategory }: HotCardProps) => {
    return (
        <Link href={`/post/${post.id}`} className="p-5">
            <Card className="hover:bg-slate-100">
                <CardHeader>
                    <CardTitle>
                        <div className="inline-block text-xs bg-slate-100 border border-slate-400 rounded-lg px-2 text-slate-600">
                            {subCategory}
                        </div>
                    </CardTitle>
                    <div className="flex justify-between items-center text-sm">
                        <CardDescription>관악구</CardDescription>
                        <CardDescription>총 200명</CardDescription>
                    </div>
                </CardHeader>
                <CardContent className="flex flex-col  justify-start p-5 pt-0 mb-5 space-y-3">
                    <div className="text-sm text-slate-400 ">
                        게시일 {format(post.createdAt, 'yy.MM.dd')}
                    </div>
                    <div className="text-2xl font-semibold">{post.title}</div>
                </CardContent>
                <CardFooter className="flex justify-end items-center space-x-2 text-slate-400 text-sm">
                    <div className="flex justify-center items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <div>{post.like}</div>
                    </div>
                    <div className="flex justify-center items-center  space-x-1">
                        <MessageCircle className="w-4 h-4 " />
                        <div>{post._count.comments}</div>
                    </div>
                    <div className="flex justify-center items-center  space-x-1">
                        <Eye className="w-4 h-4 " />
                        <div>{post.viewed}</div>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    );
};
