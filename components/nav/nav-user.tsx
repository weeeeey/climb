'use client';
import { UserButton } from '@clerk/nextjs';
import React from 'react';
import { NavGuest } from './nav-guest';
import { usePathname } from 'next/navigation';

interface NavUserProps {
    isLogin: boolean;
}

export const NavUser = ({ isLogin }: NavUserProps) => {
    const pathname = usePathname();
    if (isLogin) {
        return <UserButton afterSignOutUrl={pathname} />;
    } else {
        return <NavGuest />;
    }
};
