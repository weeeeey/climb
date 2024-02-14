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
}: Omit<ContentsBodyProps, 'subCategory' | '_count' | 'category'>) => {
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
                        <div className="text-sm sm:text-lg flex items-center">
                            <span className="text-nowrap overflow-hidden">
                                {post.title.slice(0, 15)}
                                {post.title.length >= 15 && '...'}
                            </span>
                            <span className="text-slate-400 text-sm">
                                [{post._count.comments}]
                            </span>
                        </div>
                        <div className="text-xs text-slate-400">
                            {post.profile.name}
                        </div>
                    </TableCell>
                    <TableCell className="flex sm:flex-row flex-col  items-end sm:items-center justify-between space-x-3 mt-3">
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
