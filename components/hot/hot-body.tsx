'use client';
import { useQueryContent } from '@/lib/use-query-content';
import { HotMain } from './hot-main';
import { HotSkeleton } from './hot-skeleton';
import { ErrorPage } from '../error';

interface HotBodyProps {
    category: string;
    subCategory: string;
}

export const HotBody = ({ subCategory, category }: HotBodyProps) => {
    const { data, isLoading, isError } = useQueryContent({
        cType: 'hot',
        id: subCategory,
    });
    if (isLoading) {
        return <HotSkeleton />;
    }
    if (isError) {
        return <ErrorPage />;
    }

    return (
        <HotMain
            category={category}
            subCategory={subCategory}
            posts={data.posts}
        />
    );
};
