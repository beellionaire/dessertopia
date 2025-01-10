"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ProductInfo {
  productName: string;
  productDescription: string;
  productPrice: string;
}

export default function DeleteProductPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const [productInfo, setProductInfo] = useState<ProductInfo | null>(null);

  const [error, setError] = useState<string | null>(null);

  function goBack() {
    router.push("/list/products");
  }

  async function deleteProduct() {
    await axios.delete(`/api/products?id=${id}`);
    goBack();
  }

  const id = params.id; // Ambil ID dari params

  useEffect(() => {
    if (!id) {
      setError("ID produk tidak ditemukan.");
      return;
    }

    // Fetch data produk berdasarkan ID
    axios
      .get(`/api/products?id=${id}`)
      .then((response) => {
        setProductInfo(response.data);
        setError(null);
      })
      .catch((err) => {
        setError("Gagal memuat data produk.");
        console.error(err);
      });
  }, [id]);

  return (
    <div className="flex flex-col items-center gap-2 justify-center">
      <h1>
        Apakah anda yakin ingin menghapus {productInfo?.productName}
      </h1>
      <div className="flex gap-7">
        <button
          onClick={deleteProduct}
          className="w-10 h-10  flex items-center justify-center rounded-lg bg-red-600 px-11 hover:bg-red-700 transition-all text-white"
        >
          Hapus
        </button>
        <button
          onClick={goBack}
          className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-600 px-11 hover:bg-blue-700 transition-all text-white"
        >
          Batal
        </button>
      </div>
    </div>
  );
}
