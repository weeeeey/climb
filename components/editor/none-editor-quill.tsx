'use client';

import { useEffect, useMemo, useState } from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { EditorProvideProps, MyFiledValues } from '../new/new-types';

export const EditorQuill = ({ field }: EditorProvideProps) => {
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
    const [isMount, setIsMount] = useState(false);
    useEffect(() => {
        setIsMount(true);

        return () => {
            setIsMount(false);
        };
    }, []);

    if (!isMount) {
        return null;
    }

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
