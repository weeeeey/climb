import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { hotTitle } from '@/config/data';
import React from 'react';

interface CardHeaderComponentProps {
    subCategory: string;
    city: string | undefined;
    gu: string | undefined;
    place: string | null;
}

export const CardHeaderComponent = ({
    city,
    gu,
    subCategory,
    place,
}: CardHeaderComponentProps) => {
    return (
        <CardHeader>
            <CardTitle>
                <div className="inline-block text-xs bg-slate-100 border border-slate-400 rounded-lg px-2 text-slate-600">
                    {hotTitle[subCategory as keyof typeof hotTitle]}
                </div>
            </CardTitle>
            <div className="text-sm">
                {(city || place) && (
                    <div className="flex justify-between sm:items-center text-nowrap sm:flex-row flex-col items-start ">
                        <CardDescription>
                            {city} {gu}
                        </CardDescription>
                        {place ? (
                            <CardDescription>[{place}]</CardDescription>
                        ) : (
                            <CardDescription>[원정러들]</CardDescription>
                        )}
                    </div>
                )}
            </div>
        </CardHeader>
    );
};
