'use client';
import React, { useState } from 'react';
import { EditorQuill } from './editor-quill';
import { ControllerRenderProps } from 'react-hook-form';
import { MyFiledValues } from '../new/new-types';

interface EditorProvideProps {
    field: ControllerRenderProps<MyFiledValues, 'content'>;
}

export const EditorProvider = ({ field }: EditorProvideProps) => {
    const [htmlContent, setHtmlContent] = useState('');

    return (
        <>
            <EditorQuill
                htmlContent={htmlContent}
                setHtmlContent={setHtmlContent}
            />
        </>
    );
};
