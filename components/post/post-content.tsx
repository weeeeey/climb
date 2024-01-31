import React from 'react';
import 'react-quill/dist/quill.snow.css';
import DOMPurify from 'dompurify';
interface PostContentProps {
    content: string;
    like: number;
}

export const PostContent = ({ content, like }: PostContentProps) => {
    console.log(content);
    return (
        <div className="space-y-5">
            <div
                className="view ql-editor"
                dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(content),
                }}
                style={{
                    marginTop: '30px',
                    overflow: 'hidden',
                    whiteSpace: 'pre-wrap',
                }}
            />
            <div className="text-center">{like}</div>
        </div>
    );
};
