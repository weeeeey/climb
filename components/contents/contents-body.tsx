'use client';

import { Table } from '@/components/ui/table';
import { ContentsHead } from './contents-head';
import { ContentsRows } from './contents-rows';
import { ContentsBodyProps } from './contents-types';
import { useQueryContent } from '@/lib/use-query-content';
import { Loading } from '../loading';
import { ErrorPage } from '../error';

export const ContentsBody = ({
    subCategory,
    likesArray,
}: Omit<ContentsBodyProps, 'posts'>) => {
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
            <div className="bg-slate-200 rounded-lg inline-block text-xl px-3 py-1">
                <div className="w-2 h-4 mr-2 bg-black inline-block" />
                {subCategory.charAt(0).toUpperCase() + subCategory.slice(1)}
            </div>

            <Table>
                <ContentsHead />
                <ContentsRows posts={posts} likesArray={likesArray} />
            </Table>
        </div>
    );
};
