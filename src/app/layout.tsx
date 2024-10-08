import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import StoreProvider from "./shared/components/StoreProvider";
import { Toaster } from "react-hot-toast";

const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const beatriceDeck = localFont({
  src: [
    {
      path: "../../public/fonts/BeatriceDeck-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/BeatriceDeck-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/BeatriceDeck-Medium.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/BeatriceDeck-Light.woff",
      weight: "200",
      style: "normal",
    },
  ],
  variable: "--font-beatrice",
  weight: "100 900",
  preload: true,
});

export const metadata: Metadata = {
  title: "Fashion Commerce",
  description:
    "This Fashion Collection Web App is a modern, responsive e-commerce application designed for showcasing and selling fashion items. The app features a clean and minimalistic design with a focus on usability and aesthetics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${beatriceDeck.variable} antialiased`}
      >
        <StoreProvider>
          <Toaster position="top-center" />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
