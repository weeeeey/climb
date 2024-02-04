'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { selectedFont } from '@/lib/selectedFont';
import { usePathname, useRouter } from 'next/navigation';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { useEffect, useState } from 'react';
import { CategoryType, subCategories } from '../new/new-types';

interface NavItemProps {
    url: string;
    title: string;
}

export const NavItem = ({ title, url }: NavItemProps) => {
    const pathName = usePathname();
    const router = useRouter();
    const [subCates, setsubCates] = useState<string[]>();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        if (url) {
            setsubCates(subCategories[url as CategoryType]);
        }
    }, [url]);
    const handleClick = (sub: string) => {
        router.push(`/${url}/${sub}`);
    };
    if (url === 'market') {
        return (
            <div
                className={cn(
                    'text-base sm:text-2xl outline-none ',
                    selectedFont(url, pathName)
                )}
            >
                {title}
            </div>
        );
    }

    return (
        <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <DropdownMenuTrigger
                onPointerEnter={() => setIsMenuOpen(true)}
                onPointerLeave={() => setIsMenuOpen(false)}
                className={cn(
                    'text-base sm:text-2xl outline-none',
                    selectedFont(url, pathName)
                )}
            >
                {title}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {subCates?.map((sub, idx) => (
                    <DropdownMenuItem
                        onPointerEnter={() => setIsMenuOpen(true)}
                        onPointerLeave={() => setIsMenuOpen(false)}
                        key={sub}
                        className={cn(
                            'cursor-pointer inline-block px-3 ',
                            idx !== subCates.length - 1 && 'border-r-2'
                        )}
                        onClick={() => handleClick(sub)}
                    >
                        {sub}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
