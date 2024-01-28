import { navFont } from '@/font.config';
import { cn } from '@/lib/utils';
import { UserButton } from '@clerk/nextjs';
import { Profile } from '@prisma/client';
import Link from 'next/link';
import React from 'react';

interface NavUserProps {
    isLogin: boolean;
}

export const NavUser = ({ isLogin }: NavUserProps) => {
    return (
        <Link
            href="/sign-in"
            className={cn('text-base sm:text-2xl', navFont.className)}
        >
            Login
        </Link>
    );
};
