import { format } from 'date-fns';
import Image from 'next/image';
import React from 'react';

interface CommentUserProps {
    imageUrl: string;
    name: string;
    date: Date;
}
export const CommentUser = ({ date, imageUrl, name }: CommentUserProps) => {
    return (
        <div className="px-2 flex justify-start items-center space-x-2">
            <div className="relative h-8 w-8 ">
                <Image
                    alt="profile"
                    src={imageUrl}
                    fill
                    className="rounded-full"
                />
            </div>
            <div className="flex flex-col text-sm">
                <div>{name}</div>
                <span className=" text-slate-400 ">
                    {format(date, 'yy.MM.dd')}
                </span>
            </div>
        </div>
    );
};
