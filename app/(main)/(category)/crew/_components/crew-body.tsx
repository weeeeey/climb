'use client';
import { ContentsTitle } from '@/components/contents/contents-title';
import { subCategoryKorType } from '@/components/contents/contents-types';
import { PagiBody } from '@/components/contents/pagination/pagi-body';
import { ErrorPage } from '@/components/error';
import { Loading } from '@/components/loading';
import { SearchBody } from '@/components/search/search-body';
import { subCategoryKor } from '@/config/data';
import { useQueryContent } from '@/lib/use-query-content';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { CrewMain } from './crew-main';

interface CrewBodyProps {
    category: string;
    subCategory: string;
    likesArray: string[] | null;
}

export const CrewBody = ({
    category,
    likesArray,
    subCategory,
}: CrewBodyProps) => {
    const titleRef = useRef<HTMLDivElement>(null);
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
        if (titleRef.current) {
            titleRef.current.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                titleRef.current!.focus();
            }, 300);
        }
    }, [selectedPage]);

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
        <div className="mt-10 space-y-8">
            <ContentsTitle titleRef={titleRef} boardTitle={boardTitle} />
            <CrewMain
                subCategory={subCategory}
                likesArray={likesArray}
                posts={data.posts}
            />
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
