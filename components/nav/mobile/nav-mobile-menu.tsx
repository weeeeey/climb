'use client';
import { Menu } from 'lucide-react';
import React, { useState } from 'react';

import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { NavMobileItems } from './nav-mobile-items';
import { useRouter } from 'next/navigation';

export const NavMobileMenu = () => {
    const router = useRouter();
    const handleClick = (cate: string, sub: string) => {
        router.push(`/${cate.toLocaleLowerCase()}/${sub}`);
        setIsOpen(false);
    };
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
                <DrawerTrigger>
                    <Menu className="h-7 w-7 " />
                </DrawerTrigger>
                <DrawerContent className="w-1/2 h-full rounded-none">
                    <NavMobileItems handleClick={handleClick} />
                </DrawerContent>
            </Drawer>
        </>
    );
};
