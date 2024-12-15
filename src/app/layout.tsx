"use client";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
const disableNavbar = ["/login", "/register"];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={poppins.className}>
        <SessionProvider>
          {!disableNavbar.includes(pathname) && <Navbar />}
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
