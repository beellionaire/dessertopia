import WhatsAppButton from "@/components/fragments/whatsappButton";
import { getData } from "@/services/products";
import Image from "next/image";

import { FaWhatsapp } from "react-icons/fa";

type Product = {
  _id: string;
  productName: string;
  productDescription: string;
  productPrice: number;
  productPhoto: string;
};

type DetailProductPageProps = {
  params: {
    id: string;
  };
};

export default async function DetailProductPage({
  params,
}: DetailProductPageProps) {
  try {
    // Ambil data produk berdasarkan ID
    const product: Product | null = await getData(
      `https://dessertopia.vercel.app/api/products/?id=${params.id}`
    );

    // Jika produk tidak ditemukan
    if (!product) {
      return (
        <div className="p-10 max-w-[1000px] mx-auto text-center mt-32 mb-8">
          <h1 className="text-2xl font-bold text-red-500">
            Produk tidak ditemukan.
          </h1>
        </div>
      );
    }

    return (
      <div className="p-10 max-w-[1000px] mx-auto border rounded-xl shadow-lg mt-32 mb-8">
        <div className="grid grid-cols-12 gap-10">
          {/* Bagian Gambar */}
          <div className="col-span-5">
            <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={product.productPhoto[0]} // Menggunakan URL gambar dari API
                alt={product.productName} // Menggunakan nama produk untuk alt
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          {/* Bagian Detail */}
          <div className="col-span-7 flex justify-evenly flex-col">
            <h1 className="text-2xl font-semibold mb-2">
              {product.productName}
            </h1>

            <div className="text-2xl font-bold text-red-500 mb-2">
              Rp{product.productPrice.toLocaleString("id-ID")}
            </div>

            <div className="flex items-center gap-4 mb-6">
              {/* <div className="flex items-center border border-gray-300 rounded-md">
                <button className="px-3 py-2 text-gray-600 hover:bg-gray-100">
                  -
                </button>
                <input
                  type="text"
                  defaultValue="1"
                  className="w-12 text-center border-l border-r border-gray-300 outline-none"
                />
                <button className="px-3 py-2 text-gray-600 hover:bg-gray-100">
                  +
                </button>
              </div> */}
            </div>
            <div className="flex gap-2">
              {/* <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition " onClick={handleWhatsAppClick}>
                <div className="flex items-center justify-center gap-5 text-2xl">
                  <FaWhatsapp /> Pesan
                </div>
              </button> */}
              <WhatsAppButton
                productName={product.productName}
                productPrice={product.productPrice}
              />
            </div>
          </div>
        </div>

        {/* Detail Produk */}
        <div className="mt-6">
          <h2 className="text-lg font-bold mb-2">Deskripsi</h2>
          <p className="text-sm text-gray-600 leading-relaxed text-justify">
            {product.productDescription}
          </p>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    return (
      <div className="p-10 max-w-[1000px] mx-auto text-center mt-32 mb-8">
        <h1 className="text-2xl font-bold text-red-500">
          Terjadi kesalahan saat memuat produk.
        </h1>
      </div>
    );
  }
}
