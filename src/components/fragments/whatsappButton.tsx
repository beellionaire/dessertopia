"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useSession, signIn } from "next-auth/react"; // Import signIn
import { useRouter } from "next/navigation";

type WhatsAppButtonProps = {
  productName: string;
  productPrice: number;
};

export default function WhatsAppButton({
  productName,
  productPrice,
}: WhatsAppButtonProps) {
  const { status } = useSession(); // Cek status login
  const router = useRouter(); // Untuk mengarahkan ke halaman login

  const handleWhatsAppClick = () => {
    if (status !== "authenticated") {
      // Jika belum login, arahkan ke halaman login Google
      signIn(); // Menampilkan halaman login Google
      return;
    }

    const phoneNumber = "628123456789"; // Ganti dengan nomor WhatsApp Anda
    const message = `Halo, saya tertarik dengan produk "${productName}" seharga Rp${productPrice.toLocaleString(
      "id-ID"
    )}.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank"); // Buka URL di tab baru
  };

  return (
    <button
      className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
      onClick={handleWhatsAppClick}
    >
      <div className="flex items-center justify-center gap-5 text-2xl">
        <FaWhatsapp /> Pesan
      </div>
    </button>
  );
}
