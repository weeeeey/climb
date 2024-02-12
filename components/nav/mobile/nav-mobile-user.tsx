import { UserButton } from '@clerk/nextjs';
import React from 'react';
import { NavGuest } from '../nav-guest';

interface NavMobileUserProps {
    isLogin: boolean;
}

export const NavMobileUser = ({ isLogin }: NavMobileUserProps) => {
    if (isLogin) {
        return <UserButton />;
    } else {
        return <NavGuest />;
    }
};
