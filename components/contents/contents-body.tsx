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
import { ContentsTitle } from './contents-title';
import { SearchBody } from '../search/search-body';
import { useSearchParams } from 'next/navigation';

export const ContentsBody = ({
    subCategory,
    likesArray,
    category,
}: Omit<ContentsBodyProps, 'posts' | '_count'>) => {
    const [boardTitle, setBoardTitle] = useState<string>();
    const [selectedPage, setSelectedPage] = useState<number>(1);
    const [postCout, setpostCout] = useState<number>(1);

    const searchParam = useSearchParams();
    const { data, isError, isLoading } = useQueryContent({
        cType: 'subCategory',
        id: subCategory,
        selectedPage,
        searchTitle: searchParam.get('title') || undefined,
    });

    useEffect(() => {
        setBoardTitle(subCategoryKor[subCategory as subCategoryKorType]);
    }, [subCategory]);

    useEffect(() => {
        setSelectedPage(1);
    }, [searchParam]);

    useEffect(() => {
        if (data) {
            setpostCout(data.postCounts);
        }
    }, [data]);

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
            <SearchBody category={category} subCategory={subCategory} />
            <PagiBody
                postsCount={postCout}
                movePage={movePage}
                nextPage={nextPage}
                previousPage={prevousPage}
                selectedPage={selectedPage}
            />
        </div>
    );
};
