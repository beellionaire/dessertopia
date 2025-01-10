"use client";

import { MdDelete } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { MdEdit } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import TableSearch from "@/components/fragments/tableSearch";
import Table from "@/components/fragments/table";
import { useEffect, useState } from "react";
import axios from "axios";

const columns = [
  {
    header: "Info Produk",
    accessor: "info",
  },
  {
    header: "ID Produk",
    accessor: "id",
    className: "hidden md:table-cell",
  },

  {
    header: "Harga",
    accessor: "price",
    className: "hidden md:table-cell",
  },
  {
    header: "Aksi",
    accessor: "action",
  },
];

const ProductListPage = () => {
  const [products, setProducts] = useState([]); // State untuk menyimpan produk

  useEffect(() => {
    // Fetch data produk
    axios
      .get("/api/products")
      .then((response) => {
        setProducts(response.data); // Simpan data produk di state
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const renderRow = (item: any) => (
    <tr
      key={item.id}
      className="border-b border-slate-300 even:bg-slate-50 hover:bg-slate-100"
    >
      <td className="flex items-center gap-40 px-14 py-4">
        <Image
          src={item.productPhoto[0] || "/placeholder.png"} // Gambar produk
          alt={item.productName || "Product"}
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold">{item.productName}</h3>
          <p className="text-sm text-gray-500">{item.productDescription}</p>
        </div>
      </td>
      <td className="hidden md:table-cell text-center">{item._id}</td>
      <td className="hidden md:table-cell text-center">{item.productPrice}</td>
      <td>
        <div className="flex items-center gap-2 justify-center">
          <Link href={`/list/products/edit/${item._id}`}>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 p-2 hover:bg-blue-700 transition-all">
              <MdEdit className="text-xl text-white" />
            </button>
          </Link>
          <Link href={`/list/products/delete/${item._id}`}>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 p-2 hover:bg-red-700 transition-all">
              <MdDelete className="text-xl text-white" />
            </button>
          </Link>
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-7 rounded-lg flex-1 m-4 mt-0">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block text-2xl font-semibold text-slate-600">
          Daftar Produk
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          {/* <TableSearch /> */}
          <div className="flex items-center gap-4 self-end">
            <Link href="/list/products/add">
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#ffa641] p-2 hover:bg-[#ff9615] transition-all">
                <GoPlus className="text-3xl text-white" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={products} />
    </div>
  );
};

export default ProductListPage;
