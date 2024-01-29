'use client';

import { useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface EditorQuillProps {
    htmlContent: string;
    setHtmlContent: React.Dispatch<React.SetStateAction<string>>;
}

export const EditorQuill = ({
    htmlContent,
    setHtmlContent,
}: EditorQuillProps) => {
    const quillModules = useMemo(
        () => ({
            toolbar: {
                container: [
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    [
                        { size: ['small', false, 'large', 'huge'] },
                        { color: [] },
                    ],
                    [
                        { list: 'ordered' },
                        { list: 'bullet' },
                        { indent: '-1' },
                        { indent: '+1' },
                        { align: [] },
                    ],
                    ['image', 'video'],
                ],
            },
        }),
        []
    );
    return (
        <>
            <ReactQuill
                value={htmlContent}
                onChange={setHtmlContent}
                modules={quillModules}
                theme="snow"
                className="h-[20rem] md:h-[30rem]"
            />
        </>
    );
};
