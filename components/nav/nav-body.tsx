import React from 'react';
import { NavItem } from './nav-item';

const NavBody = () => {
    return (
        <div className="flex justify-between items-center gap-x-4 mx-auto">
            <NavItem title="Crew" url="crew" />
            <NavItem title="Community" url="community" />
            <NavItem title="Review" url="review" />
            <NavItem title="Market" url="market" />
        </div>
    );
};

export default NavBody;
