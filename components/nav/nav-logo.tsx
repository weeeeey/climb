import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const NavLogo = () => {
    return (
        <Link href="/" className="w-20 h-20 md:w-28 md:h-24 relative">
            <Image src="/WC.png" fill alt="logo" />
        </Link>
    );
};
