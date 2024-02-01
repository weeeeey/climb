import React from 'react';
import 'react-quill/dist/quill.snow.css';
import DOMPurify from 'dompurify';
interface PostContentProps {
    content: string;
}

export const PostContent = ({ content }: PostContentProps) => {
    return (
        <div className="space-y-5 px-3">
            <div
                className="view ql-editor "
                dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(content),
                }}
                style={{
                    overflow: 'hidden',
                    whiteSpace: 'pre-wrap',
                }}
            />
        </div>
    );
};
