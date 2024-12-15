import { getData } from "@/services/products";
import Image from "next/image";
import Link from "next/link";

type ProductPageProps = { params: { slug: string[] } };

export default async function ProductPage(props: ProductPageProps) {
  const { params } = props;
  const products = await getData("http://localhost:3000/api/product");

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center mb-12">Semua Produk</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.data.length > 0 &&
          products.data.map((product: any) => (
            <Link
              href={`/product/detail/${product.id}`}
              key={product.id}
              className="border rounded-lg overflow-hidden shadow-sm bg-white hover:shadow-md
            transition-all duration-300"
            >
              <div className="relative w-full h-64 bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="p-4">
                <h3 className="text-sm font-medium line-clamp-2">
                  {product.title}
                </h3>
                <p className="mt-2 text-red-500 font-bold">
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(product.price)}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
