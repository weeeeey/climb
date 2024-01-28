import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

export const HotCard = ({ item }: { item: number }) => {
    return (
        <div className="p-5">
            <Card>
                <CardHeader>
                    <CardTitle>
                        <div className="inline-block bg-slate-300 border border-slate-400 rounded-lg px-2 py-1 text-slate-700">
                            Crew {item}
                        </div>
                    </CardTitle>
                    <div className="flex justify-between items-center text-sm">
                        <CardDescription>관악구</CardDescription>
                        <CardDescription>총 200명</CardDescription>
                    </div>
                </CardHeader>
                <CardContent className="flex flex-col  justify-start p-5 mb-5 space-y-3">
                    <div className="text-2xl font-semibold">
                        관악구 크루원 모집함다
                    </div>
                    <div className="text-sm text-slate-400 ">
                        게시일 2024.01.10
                    </div>
                </CardContent>
                <CardFooter className="block text-end text-slate-400 text-sm">
                    <span>조회수 </span>
                    <span>100회 </span>
                </CardFooter>
            </Card>
        </div>
    );
};
