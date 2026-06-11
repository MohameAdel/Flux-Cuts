import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flux Cuts - AI Ad Creatives",
  description: "Flux Cuts AI ad creative production built with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
