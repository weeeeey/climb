import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const NavLogo = () => {
    return (
        <Link href="/" className="w-28 h-24 relative">
            <Image src="/WC.png" fill alt="logo" />
        </Link>
    );
};
