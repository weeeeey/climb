import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import NavBar from '@/components/nav/nav-bar';
import { siteConfig } from '@/config/site';
import { TopButton } from '@/components/ui/topButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: [
        {
            url: '/metaLogo.png',
            href: '/metaLogo.png',
        },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={inter.className}>
                    <NavBar />
                    <main className="px-10 sm:px-20 pt-5 bg-slate-100 w-full h-full">
                        {children}
                    </main>
                    <TopButton />
                </body>
            </html>
        </ClerkProvider>
    );
}
