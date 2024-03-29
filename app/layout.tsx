import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import NavBar from '@/components/nav/nav-bar';
import { siteConfig } from '@/config/site';
import { TopButton } from '@/components/ui/topButton';
import QueryProvider from '@/provider/query-provider';
import ToasterProvider from '@/provider/toast-provider';
import Script from 'next/script';
import { FooterBody } from '@/components/footer/footer-body';
import { Billboard } from '@/components/hot/hot-billboard';
import { ModalProvider } from '@/provider/modal-provider';

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
        <QueryProvider>
            <ClerkProvider>
                <html lang="en">
                    <body className={inter.className}>
                        <ModalProvider />
                        <ToasterProvider />
                        <NavBar />

                        <Script
                            src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_APPKEY}&libraries=services,clusterer&autoload=false`}
                            strategy="beforeInteractive"
                        />
                        <Billboard />
                        <main className="px-5 md:px-20  pt-5 pb-20 ">
                            {children}
                        </main>
                        <TopButton />
                        <FooterBody />
                    </body>
                </html>
            </ClerkProvider>
        </QueryProvider>
    );
}
