'use client';

import { fetchFn } from '@/action/get-content';
import { useQuery } from '@tanstack/react-query';

interface UseQueryContentProps {
    cType: 'post' | 'subCategory' | 'hot';
    id: string;
}

export const useQueryContent = ({ cType, id }: UseQueryContentProps) => {
    const key = [cType, id];
    const { data, isError, isLoading } = useQuery({
        queryKey: key,
        queryFn: async () => {
            const res = await fetchFn({ id, cType });
            return res;
        },
    });
    return {
        data,
        isError,
        isLoading,
    };
};
