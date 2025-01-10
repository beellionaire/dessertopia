"use client";
import { Poppins } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/fragments/navbar";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Cek jika `pathname` dimulai dengan "/list" atau ada di daftar tertentu
  const disableNavbar =
    pathname.startsWith("/list") ||
    ["/login", "/register", "/admin", "/settings"].includes(pathname);

  return (
    <html lang="en">
      <body className={poppins.className}>
        <SessionProvider>
          {!disableNavbar && <Navbar />}
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
  