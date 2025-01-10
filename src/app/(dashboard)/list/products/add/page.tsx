"use client";

import ProductForm from "@/components/fragments/productForm";

const AddProduct = () => {
  return (
    <div className="bg-white p-4 rounded-lg flex-1 m-4 mt-0">
      <h1 className="hidden md:block text-2xl font-semibold text-slate-600">
        Input Produk
      </h1>
      <ProductForm />
    </div>
  );
};

export default AddProduct;
