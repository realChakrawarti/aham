import { HOME_OG_IMAGE_URL } from "@/utils/constants";
import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { basePath } from "@/next.config";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
  title: `${process.env.BRAND_NAME}`,
  description: `${process.env.BRAND_NAME}`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${GeistSans.variable} ${GeistMono.variable}`} lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${basePath}/favicon/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${basePath}/favicon/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${basePath}/favicon/favicon-16x16.png`}
        />
        <link rel="manifest" href={`${basePath}/favicon/site.webmanifest`} />
        <link
          rel="mask-icon"
          href={`${basePath}/favicon/safari-pinned-tab.svg`}
          color="#000000"
        />
        <link rel="shortcut icon" href={`${basePath}/favicon/favicon.ico" /`} />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link
          rel="alternate"
          type="application/rss+xml"
          href={`${basePath}/feed.xml" />`}
        />
      </head>
      <body
        className={`dark min-h-screen font-sans bg-dark text-default flex flex-col container mx-auto px-5`}
      >
        <Header />
        <main className="py-10 px-6 flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
