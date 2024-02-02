'use client';

import { useRouter } from 'next/navigation';

interface NewUploadButtonProps {
    onClick: React.FormEventHandler<HTMLButtonElement>;
}

export const NewUploadButton = ({ onClick }: NewUploadButtonProps) => {
    const router = useRouter();
    const handleCancle = () => {
        if (window.confirm('정말 취소하시겠어요?')) {
            router.back();
        }
    };
    return (
        <div className="w-full pt-10 space-x-2 flex items-center justify-end">
            <button
                onClick={handleCancle}
                className="bg-slate-400 hover:bg-slate-500 rounded-xl px-4 py-2 text-white"
            >
                취소
            </button>
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
