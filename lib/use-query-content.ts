'use client';

import { fetchFn } from '@/action/get-content';
import { useQuery } from '@tanstack/react-query';

interface UseQueryContentProps {
    cType: 'post' | 'subCategory' | 'hot';
    id: string;
    selectedPage?: number;
}

export const useQueryContent = ({
    cType,
    id,
    selectedPage,
}: UseQueryContentProps) => {
    const key = selectedPage ? [cType, id, selectedPage] : [cType, id];

    const { data, isError, isLoading } = useQuery({
        queryKey: key,
        queryFn: async () => {
            const res = await fetchFn({ id, cType, selectedPage });
            return res;
        },
    });
    return {
        data,
        isError,
        isLoading,
    };
};
