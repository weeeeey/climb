'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { selectedFont } from '@/lib/selectedFont';
import { usePathname } from 'next/navigation';
interface NavItemProps {
    url: string;
    title: string;
}

export const NavItem = ({ title, url }: NavItemProps) => {
    const pathName = usePathname();

    return (
        <Link
            href={url}
            className={cn('text-base sm:text-2xl', selectedFont(url, pathName))}
        >
            {title}
        </Link>
    );
};
