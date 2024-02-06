import { CardContent } from '@/components/ui/card';
import { format } from 'date-fns';
import React from 'react';

interface CardContentProps {
    date: Date;
    title: string;
}

export const CardContentComponent = ({ date, title }: CardContentProps) => {
    return (
        <CardContent className="flex flex-col  justify-start p-5 pt-0 mb-5 space-y-3">
            <div className="text-sm text-slate-400 ">
                게시일 {format(date, 'yy.MM.dd')}
            </div>
            <div className="text-2xl font-semibold text-nowrap overflow-hidden">
                {title.length <= 14 ? title : `${title.substring(0, 14)}...`}
            </div>
        </CardContent>
    );
};
