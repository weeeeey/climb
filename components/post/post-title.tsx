import { getDiffDate } from '@/action/get-diff-date';
import { format } from 'date-fns';
import React from 'react';

interface PostTitleProps {
    title: string;
    createdAt: string;
    updatedAt: string;
    viewed: number;
    like: number;
    athuor: string;
}

export const PostTitle = ({
    createdAt,
    title,
    viewed,
    like,
    athuor,
    updatedAt,
}: PostTitleProps) => {
    return (
        <div className="border-y-2">
            <div className="bg-slate-300 flex justify-between items-center px-5 py-1">
                <span className="font-bold text-xl">
                    {title}
                    <span className="text-xs font-light">
                        {getDiffDate(updatedAt)}
                    </span>
                </span>
                <span className="text-sm text-slate-600 ">
                    {format(new Date(createdAt), 'yyyy.MM.dd HH:mm')}
                </span>
            </div>

            <div className="flex justify-between items-center px-3 py-1 text-sm ">
                <span className="">
                    <span className="text-slate-500">작성자: </span>({athuor})
                </span>
                <div className="space-x-4 font-light">
                    <span>
                        좋아요 <span className="font-semibold">{like}</span>
                    </span>
                    <span>
                        조회 수 <span className="font-semibold">{viewed}</span>
                    </span>
                </div>
            </div>
        </div>
    );
};
