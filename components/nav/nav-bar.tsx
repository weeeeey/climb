import React from 'react';
import NavBody from './nav-body';
import { NavLogo } from './nav-logo';
import { NavUser } from './nav-user';
import currentProfile from '@/action/current-profile';
import { NavMobile } from './nav-mobile';

const NavBar = async () => {
    const isLogin = await currentProfile();

    return (
        <div className="px-2 sm:px-10 shadow-slate-300 shadow-lg fixed bg-white z-10 top-0 w-full md:static">
            <nav className="hidden md:flex justify-between items-center ">
                <NavLogo />
                <NavBody />
                <NavUser isLogin={isLogin?.id ? true : false} />
            </nav>
            <nav className="md:hidden w-full flex justify-between items-center ">
                <NavMobile isLogin={isLogin} />
                <NavLogo />
            </nav>
        </div>
    );
};

export default NavBar;
