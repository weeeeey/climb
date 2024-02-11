'use client';
import { Profile } from '@prisma/client';
import { Menu } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from '../ui/button';

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer';

interface NavMobileProps {
    isLogin: Profile | undefined;
}

export const NavMobile = ({ isLogin }: NavMobileProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Drawer>
                <DrawerTrigger>
                    <Menu className="h-10 w-10" />
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                        <DrawerDescription>
                            This action cannot be undone.
                        </DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                        <Button>Submit</Button>
                        <DrawerClose>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};
