import { Poppins } from 'next/font/google';

import { cn } from '@/lib/utils';
import { navFont } from '@/font.config';

const font = Poppins({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800'],
});

export const Logo = () => {
    return (
        <div className="flex flex-col items-center mb-0 xs:mb-10 md:mb-20">
            <div className={cn('flex flex-col items-center', font.className)}>
                <p
                    className={cn(
                        'text-4xl xs:text-6xl md:text-8xl font-semibold',
                        navFont.className
                    )}
                >
                    <span className="text-red-500">W</span>e{' '}
                    <span className="text-red-500">C</span>limber
                </p>
                <p className="text-sm text-muted-foreground ">
                    Let&apos;s play together!
                </p>
            </div>
        </div>
    );
};
