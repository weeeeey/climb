import { Separator } from '@/components/ui/separator';
import React from 'react';

const CommentText = ({ text, isLast }: { text: string; isLast: boolean }) => {
    return (
        <div className="p-2 ">
            {text}
            {!isLast && <Separator className="mt-2" />}
        </div>
    );
};

export default CommentText;
