'use client';

import { useMemo } from 'react';

import 'react-quill/dist/quill.snow.css';
import { EditorProvideProps } from '../new/new-types';
import dynamic from 'next/dynamic';

export const EditorProvider = ({ field }: EditorProvideProps) => {
    const ReactQuill = useMemo(
        () => dynamic(() => import('react-quill'), { ssr: false }),
        []
    );
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
                value={field.value}
                onChange={field.onChange}
                modules={quillModules}
                theme="snow"
                className="h-[20rem] md:h-[30rem]"
            />
        </>
    );
};
