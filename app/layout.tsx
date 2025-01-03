import type { Metadata } from 'next';

import './globals.css';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import FooterDocker from '@/components/footer-docker';

export const metadata: Metadata = {
  title: `Home | A ${process.env.BRAND_NAME}`,
  description: "Anupam Chakrawarti | Folio",
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
          href={`/favicon/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href={`/favicon/icon.svg`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="any"
          href={`/favicon/icon.png`}
        />
        <link rel="manifest" href={`/favicon/site.webmanifest`} />
        <link
          rel="mask-icon"
          href={`/favicon/safari-pinned-tab.svg`}
          color="#000000"
        />
        <link rel="shortcut icon" href={`/favicon/favicon.ico" /`} />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link
          rel="alternate"
          type="application/rss+xml"
          href={`/feed.xml" />`}
        />
      </head>
      <body
        className="dark min-h-screen font-sans bg-dark text-default flex flex-col container mx-auto
          scroll-smooth"
      >
        <FooterDocker />
        <main className="pt-6 pb-24 md:py-24 px-6 flex-grow">{children}</main>
      </body>
    </html>
  );
}
