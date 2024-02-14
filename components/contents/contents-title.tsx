import { boardTitleFont } from '@/font.config';
import { cn } from '@/lib/utils';
import React, { RefObject } from 'react';

export const ContentsTitle = ({
    boardTitle,
    titleRef,
}: {
    boardTitle: string | undefined;
    titleRef?: RefObject<HTMLDivElement>;
}) => {
    return (
        <div
            ref={titleRef}
            className={cn(
                ' bg-red-100 rounded-lg flex justify-start   items-center  text-2xl px-3 py-1 ',
                boardTitleFont.className
            )}
        >
            <div className="w-2 h-5  mr-2 bg-black inline-block" />
            <span className="inline-block ">{boardTitle}</span>
        </div>
    );
};
