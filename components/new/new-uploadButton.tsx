import React, { DOMAttributes, FormEventHandler } from 'react';

interface NewUploadButtonProps {
    onClick: React.FormEventHandler<HTMLButtonElement>;
}

export const NewUploadButton = ({ onClick }: NewUploadButtonProps) => {
    return (
        <div className="w-full text-right ">
            <button
                type="submit"
                onSubmit={onClick}
                className="bg-red-400 hover:bg-red-500 rounded-xl px-4 py-2 text-white"
            >
                업로드
            </button>
        </div>
    );
};
