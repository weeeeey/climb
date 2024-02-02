import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

export const HotCard = ({ item, text }: { item: number; text: string }) => {
    return (
        <div className="p-5">
            <Card>
                <CardHeader>
                    <CardTitle>
                        <div className="inline-block text-xs bg-slate-100 border border-slate-400 rounded-lg px-2 text-slate-600">
                            크루 {item}
                        </div>
                    </CardTitle>
                    <div className="flex justify-between items-center text-sm">
                        <CardDescription>관악구</CardDescription>
                        <CardDescription>총 200명</CardDescription>
                    </div>
                </CardHeader>
                <CardContent className="flex flex-col  justify-start p-5 pt-0 mb-5 space-y-3">
                    <div className="text-sm text-slate-400 ">
                        게시일 2024.01.10
                    </div>
                    <div className="text-2xl font-semibold">{text}</div>
                </CardContent>
                <CardFooter className="block text-end text-slate-400 text-sm">
                    <span>조회수 </span>
                    <span>100회 </span>
                </CardFooter>
            </Card>
        </div>
    );
};
