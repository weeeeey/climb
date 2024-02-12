'use client';

import { navFont } from '@/font.config';
import { useModalStore } from '@/lib/use-modal';
import { cn } from '@/lib/utils';
import { CircleUser } from 'lucide-react';
import React from 'react';

export const NavGuest = () => {
    const { onOpen } = useModalStore();
    return (
        <div
            onClick={onOpen}
            className={cn('text-base sm:text-2xl', navFont.className)}
        >
            <CircleUser className="w-7 h-7 cursor-pointer" />
        </div>
    );
};
