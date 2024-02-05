'use client';
import { TableBody, TableCell, TableRow } from '../ui/table';
import { ContentsBodyProps } from './contents-types';
import { format } from 'date-fns';
import { Eye, Heart, MessageCircle } from 'lucide-react';
import { SafePost } from '../hot/hot-types';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export const ContentsRows = ({
    posts,
    likesArray,
}: Omit<ContentsBodyProps, 'subCategory' | '_count'>) => {
    const router = useRouter();
    const handleClick = (postId: string) => {
        router.push(`/post/${postId}`);
    };
    return (
        <TableBody>
            {posts.map((post: SafePost) => (
                <TableRow
                    key={post.id}
                    onClick={() => handleClick(post.id)}
                    className="cursor-pointer"
                >
                    <TableCell>
                        <div className="text-lg">{post.title}</div>
                        <div className="text-xs text-slate-400">
                            {post.profile.name}
                        </div>
                    </TableCell>
                    <TableCell className="flex items-center justify-between space-x-4 mt-3">
                        <div className="flex justify-center items-center space-x-1">
                            <Heart
                                className={cn(
                                    'h-4 w-4',
                                    likesArray?.includes(post.id) &&
                                        'fill-red-500 text-red-500'
                                )}
                            />
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
                    </TableCell>

                    <TableCell className="font-light pl-4">
                        {format(new Date(post.createdAt), 'yy.MM.dd')}
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
};
