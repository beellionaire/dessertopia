import { link } from "fs";
import Image from "next/image";
import Link from "next/link";

export default function RecommendationSection() {
  const products = [
    {
      image: "/image/products/1.png",
      title: "[PROMO] Cheesecake Biscoff",
      price: "Rp299.000",
      link: "#",
    },
    {
      image: "/image/products/1.png",
      title: "Molten Lava Cakel",
      price: "Rp5.990",
      link: "#",
    },
    {
      image: "/image/products/1.png",
      title: "Thai Rolled Ice Cream",
      price: "Rp4.870",
      link: "#",
    },
    {
      image: "/image/products/1.png",
      title: "Mango Sticky Rice Parfait",
      price: "Rp7.999",
      link: "#",
    },
    {
      image: "/image/products/1.png",
      title: "Raw Matcha Cheesecake",
      price: "Rp19.500",
      link: "#",
    },
    {
      image: "/image/products/1.png",
      title: "Dark Chocolate Avocado Mousse",
      price: "Rp3.699",
      link: "#",
    },
    {
      image: "/image/products/1.png",
      title: "Dalgona Bingsu",
      price: "Rp117.900",
      link: "#",
    },
    {
      image: "/image/products/1.png",
      title: "Banoffee Pie Cup",
      price: "Rp35.499",
      link: "#",
    },
    {
      image: "/image/products/1.png",
      title: "Caramel Custard",
      price: "Rp29.300",
      link: "#",
    },
    {
      image: "/image/products/1.png",
      title: "Matcha Panna Cotta",
      price: "Rp169.900",
      link: "#",
    },
  ];

  return (
    <section className="p-6">
      <h2 className="text-lg font-bold mb-4 text-center text-red-500">
        Rekomendasi Produk
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((product, index) => (
          <Link
            href={product.link}
            key={index}
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
              <p className="mt-2 text-red-500 font-bold">{product.price}</p>
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
