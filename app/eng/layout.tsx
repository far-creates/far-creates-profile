import SiteHeader from "@/components/molecules/SiteHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Far Creates",
  description: "Far Creates Web-Content, Coppywritings, Web-Apps, Databases, ",
};

export default function EngLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` max-w-360 m-auto`}>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
