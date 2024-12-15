import { getData } from "@/services/products";
import Image from "next/image";

export default async function DetailProductPage(props: any) {
  const { params } = props;
  const product = await getData(
    "http://localhost:3000/api/product/?id=" + params.id
  );
  return (
    // <div className="container mx-auto my-10">
    //   <div className="w-1/2mx-auto border border-gray-700">
    //     <Image
    //       src={product.data.image}
    //       alt="product image"
    //       width={100}
    //       height={100}
    //       className="w-full object-cover aspect-square col-span-2"
    //     />
    //     <div className="bg-white p-4 px-6">
    //       <h3>{product.data.title}</h3>
    //       <p>Price : {product.data.price}</p>
    //     </div>
    //   </div>
    // </div>

    <div className="p-10 w-full max-w-[1000px] mx-auto border rounded-xl shadow-lg mt-12">
      <div className="grid grid-cols-12 gap-10">
        {/* Bagian Gambar */}
        <div className="col-span-5">
          {/* Gambar Utama */}
          <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src="/image/product/main-image.png"
              alt="Produk Utama"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* Bagian Detail */}
        <div className="col-span-7 flex justify-evenly flex-col">
          <h1 className="text-2xl font-semibold mb-2">
            Dark Chocolate Avocado Mousse
          </h1>

          <div className="text-2xl font-bold text-red-500 mb-2">Rp19.500</div>
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
          </div>
          <div className="flex gap-2">
            <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
              + Keranjang
            </button>
            <button className="w-full border border-orange-500 text-orange-500 py-2 rounded-lg hover:bg-orange-100 transition">
              Beli
            </button>
          </div>
        </div>
      </div>

      {/* Detail Produk */}
      <div className="mt-6">
        <h2 className="text-lg font-bold mb-2">Deskripsi</h2>
        <p className="text-sm text-gray-600 leading-relaxed text-justify">
          Dark Chocolate Avocado Mousse adalah hidangan penutup yang memadukan
          kelezatan cokelat hitam dengan kelembutan alpukat, menciptakan rasa
          yang mewah sekaligus menyehatkan. Dengan tekstur yang creamy dan cita
          rasa yang mendalam, dessert ini menjadi alternatif yang sempurna untuk
          pecinta makanan manis yang tetap ingin menjaga gaya hidup sehat.
          Alpukat memberikan rasa lembut dan creamy secara alami, tanpa perlu
          tambahan bahan pengental seperti krim atau mentega. Mousse ini
          biasanya dibuat dengan mencampurkan daging alpukat matang, cokelat
          hitam leleh berkualitas tinggi, pemanis alami seperti madu atau sirup
          maple, dan sedikit ekstrak vanila untuk menonjolkan aroma. Kombinasi
          bahan ini tidak hanya menghasilkan rasa yang lezat, tetapi juga
          menyuplai tubuh dengan nutrisi seperti antioksidan dari cokelat hitam
          dan lemak sehat dari alpukat. Dengan menggunakan bahan-bahan alami,
          dessert ini cocok untuk diet bebas gluten dan vegan, tergantung pada
          pemanis dan cokelat yang digunakan. Hidangan ini sangat fleksibel
          dalam penyajiannya, baik sebagai camilan cepat maupun sajian istimewa
          untuk tamu. Dark Chocolate Avocado Mousse dapat disajikan dengan
          topping seperti buah beri segar, kacang panggang, atau parutan cokelat
          untuk menambah tekstur dan estetika. Rasa cokelat yang kaya berpadu
          dengan kelembutan alpukat memberikan pengalaman menikmati hidangan
          penutup yang tidak hanya memanjakan lidah tetapi juga mendukung
          kesehatan tubuh.
        </p>
      </div>
    </div>
  );
}
