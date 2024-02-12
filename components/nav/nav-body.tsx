import React from 'react';
import { NavItem } from './nav-item';

const NavBody = () => {
    return (
        <div className="flex justify-between items-center gap-x-4 mx-auto">
            <NavItem title="Crew" />
            <NavItem title="Community" />
            <NavItem title="Review" />
            <NavItem title="Market" />
        </div>
    );
};

export default NavBody;
