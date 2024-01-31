import React from 'react';
import NavBody from './nav-body';
import { NavLogo } from './nav-logo';
import { NavUser } from './nav-user';
import currentProfile from '@/action/current-profile';

const NavBar = async () => {
    const isLogin = await currentProfile();

    return (
        <nav className="flex justify-between items-center px-2 sm:px-10 shadow-slate-300 shadow-lg">
            <NavLogo />
            <NavBody />
            <NavUser isLogin={isLogin?.id ? true : false} />
        </nav>
    );
};

export default NavBar;
