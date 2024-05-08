import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import './globals.css';

const notoSans = Noto_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'SLVR Shop',
    description: 'Store created in Next',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${notoSans.className} mx-auto  grid max-w-full grid-cols-4 gap-4 px-4 md:grid-cols-6 md:gap-8 md:px-8 2xl:max-w-7xl 2xl:grid-cols-12`}
            >
                {children}
            </body>
        </html>
    );
}
