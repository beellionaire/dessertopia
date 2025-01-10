import Menu from "@/components/admin/Menu";
import Navbar from "@/components/admin/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* SIDEBAR */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] mx-5 dark:bg-slate-800">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2 p-4"
        >
          <Image src="/favicon.ico" alt="logo" height={32} width={32} />
          <span className="hidden lg:block font-bold text-lg">
            Admin Dashboard
          </span>
        </Link>
        <Menu />
      </div>

      {/* CONTENT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-gray-100 overflow-scroll flex flex-col dark:bg-slate-700">
        {/* <Navbar /> */}
        
        <div className="ml-4">

        {children}

        </div>

      </div>
    </div>
  );
}
