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
import { PagiBody } from './pagination/pagi-body';
import { NewRouterBtn } from '../new/new-routerBtn';
import { ContentsTitle } from './contents-title';

export const ContentsBody = ({
    subCategory,
    likesArray,
    category,
}: Omit<ContentsBodyProps, 'posts' | '_count'>) => {
    const [boardTitle, setBoardTitle] = useState<string>();

    const [selectedPage, setSelectedPage] = useState<number>(1);

    useEffect(() => {
        setBoardTitle(subCategoryKor[subCategory as subCategoryKorType]);
    }, [subCategory]);

    const { data, isError, isLoading } = useQueryContent({
        cType: 'subCategory',
        id: subCategory,
        selectedPage,
    });

    if (isLoading) {
        return <Loading />;
    }
    if (isError) {
        return <ErrorPage />;
    }

    const movePage = (page: number) => {
        setSelectedPage(page);
    };
    const prevousPage = (page: number) => {
        if (page <= 1) {
            return;
        }
        setSelectedPage(page - 1);
    };
    const nextPage = (page: number, maxPage: number) => {
        if (page >= maxPage) {
            return;
        }
        setSelectedPage(page + 1);
    };

    return (
        <div className="xl:mx-52 mt-10 space-y-8">
            <ContentsTitle boardTitle={boardTitle} />
            <Table>
                <ContentsHead />
                <ContentsRows posts={data.posts} likesArray={likesArray} />
            </Table>
            <NewRouterBtn category={category} subCategory={subCategory} />
            <PagiBody
                postsCount={data._count.posts}
                movePage={movePage}
                nextPage={nextPage}
                previousPage={prevousPage}
                selectedPage={selectedPage}
            />
        </div>
    );
};
