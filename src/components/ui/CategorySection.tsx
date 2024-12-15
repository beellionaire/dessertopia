import Image from "next/image";
import Link from "next/link";

export default function CategorySection() {
  // Daftar kategori dan ikon
  const categories = [
    { name: "Makanan Kering", icon: "/image/icons/burger.png", link: "#" },
    { name: "Makanan Kering", icon: "/image/icons/burger.png", link: "#" },
    { name: "Makanan Kering", icon: "/image/icons/burger.png", link: "#" },
    { name: "Makanan Kering", icon: "/image/icons/burger.png", link: "#" },
    { name: "Makanan Kering", icon: "/image/icons/burger.png", link: "#" },
  ];

  return (
    <section className="p-6 w-full">
      <h2 className="text-lg font-bold mb-4 text-center">Kategori Pilihan</h2>
      <div className="grid grid-cols-5 gap-4">
        {categories.map((category, index) => (
          <Link
            key={index}
            href={category.link}
            className="flex flex-col items-center p-4 bg-gray-100 h-[120px] rounded-lg hover:shadow-md transition-all duration-300"
          >
            <div className="w-16 h-16 relative">
              <Image
                src={category.icon}
                alt={category.name}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="mt-2 text-sm text-center">{category.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
