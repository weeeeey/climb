'use client';

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
import { CategoryType } from '../new/new-types';
import { subCategories } from '@/config/data';

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
    const handleClick = (sub: string = '') => {
        router.push(`/${url}/${sub}`);
    };

    return (
        <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <DropdownMenuTrigger
                onClick={() => setIsMenuOpen(true)}
                className={cn(
                    'text-xl md:text-2xl outline-none ',
                    selectedFont(url, pathName)
                )}
            >
                {title}
            </DropdownMenuTrigger>
            <DropdownMenuContent
                onPointerEnter={() => setIsMenuOpen(true)}
                onPointerLeave={() => setIsMenuOpen(false)}
            >
                <div className="flex justify-center items-center">
                    {subCates?.map((sub, idx) => (
                        <DropdownMenuItem
                            key={sub}
                            className={cn(
                                'cursor-pointer px-3 ',
                                idx !== subCates.length - 1 && 'border-r-2'
                            )}
                            onClick={() => handleClick(sub)}
                        >
                            {sub}
                        </DropdownMenuItem>
                    ))}
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
