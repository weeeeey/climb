'use client';
import { MessageCircle } from 'lucide-react';

interface CommenButtonProps {
    focusInCommentForm: () => void;
}

export const CommentButton = ({ focusInCommentForm }: CommenButtonProps) => {
    return (
        <button onClick={focusInCommentForm}>
            <MessageCircle className="w-8 h-8 hover:fill-black " />
        </button>
    );
};
