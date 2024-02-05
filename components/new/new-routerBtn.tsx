'use client';
import { boardTitleFont } from '@/font.config';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export const NewRouterBtn = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push('/new');
    };
    return (
        <div className="flex justify-end items-center">
            <button
                onClick={handleClick}
                className={cn(
                    'bg-red-200 px-2 py-1 rounded-xl text-slate-700 hover:text-black transition-colors hover:ring-red-400 hover:ring hover:ring-offset-1  hover:bg-red-400',
                    boardTitleFont.className
                )}
            >
                새 글 쓰기
            </button>
        </div>
    );
};
