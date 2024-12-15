import Image from "next/image";

export default function ProductDetail() {
  return (
    <div className="p-6 w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-12 gap-6">
        {/* Bagian Gambar */}
        <div className="col-span-5">
          {/* Gambar Utama */}
          <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src="/image/product/main-image.png"
              alt="Produk Utama"
              layout="fill"
              objectFit="contain"
            />
          </div>
          {/* Thumbnail */}
          <div className="flex mt-4 gap-2">
            {[
              "/image/product/thumb1.png",
              "/image/product/thumb2.png",
              "/image/product/thumb3.png",
            ].map((thumb, index) => (
              <div
                key={index}
                className="relative w-16 h-16 bg-gray-100 rounded-md overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-500 transition"
              >
                <Image
                  src={thumb}
                  alt={`Thumbnail ${index + 1}`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bagian Detail */}
        <div className="col-span-7">
          <h1 className="text-xl font-semibold mb-2">
            Kahf Cooling Power Antiperspirant Deodorant Roll On 45ML
          </h1>
          <p className="text-sm text-gray-500 mb-2">
            Terjual 1 rb+ • ⭐ 5 (429 rating) • Diskusi (1)
          </p>
          <div className="text-2xl font-bold text-red-500 mb-2">
            Rp19.500
            <span className="text-sm font-normal text-gray-500 line-through ml-2">
              Rp23.000
            </span>
          </div>
          <p className="text-xs font-semibold text-green-600 mb-4">
            Diskon 15%
          </p>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border border-gray-300 rounded-md">
              <button className="px-3 py-2 text-gray-600 hover:bg-gray-100">
                -
              </button>
              <input
                type="text"
                value="1"
                className="w-12 text-center border-l border-r border-gray-300 outline-none"
              />
              <button className="px-3 py-2 text-gray-600 hover:bg-gray-100">
                +
              </button>
            </div>
            <span className="text-sm text-gray-500">Stok Total: 96</span>
          </div>
          <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition mb-2">
            + Keranjang
          </button>
          <button className="w-full border border-green-500 text-green-500 py-2 rounded-lg hover:bg-green-100 transition">
            Beli
          </button>
        </div>
      </div>

      {/* Detail Produk */}
      <div className="mt-6">
        <h2 className="text-lg font-bold mb-2">Detail</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          Kahf Antiperspirant Deodorant Roll On 45 ml merupakan Nature Charged
          AP Deo Pertama di Indonesia yang melindungi dari 3 jenis keringat
          serta bebas iritasi dengan SmartSync Deo Care Technology dan berikan
          aroma signature Kahf untuk kesegaran sepanjang hari.
        </p>
      </div>
    </div>
  );
}
