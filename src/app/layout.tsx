import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({
//   subsets: ["latin"],
//   preload: true,
//   display: "fallback",
// });

// if 4.0
import localFont from 'next/font/local'

const inter = localFont({
  src: '../../public/fonts/inter_font_4.0.ttf',
  display: 'fallback',
})

export const metadata: Metadata = {
  title: "Jamstack 101",
  description:
    "A Jamstack website, delivering SEO-friendly, lean & clean HTML in milliseconds, promises higher search-engine ranking and a more positive, responsive end-user experience.",

  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary text-body-text`}>{children}</body>
    </html>
  );
}
