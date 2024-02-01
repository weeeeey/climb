'use client';

import { fetchFn } from '@/action/get-content';
import { useQuery } from '@tanstack/react-query';

interface UseQueryContentProps {
    cType: 'post' | 'subCategory';
    id: string;
}

export const useQueryContent = ({ cType, id }: UseQueryContentProps) => {
    const key = cType === 'post' ? ['post', id] : ['subCategory', id];

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