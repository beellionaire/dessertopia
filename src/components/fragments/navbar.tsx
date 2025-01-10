"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { MdAccountCircle } from "react-icons/md";

export default function Navbar() {
  const { data: session, status } = useSession();
  const [isCardOpen, setIsCardOpen] = useState(false);

  const toggleCard = () => {
    setIsCardOpen(!isCardOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex bg-[#A67B5B] py-3 px-8 justify-between h-24">
      <div className="flex justify-center items-center">
        <Link href="/">
          <h1 className="text-white text-2xl">DESSERTOPIA</h1>
        </Link>
      </div>

      <div className="flex justify-center items-center gap-7">
        <Link
          href="/"
          className="text-white text-lg hover:text-slate-300 transition-all"
        >
          Home
        </Link>
        <Link
          href="/product"
          className="text-white text-lg hover:text-slate-300 transition-all"
        >
          Produk
        </Link>
        <Link
          href="/about"
          className="text-white text-lg hover:text-slate-300 transition-all"
        >
          Tentang Kami
        </Link>
        {session?.user?.isAdmin && (
          <Link
            href="/list/products"
            className="text-white text-lg hover:text-slate-300 transition-all"
          >
            Kelola Produk
          </Link>
        )}
      </div>

      <div className="flex justify-center items-center">
        {status === "authenticated" ? (
          <div className="flex gap-4 justify-center items-center">
            <MdAccountCircle
              className="text-4xl text-white cursor-pointer"
              onClick={toggleCard}
            />
            {isCardOpen && (
              <div className="absolute top-[70px] right-8 bg-white shadow-lg rounded-md w-64 p-4 z-50 flex items-center justify-center flex-col">
                <div className="px-4 py-2">
                  <p className="font-semibold text-gray-700">
                    {session?.user?.name || "User Name"}
                  </p>
                  <p className="text-sm text-gray-500">
                    {session?.user?.email || "email@example.com"}
                  </p>
                </div>

                <button
                  onClick={() => signOut()}
                  className="w-[200px] text-center text-white bg-red-500 p-2 rounded-md hover:bg-red-600"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            className="border rounded-md p-3 text-white text-sm hover:bg-orange-500 transition-all duration-300"
            onClick={() => signIn()}
          >
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
}
