import { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./../index.css";
import { headers } from 'next/headers';

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "white",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Cadex test",
    template: "%s | Cadex",
  },
  authors: [{ name: "cadex team" }],
  creator: "cadex",
  publisher: "Cadex",
  category: "technology",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const nonce = headersList.get('x-nonce') || '';

  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="x-nonce" content={nonce} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
