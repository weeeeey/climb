import { TableBody, TableCell, TableRow } from '../ui/table';
import { ContentsBodyProps, SafePost } from './contents-types';
import { format } from 'date-fns';
import { Eye, Heart } from 'lucide-react';
import Link from 'next/link';

export const ContentsRows = ({
    posts,
}: Omit<ContentsBodyProps, 'subCategory'>) => {
    console.log(posts[0].id);
    return (
        <TableBody>
            {posts.map((post: SafePost) => (
                <TableRow key={post.id}>
                    <TableCell>
                        <Link
                            className="text-lg"
                            href={`/post/${post.id.toString()}`}
                        >
                            {post.title}
                        </Link>
                        <div className="text-xs text-slate-400">
                            {post.profile.name}
                        </div>
                    </TableCell>
                    <TableCell className="flex items-center justify-between space-x-2 mt-3">
                        <div className="flex justify-center items-center space-x-1">
                            <Heart className="h-4 w-4" />
                            <div>{post.like}</div>
                        </div>
                        <div className="flex justify-center items-center  space-x-1">
                            <Eye className="w-4 h-4" />
                            <div>{post.viewed}</div>
                        </div>
                    </TableCell>

                    <TableCell className="font-light">
                        {format(new Date(post.createdAt), 'yy.MM.dd')}
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
};
