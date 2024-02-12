'use client';
import { NavMobileItem } from './nav-mobile-item';

interface NavMobileItemsProps {
    handleClick: (cate: string, sub: string) => void;
}

export const NavMobileItems = ({ handleClick }: NavMobileItemsProps) => {
    return (
        <div className="mt-10 flex flex-col justify-between items-start space-y-2 pl-2">
            <NavMobileItem handleClick={handleClick} selecteCategory="Crew" />
            <NavMobileItem
                handleClick={handleClick}
                selecteCategory="Community"
            />
            <NavMobileItem handleClick={handleClick} selecteCategory="Review" />
            <NavMobileItem handleClick={handleClick} selecteCategory="Market" />
        </div>
    );
};
