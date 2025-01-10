"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import ProductForm from "@/components/fragments/productForm";

interface ProductInfo {
  productName: string;
  productDescription: string;
  productPrice: string;
  productPhoto: string[];
}

export default function EditProduct({ params }: { params: { id: string } }) {
  const [productInfo, setProductInfo] = useState<ProductInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

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

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!productInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white p-4 rounded-lg flex-1 m-4 mt-0">
      <h1 className="hidden md:block text-2xl font-semibold text-slate-600">
        Edit Produk
      </h1>
      <ProductForm {...productInfo} />
    </div>
  );
}
