import React from 'react';
import { NavLogo } from './nav-logo';
import { NavUser } from './nav-user';
import currentProfile from '@/action/current-profile';
import { NavMobileMenu } from './mobile/nav-mobile-menu';
import { NavMobileUser } from './mobile/nav-mobile-user';
import { NavMain } from './nav-main';

const NavBar = async () => {
    const isLogin = await currentProfile();

    return (
        <div className="px-2 md:px-10 shadow-slate-300 shadow-lg fixed bg-white z-30 top-0 w-full md:static">
            {/* 데스크탑 */}
            <nav className="hidden md:flex justify-between items-center ">
                <NavLogo />
                <NavMain />
                <NavUser isLogin={isLogin?.id ? true : false} />
            </nav>
            {/* 모바일 */}
            <nav className="md:hidden w-full flex justify-between items-center ">
                <div className="flex items-center space-x-2">
                    <NavMobileMenu />
                    <NavMobileUser isLogin={isLogin?.id ? true : false} />
                </div>
                <NavLogo />
            </nav>
        </div>
    );
};

export default NavBar;
