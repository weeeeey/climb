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
    title: string;
}

export const NavItem = ({ title }: NavItemProps) => {
    const pathName = usePathname();
    const router = useRouter();
    const [subCates, setsubCates] = useState<string[]>();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        if (title.toLocaleLowerCase()) {
            setsubCates(
                subCategories[title.toLocaleLowerCase() as CategoryType]
            );
        }
    }, [title]);
    const handleClick = (sub: string = '') => {
        router.push(`/${title.toLocaleLowerCase()}/${sub}`);
    };

    return (
        <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <DropdownMenuTrigger
                onClick={() => setIsMenuOpen(true)}
                className={cn(
                    'text-xl md:text-2xl outline-none ',
                    selectedFont(title.toLocaleLowerCase(), pathName)
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
