import { CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Eye, Heart, MessageCircle } from 'lucide-react';

interface CardFooterComponentProps {
    like: number;
    commentsCnt: number;
    viewed: number;
    likeArray: string[] | null;
    postId: string;
}

export const CardFooterComponent = ({
    commentsCnt,
    like,
    viewed,
    likeArray,
    postId,
}: CardFooterComponentProps) => {
    return (
        <CardFooter className="flex justify-end items-center space-x-2 text-slate-400 text-sm">
            <div className="flex justify-center items-center space-x-1">
                <Heart
                    className={cn(
                        'h-4 w-4',
                        likeArray?.includes(postId) &&
                            'text-red-500 fill-red-500'
                    )}
                />
                <div>{like}</div>
            </div>
            <div className="flex justify-center items-center  space-x-1">
                <MessageCircle className="w-4 h-4 " />
                <div>{commentsCnt}</div>
            </div>
            <div className="flex justify-center items-center  space-x-1">
                <Eye className="w-4 h-4 " />
                <div>{viewed}</div>
            </div>
        </CardFooter>
    );
};
