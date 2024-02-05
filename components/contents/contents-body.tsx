'use client';

import { Table } from '@/components/ui/table';
import { ContentsHead } from './contents-head';
import { ContentsRows } from './contents-rows';
import { ContentsBodyProps, subCategoryKorType } from './contents-types';
import { useQueryContent } from '@/lib/use-query-content';
import { Loading } from '../loading';
import { ErrorPage } from '../error';
import { useEffect, useState } from 'react';
import { subCategoryKor } from '@/config/data';
import { cn } from '@/lib/utils';
import { boardTitleFont } from '@/font.config';

export const ContentsBody = ({
    subCategory,
    likesArray,
}: Omit<ContentsBodyProps, 'posts'>) => {
    const [boardTitle, setBoardTitle] = useState<string>();

    useEffect(() => {
        setBoardTitle(subCategoryKor[subCategory as subCategoryKorType]);
    }, [subCategory]);

    const {
        data: posts,
        isError,
        isLoading,
    } = useQueryContent({
        cType: 'subCategory',
        id: subCategory,
    });

    if (isLoading) {
        return <Loading />;
    }
    if (isError) {
        return <ErrorPage />;
    }

    return (
        <div className="xl:mx-52 mt-10 space-y-5">
            <div
                className={cn(
                    ' bg-red-100 rounded-lg flex justify-start   items-center  text-2xl px-3 py-1 ',
                    boardTitleFont.className
                )}
            >
                <div className="w-2 h-5  mr-2 bg-black inline-block" />
                <span className="inline-block ">{boardTitle}</span>
            </div>

            <Table>
                <ContentsHead />
                <ContentsRows posts={posts} likesArray={likesArray} />
            </Table>
        </div>
    );
};
