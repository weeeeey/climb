'use client';
import React, { useEffect, useState } from 'react';
import { ChevronUpIcon } from '@radix-ui/react-icons';

export const TopButton = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        return () => {
            setIsMounted(false);
        };
    }, []);
    if (!isMounted) {
        return null;
    }

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-4 right-4 hidden sm:w-12 sm:h-12 rounded-full sm:flex flex-col justify-center items-center  border border-red-400 z-5"
        >
            <ChevronUpIcon className="text-red-400 w-14 h-14" />
            <div className="font-thin text-sm relative bottom-2 sm:block hidden ">
                TOP
            </div>
        </button>
    );
};
