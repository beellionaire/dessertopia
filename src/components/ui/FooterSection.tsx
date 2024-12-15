"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black pt-24">
      <div className="container mx-auto pb-24">
        <div className="text-white grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-12">
          {/* info */}
          <div className="flex flex-col gap-4">
            <Link href="#">
              <Image
                src={"/assets/img/logo.png"}
                alt=""
                width={117}
                height={55}
              />
            </Link>

            <ul className="flex flex-col gap-4 mt-5">
              <li className="flex items-center gap-4">
                <span>Karanganyar, Indonesia</span>
              </li>
              <li className="flex items-center gap-4">
                <span>+62 812-3456-7890</span>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-4">
                  <span>apalah@gmail.com</span>
                </Link>
              </li>
            </ul>
          </div>
          {/* blog */}
          <div>
            <h4 className="h4 text-accent mb-4">Best Seller</h4>
            {/* post */}
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link
                href="/product"
                className="hover:text-accent transition-all"
              >
                <h5 className="h5 leading-snug">Semua Produk</h5>
                <em className="text-gray-400 text-[12px]">A4</em>
              </Link>
            </div>
            {/* post */}
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link href="#" className="hover:text-accent transition-all">
                <h5 className="h5 leading-snug">Cake</h5>
                <em className="text-gray-400 text-[12px]">A4</em>
              </Link>
            </div>
            {/* post */}
            <div className=" flex flex-col gap-3 pb-3 mb-4">
              <Link href="#" className="hover:text-accent transition-all">
                <h5 className="h5 leading-snug">Pastry</h5>
                <em className="text-gray-400 text-[12px]">A5</em>
              </Link>
            </div>
          </div>
          {/* gallery */}
          <div>
            <h4 className="h4 text-accent mb-4">Offline Store</h4>
            {/* post */}
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link href="#" className="hover:text-accent transition-all">
                <h5 className="h5 leading-snug">Karanganyar</h5>
                <em className="text-gray-400 text-[12px]">A5</em>
              </Link>
            </div>
            {/* post */}
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link href="#" className="hover:text-accent transition-all">
                <h5 className="h5 leading-snug">Surakarta</h5>
                <em className="text-gray-400 text-[12px]">A5</em>
              </Link>
            </div>
            {/* post */}
            <div className=" flex flex-col gap-3 pb-3 mb-4">
              <Link href="#" className="hover:text-accent transition-all">
                <h5 className="h5 leading-snug">Solo</h5>
                <em className="text-gray-400 text-[12px]">A5</em>
              </Link>
            </div>
          </div>
          {/* contact */}
          <div>
            <h4 className="h4 text-accent mb-4">Bantuan</h4>
            {/* post */}
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link href="#" className="hover:text-accent transition-all">
                <h5 className="h5 leading-snug">Layanan</h5>
                <em className="text-gray-400 text-[12px]">A5</em>
              </Link>
            </div>
            {/* post */}
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link href="#" className="hover:text-accent transition-all">
                <h5 className="h5 leading-snug">Kebijakan dan Privasi</h5>
                <em className="text-gray-400 text-[12px]">A5</em>
              </Link>
            </div>
            {/* post */}
            <div className=" flex flex-col gap-3 pb-3 mb-4">
              <Link href="#" className="hover:text-accent transition-all">
                <h5 className="h5 leading-snug">Syarat dan Ketentuan</h5>
                <em className="text-gray-400 text-[12px]">A5</em>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* copyright */}
      <div className="text-white border-t border-white/30 py-12">
        <div className="container mx-auto h-full">
          <div className="flex items-center justify-between h-full">
            <span>&copy; Copyright 2024 Apalah All Rights Reserved</span>
            <ul className="flex gap-4 text-xl">
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-accent transition-all"
                ></Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-accent transition-all"
                ></Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-accent transition-all"
                ></Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-accent transition-all"
                ></Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-accent transition-all"
                ></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
