// import { getData } from "@/services/products";
// import Image from "next/image";
// import Link from "next/link";

// type ProductPageProps = { params: { slug: string[] } };

// export default async function ProductPage(props: ProductPageProps) {
//   const { params } = props;
//   const products = await getData("http://localhost:3000/api/product");

//   return (
//     <div className="p-10">
//       <h1 className="text-3xl font-bold text-center mb-12">Semua Produk</h1>

//       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
//         {products.data.length > 0 &&
//           products.data.map((product: any) => (
//             <Link
//               href={`/product/detail/${product.id}`}
//               key={product.id}
//               className="border rounded-lg overflow-hidden shadow-sm bg-white hover:shadow-md
//             transition-all duration-300"
//             >
//               <div className="relative w-full h-64 bg-gray-100">
//                 <Image
//                   src={product.image}
//                   alt={product.title}
//                   width={100}
//                   height={100}
//                   className="object-cover w-full h-full"
//                 />
//               </div>

//               <div className="p-4">
//                 <h3 className="text-sm font-medium line-clamp-2">
//                   {product.title}
//                 </h3>
//                 <h3 className="text-sm font-bold">
//                   Rp {product.price.toLocaleString()}
//                 </h3>
//               </div>
//             </Link>
//           ))}
//       </div>
//     </div>
//   );
// }

"use client";

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

export default function ProductPage() {
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
    <section className="p-6 mt-24">
      <h2 className="text-2xl font-bold mb-4 text-center text-red-500">
        Semua Produk
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
    </section>
  );
}
