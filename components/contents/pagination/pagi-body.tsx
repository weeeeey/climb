'use client';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface PagiBoddyProps {
    selectedPage: number;
    previousPage: (page: number) => void;
    nextPage: (page: number, maxPage: number) => void;
    movePage: (page: number) => void;

    postsCount: number;
}

export function PagiBody({
    postsCount,
    selectedPage,
    nextPage,
    previousPage,
    movePage,
}: PagiBoddyProps) {
    const [totalPage, setTotalPage] = useState<number[]>([]);

    useEffect(() => {
        const pagesArray = Array.from(
            { length: Math.ceil(postsCount / 13) },
            (_, index) => index + 1
        );
        setTotalPage(pagesArray);
    }, [postsCount]);

    return (
        <Pagination>
            <PaginationContent className="cursor-pointer">
                <PaginationItem>
                    <PaginationPrevious
                        onClick={() => previousPage(selectedPage)}
                    />
                </PaginationItem>
                {totalPage.map((i) => (
                    <PaginationItem key={i}>
                        <PaginationLink
                            onClick={() => movePage(i)}
                            className={cn(
                                selectedPage === i &&
                                    'underline underline-offset-2'
                            )}
                        >
                            {i}
                        </PaginationLink>
                    </PaginationItem>
                ))}

                <PaginationItem>
                    <PaginationNext
                        onClick={() => nextPage(selectedPage, totalPage.length)}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
