import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  _id: string;
  productName: string;
  productDescription: string;
  productPrice: number;
  productPhoto: string;
}

export default function RecommendationSection() {
  const [products, setProducts] = useState<Product[]>([]); // Tentukan tipe state

  useEffect(() => {
    // Fetch data from the API
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        const data: Product[] = await response.json(); // Tentukan tipe data hasil fetch
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-red-500">
        BEST SELLER
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <Link
            href={`/product/detail/${product._id}`} // Redirect to product detail page
            key={product._id}
            className="border rounded-lg overflow-hidden shadow-sm bg-white hover:shadow-md transition-all duration-300"
          >
            <div className="relative w-full h-64 bg-gray-100">
              <Image
                src={product.productPhoto[0]} // Use image URL from MongoDB
                alt={product.productName}
                objectFit="cover"
                layout="fill"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="p-4">
              <h3 className="text-sm font-medium line-clamp-2">
                {product.productName}
              </h3>
              <div className="text-lg font-bold text-red-500 mb-2">
                Rp{product.productPrice.toLocaleString("id-ID")}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center m-10">
        <Link
          href="/product"
          className="w-[200px] h-[50px] bg-orange-400 flex justify-center items-center text-white py-2 rounded-lg hover:bg-orange-500 transition"
        >
          Lihat Semua
        </Link>
      </div>
    </section>
  );
}
