import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiUpload } from "react-icons/fi";
import { supabase } from "@/lib/supabaseClient";

export default function ProductForm({
  _id,
  productName: currentName,
  productDescription: currentDescription,
  productPrice: currentPrice,
  productPhoto: currentPhoto,
}: any) {
  const [productName, setProductName] = useState(currentName || "");
  const [productDescription, setProductDescription] = useState(
    currentDescription || ""
  );
  const [productPrice, setProductPrice] = useState(currentPrice || "");
  const [goToProducts, setGoToProducts] = useState(false);
  const [productPhoto, setProductPhoto] = useState<string[]>(
    currentPhoto || []
  );
  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();

  async function saveProduct(e: any) {
    e.preventDefault();
    const data = {
      productName,
      productDescription,
      productPrice,
      productPhoto, // Mengirimkan URL gambar sebagai array string
    };

    if (_id) {
      // update
      await axios.put(`/api/products`, { ...data, _id });
    } else {
      // create
      await axios.post("/api/products", data);
    }

    setGoToProducts(true);
  }

  if (goToProducts) {
    router.push("/list/products");
  }

  async function uploadImages(e: any) {
    const files = e.target?.files;
    if (files?.length > 0) {
      for (const file of files) {
        // Upload file ke Supabase Storage
        const { data: uploadData, error } = await supabase.storage
          .from("images") // Ganti 'images' dengan nama bucket yang sesuai jika berbeda
          .upload(file.name, file, {
            contentType: file.type,
            upsert: true, // Jika file dengan nama yang sama ada, akan ditimpa
          });

        if (error) {
          console.error("Error uploading image:", error.message);
        } else if (uploadData) {
          // Buat URL public dari file yang diupload
          const imageUrl = `https://gpsmsuqelqdwvpetqefo.supabase.co/storage/v1/object/public/images/${uploadData.path}`;

          console.log("Image uploaded successfully:", imageUrl);

          // Simpan URL gambar ke dalam state `productPhoto`
          setProductPhoto((prev: string[]) => [...prev, imageUrl]); // Tambahkan URL gambar ke array state
        }
      }
    }
  }

  return (
    <form method="POST" onSubmit={saveProduct}>
      <div className="mt-8 max-w-xl">
        <label
          htmlFor="productName"
          className="block text-sm font-medium leading-5 text-gray-700"
        >
          Nama Produk
        </label>
        <div className="mt-3 flex rounded-md shadow-sm">
          <input
            id="productName"
            name="productName"
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          />
        </div>
      </div>

      <div className="mt-8 max-w-xl">
        <label
          htmlFor="productPhoto"
          className="block text-sm font-medium leading-5 text-gray-700"
        >
          Foto Produk
        </label>

        <div className="mt-3 flex flex-col">
          <label className="w-32 h-32 border border-gray-300 rounded-lg text-3xl shadow-sm flex items-center justify-center cursor-pointer">
            <FiUpload className="m-auto text-gray-500" />
            <input
              id="productPhoto"
              type="file"
              onChange={uploadImages}
              className="hidden"
              multiple
            />
          </label>
          {productPhoto?.length > 0 && (
            <div className="mt-4 text-green-500">Foto berhasil diupload</div>
          )}
          {productPhoto?.length === 0 && (
            <div className=" mt-4 text-red-500">Belum ada foto</div>
          )}
        </div>
      </div>

      <div className="mt-8 max-w-xl">
        <label
          htmlFor="productDescription"
          className="block text-sm font-medium leading-5 text-gray-700"
        >
          Deskripsi
        </label>
        <div className="mt-3 flex rounded-md shadow-sm">
          <textarea
            id="productDescription"
            name="productDescription"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          />
        </div>
      </div>

      <div className="mt-8 max-w-xl">
        <label
          htmlFor="productPrice"
          className="block text-sm font-medium leading-5 text-gray-700"
        >
          Harga
        </label>
        <div className="mt-3 flex rounded-md shadow-sm">
          <input
            id="productPrice"
            name="productPrice"
            type="text"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          />
        </div>
      </div>

      <div className="my-8">
        <button
          type="submit"
          className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-400 hover:bg-orange-500 transition-all duration-150 ease-in-out"
        >
          Simpan
        </button>
      </div>
    </form>
  );
}
