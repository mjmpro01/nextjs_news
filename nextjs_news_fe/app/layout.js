import { AntdRegistry } from '@ant-design/nextjs-registry';
import clsx from "clsx";
import localFont from "next/font/local";
import { Suspense } from 'react';

import Footer from "@/components/footer";
import Header from "@/components/header";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
