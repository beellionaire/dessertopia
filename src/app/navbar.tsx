"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { FaShoppingCart, FaBell } from "react-icons/fa";
import { MdMessage } from "react-icons/md";

export default function Navbar() {
  const pathname = usePathname();
  const { data: session, status }: { data: any; status: string } = useSession();
  return (
    <nav className="flex bg-slate-800 py-3 px-5 justify-between h-24">
      <div className="flex justify-center items-center">
        <Link href="/">
          <h1 className="text-white text-2xl">TOKO APALAH</h1>
        </Link>
      </div>

      <div className=" flex flex-1 ml-4 max-w-[1000px] justify-center items-center">
        <input
          type="text"
          placeholder="Cari Barang"
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>

      <div className="flex justify-center items-center space-x-7">
        <Link
          href="/cart"
          className="text-white text-2xl hover:text-slate-300 transition-all"
        >
          <FaShoppingCart />
        </Link>
        <Link
          href="/cart"
          className="text-white text-2xl hover:text-slate-300 transition-all"
        >
          <MdMessage />
        </Link>
        <Link
          href="/cart"
          className="text-white text-2xl hover:text-slate-300 transition-all"
        >
          <FaBell />
        </Link>
      </div>

      <div className="flex justify-center items-center">
        {status === "authenticated" ? (
          <div className="flex">
            <h3 className="text-white mr-5">{session?.user?.fullname}</h3>
            <button
              className="bg-orange-600 rounded-md px-3 text-white text-sm h-7"
              onClick={() => signOut()}
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            className="bg-orange-600 rounded-md px-3 text-white text-sm h-7"
            onClick={() => signIn()}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
