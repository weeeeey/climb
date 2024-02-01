'use client';
import { useQueryContent } from '@/lib/use-query-content';
import React from 'react';

const SubCategoryPage = ({ params }: { params: { subCategory: string } }) => {
    const { subCategory } = params;

    const {
        data: postList,
        isError,
        isLoading,
    } = useQueryContent({
        cType: 'subCategory',
        id: subCategory,
    });
    console.log(postList);
    return <div>{subCategory}</div>;
};

export default SubCategoryPage;
