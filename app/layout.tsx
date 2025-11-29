import type { Metadata } from "next";
import { Delius, Geist_Mono, Meow_Script } from "next/font/google";
import "./globals.css";

const primary = Delius({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const meowScript = Meow_Script({
  variable: "--font-meow-script",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Far Creates",
  description: "Far Creates Web-Content, Coppywritings, Web-Apps, Databases, ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${primary.variable} ${geistMono.variable} ${meowScript.variable} antialiased max-w-7xl m-auto`}
      >
        {children}
      </body>
    </html>
  );
}
