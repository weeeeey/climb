import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

interface CardHeaderComponentProps {
    subCategory: string;
    city: string | undefined;
    gu: string | undefined;
}

export const CardHeaderComponent = ({
    city,
    gu,
    subCategory,
}: CardHeaderComponentProps) => {
    return (
        <CardHeader>
            <CardTitle>
                <div className="inline-block text-xs bg-slate-100 border border-slate-400 rounded-lg px-2 text-slate-600">
                    {subCategory}
                </div>
            </CardTitle>
            <div className="flex justify-between items-center text-sm">
                <CardDescription>
                    {city} {gu}
                </CardDescription>
                <CardDescription>총 200명</CardDescription>
            </div>
        </CardHeader>
    );
};
