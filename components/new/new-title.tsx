import React from 'react';
import { Separator } from '../ui/separator';

interface NewTitleProps {
    number: number;
    text: string;
}
export const NewTitle = ({ number, text }: NewTitleProps) => {
    return (
        <>
            <div className="flex justify-start items-center space-x-3 text-2xl">
                <div className="bg-red-500 text-white rounded-full px-3">
                    {number}
                </div>
                <div className="font-bold">{text}</div>
            </div>
            <Separator />
        </>
    );
};
