'use client';

import { fetchFn } from '@/action/get-content';
import { useQuery } from '@tanstack/react-query';

interface UseQueryContentProps {
    cType: 'post' | 'subCategory' | 'hot' | 'comment';
    id: string;
    selectedPage?: number;
    searchTitle?: string;
}

export const useQueryContent = ({
    cType,
    id,
    selectedPage,
    searchTitle,
}: UseQueryContentProps) => {
    const key = selectedPage
        ? [cType, id, selectedPage, searchTitle]
        : [cType, id];
    const { data, isError, isLoading } = useQuery({
        queryKey: key,
        queryFn: async () => {
            const res = await fetchFn({ id, cType, selectedPage, searchTitle });
            return res;
        },
    });
    return {
        data,
        isError,
        isLoading,
    };
};
