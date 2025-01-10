import Image from "next/image";

import { FaTrash } from "react-icons/fa";

export default function CartPage() {
  // Data Keranjang
  const cartItems = [
    {
      id: 1,
      productImage: "/image/cart/ipad.png",
      productName: "Chocolatte Mousee",

      price: 9332998,

      quantity: 1,
      discount: 38,
    },
    {
      id: 2,
      productImage: "/image/cart/protein.png",
      productName: "Dessert Rice Cake",

      price: 12888,
      quantity: 3,
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex gap-7 mt-24">
      {/* Alamat Pengiriman */}
      <div className="w-2/3">
        <div className="bg-white p-7 rounded-lg shadow-md mb-7">
          <h2 className="text-lg font-bold mb-4">Alamat Pengiriman</h2>

          <div className="flex justify-between border-t pt-4">
            <div>
              <p className="font-bold">Brodi</p>
              <p className="text-sm text-gray-600">
                Manahan, Surakarta, Jawa Tengah, Indonesia
              </p>
            </div>
            <div>
              <button className="text-white text-sm bg-orange-400 p-3 rounded-lg">
                Ubah alamat
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white p-7 rounded-lg shadow-md">
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
              className="flex items-center gap-4 border-t pt-4 pb-4 justify-center"
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
                <h3 className="text-sm font-bold text-gray-600 mt-1">
                  {item.productName}
                </h3>

                <div className="text-sm font-semibold text-red-500 mt-2">
                  Rp{item.price.toLocaleString()}
                </div>
              </div>
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center border rounded-md">
                  <button className="px-3 py-2 text-gray-600 hover:bg-gray-100">
                    -
                  </button>
                  <span className="px-3 py-2">{item.quantity}</span>
                  <button className="px-3 py-2 text-gray-600 hover:bg-gray-100">
                    +
                  </button>
                </div>
                <button className="text-gray-500 hover:text-gray-700">
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Metode Pembayaran */}
      <div className="w-1/3">
        <div className="bg-white p-9 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Metode Pembayaran</h2>

          <div className="mb-4 border-t">
            <div className="flex items-center justify-between gap-4 my-9">
              <div className="flex items-center gap-7">
                <Image
                  src="/image/payment/BCA.png"
                  width={70}
                  height={70}
                  alt=""
                />
                <label id="bca">BCA Virtual Account</label>
              </div>
              <input type="radio" name="payment" className="" />
            </div>
            <div className="flex items-center justify-between gap-4 my-9">
              <div className="flex items-center gap-7">
                <Image
                  src="/image/payment/Dana.png"
                  width={70}
                  height={70}
                  alt=""
                />
                <label id="dana">DANA</label>
              </div>
              <input type="radio" name="payment" className="" />
            </div>
            <div className="flex items-center justify-between gap-4 my-9">
              <div className="flex items-center gap-7">
                <Image
                  src="/image/payment/Qris.png"
                  width={70}
                  height={70}
                  alt=""
                />
                <label id="qris">QRIS</label>
              </div>
              <input type="radio" name="payment" className="" />
            </div>
            <div className="flex items-center justify-between gap-4 my-9">
              <div className="flex items-center gap-7">
                <Image
                  src="/image/payment/Shopee Pay.png"
                  width={70}
                  height={70}
                  alt=""
                />
                <label id="sopi">Shopee Pay</label>
              </div>
              <input type="radio" name="payment" className="" />
            </div>
          </div>

          <span className="flex border-t pt-4 mb-4 justify-between">
            <h3 className="text-md font-bold">Subtotal</h3>
            <h3 className="text-md font-bold">1.000</h3>
          </span>
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-lg p-3 transition-all duration-300">
            Bayar
          </button>
        </div>
      </div>
    </div>
  );
}
