'use client';
import { ContentsBody } from '@/components/contents/contents-body';
import { ErrorPage } from '@/components/error';
import { Loading } from '@/components/loading';
import { useQueryContent } from '@/lib/use-query-content';
import React from 'react';

const CommunitySubCategoryPage = ({
    params,
}: {
    params: { subCategory: string };
}) => {
    const { subCategory } = params;

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
    return <ContentsBody posts={posts} subCategory={subCategory} />;
};

export default CommunitySubCategoryPage;
