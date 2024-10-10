import { AntdRegistry } from '@ant-design/nextjs-registry';
import clsx from "clsx";
import localFont from "next/font/local";
import Script from 'next/script';
import { Suspense } from 'react';

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { siteMetadata } from '@/constants/siteMetadata';

import Loading from './loading';

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`
  },
  description: "Xóm nhậu - Tổng hợp sự kiện trong bàn nhậu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        async
        id="google-tag-manager"
        src="https://www.googletagmanager.com/gtag/js?id=G-82DHS8KM1Q"
      >
      </Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-82DHS8KM1Q');
          `}
      </Script>
      <body
        className={clsx(
          `${geistSans.variable} ${geistMono.variable} antialiased`,
          'max-w-[1170px] mx-auto'
        )}
      >
        <AntdRegistry>
          <Suspense fallback={<Loading />}>
            <Header />
            {children}
            <Footer />
          </Suspense>
        </AntdRegistry>
      </body>
    </html>
  );
}
