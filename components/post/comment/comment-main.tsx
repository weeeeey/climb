import Image from 'next/image';
import { SafeCommentType } from './comment-types';
import { format } from 'date-fns';
import { Separator } from '@/components/ui/separator';

interface CommentMainProps {
    comments: SafeCommentType[];
}

export const CommentMain = ({ comments }: CommentMainProps) => {
    return (
        <>
            {comments.map((comment, idx) => (
                <div key={comment.id}>
                    <div className="px-2 flex justify-start items-center space-x-2">
                        <div className="relative h-10 w-10 ">
                            <Image
                                alt="profile"
                                src={comment.profile.imageUrl}
                                fill
                                className="rounded-full"
                            />
                        </div>
                        <div>
                            <div className="text-sm">
                                {comment.profile.name}
                            </div>
                            <span className="text-sm text-slate-400 ">
                                {format(
                                    new Date(comment.createdAt),
                                    'yy.dd.mm'
                                )}
                            </span>
                        </div>
                    </div>
                    <div className="p-2 ">{comment.text}</div>
                    {idx + 1 !== comments.length && <Separator />}
                </div>
            ))}
        </>
    );
};
