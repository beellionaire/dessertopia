import Image from "next/image";

export default function CartPage() {
  // Data Keranjang
  const cartItems = [
    {
      id: 1,
      storeName: "Onestop Gaming",
      productImage: "/image/cart/ipad.png",
      productName:
        "Apple iPad Air M2 11/13 Inch 2024 WiFi Only 1TB 512GB 256GB 128GB 6th Gen",
      productVariant: 'Blue Apple, 11" 128GB',
      price: 9332998,
      originalPrice: 14999999,
      quantity: 1,
      discount: 38,
    },
    {
      id: 2,
      storeName: "U Store 888",
      productImage: "/image/cart/protein.png",
      productName:
        "Proteina protein nabati Makanan Mpasi Proteina soy meat daging cincang",
      productVariant: "LX Hijau",
      price: 12888,
      quantity: 3,
    },
    {
      id: 3,
      storeName: "RALINEJERSEYMURAH",
      productImage: "/image/cart/jersey.png",
      productName:
        "SETELAN JERSEY BOLA MUU HOME 2023 2024 GRADE ORI TOP QUALITY",
      productVariant: "JERSEY SAJA, L",
      price: 95000,
      quantity: 1,
    },
    {
      id: 4,
      storeName: "Auzu",
      productImage: "/image/cart/socks.png",
      productName:
        "Kaos kaki sport / olahraga tebal hitam putih panjang athletic midcalf",
      productVariant: "Panjang, 2PSG HitamPutih",
      price: 25000,
      originalPrice: 44000,
      quantity: 2,
      discount: 43,
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-4">Keranjang</h2>

        {/* Pilih Semua */}
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-green-500"
          />
          <label className="ml-2 text-gray-700">
            Pilih Semua ({cartItems.length})
          </label>
        </div>

        {/* Daftar Produk */}
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-4 border-t pt-4 pb-4"
          >
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-green-500 mt-3"
            />
            <div className="w-24 h-24 relative flex-shrink-0">
              <Image
                src={item.productImage}
                alt={item.productName}
                layout="fill"
                objectFit="contain"
                className="rounded-md"
              />
            </div>
            <div className="flex-grow">
              <h3 className="text-sm font-semibold text-gray-800">
                {item.storeName}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{item.productName}</p>
              <p className="text-xs text-gray-500 mt-1">
                {item.productVariant}
              </p>
              <div className="text-sm font-semibold text-red-500 mt-2">
                Rp{item.price.toLocaleString()}
                {item.originalPrice && (
                  <span className="text-xs text-gray-500 line-through ml-2">
                    Rp{item.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col items-center justify-between">
              <button className="text-gray-500 hover:text-gray-700">
                <i className="fas fa-trash-alt"></i>
              </button>
              <div className="flex items-center mt-2 border rounded-md">
                <button className="px-3 py-2 text-gray-600 hover:bg-gray-100">
                  -
                </button>
                <span className="px-3 py-2">{item.quantity}</span>
                <button className="px-3 py-2 text-gray-600 hover:bg-gray-100">
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
