import { Separator } from '@/components/ui/separator';
import { Trash2 } from 'lucide-react';
import React from 'react';

interface CommentTextProps {
    text: string;
    isLast: boolean;
    isAtuor: boolean;
}

const CommentText = ({ text, isLast, isAtuor }: CommentTextProps) => {
    return (
        <div className="p-2 ">
            {text}
            {isAtuor && (
                <button className="hidden hover:block">
                    <Trash2 className="w-4 h-4" />
                </button>
            )}
            {!isLast && <Separator className="mt-2" />}
        </div>
    );
};

export default CommentText;
