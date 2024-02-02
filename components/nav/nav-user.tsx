import { navFont } from '@/font.config';
import { cn } from '@/lib/utils';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';

interface NavUserProps {
    isLogin: boolean;
}

export const NavUser = ({ isLogin }: NavUserProps) => {
    if (isLogin) {
        return <UserButton />;
    }
    return (
        <Link
            href="/sign-in"
            className={cn('text-base sm:text-2xl', navFont.className)}
        >
            Login
        </Link>
    );
};
