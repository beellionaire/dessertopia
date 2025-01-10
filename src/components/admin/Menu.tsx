"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";

import { GoHomeFill } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import { FaBoxArchive } from "react-icons/fa6";
import {
  RiLogoutBoxLine,
  RiShoppingBag4Fill,
  RiListUnordered,
} from "react-icons/ri";

const menuItems = [
  {
    title: "Menu",
    items: [
      // {
      //   icon: GoHomeFill,
      //   label: "Dashboard",
      //   href: "/admin",
      // },
      {
        icon: FaBoxArchive,
        label: "Produk",
        href: "/list/products",
      },
      // {
      //   icon: RiListUnordered,
      //   label: "Kategori",
      //   href: "/list/category",
      // },
      // {
      //   icon: RiShoppingBag4Fill,
      //   label: "Pesanan",
      //   href: "/list/orders",
      // },
      // {
      //   icon: IoMdSettings,
      //   label: "Settings",
      //   href: "/list/settings",
      // },
      {
        icon: RiLogoutBoxLine,
        label: "Logout",
        href: "/",
      },
    ],
  },
];

const Menu = () => {
  const pathname = usePathname();
  return (
    <div className="mt-2 text-sm">
      {menuItems.map((menu) => {
        return (
          <div className="flex flex-col gap-2" key={menu.title}>
            <span className="hidden lg:block text-gray-700 font-semibold my-2 text-xl dark:text-white">
              {menu.title}
            </span>
            {menu.items.map((item) => {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className={`flex items-center justify-center lg:justify-start gap-4 text-gray-600 hover:text-white transition-all p-3 rounded-lg hover:bg-orange-600 dark:text-white ${
                    pathname === item.href
                      ? "text-white  bg-orange-500 py-5"
                      : ""
                  }`}
                >
                  <item.icon className="text-2xl" />
                  <span className="hidden lg:block font-medium ">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
