"use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header/header";
import CircleGradient from "@/components/CircleGradient/circle";
import { useAtom } from "jotai";
import { darkModeAtom } from "@/stores/darkMode";
import { useEffect, useState } from "react";
import { setDefaultResultOrder } from "dns";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [darkMode] = useAtom(darkModeAtom);
  const [darkModeString, setDarkModeString] = useState<string>();

  useEffect(() => {
    darkMode ? setDarkModeString("dark") : setDarkModeString("light");
  }, [darkMode]);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${darkModeString} antialiased max-w-[1100px] mx-auto`}
      >
        <CircleGradient />

        <Header />
        {children}
      </body>
    </html>
  );
}
