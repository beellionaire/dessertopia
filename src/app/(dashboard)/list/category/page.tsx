import { MdDelete } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { MdEdit } from "react-icons/md";
import Image from "next/image";

// component

import Link from "next/link";
import { studentsData } from "@/lib/data";
import TableSearch from "@/components/fragments/tableSearch";
import Table from "@/components/fragments/table";
import Pagination from "@/components/fragments/pagination";

type Product = {
  id: number;
  studentId: string;
  name: string;
  email?: string;
  photo?: string;
  phone: string;
  grade: number;
  class: string;
  address: string;
};

const columns = [
  {
    header: "Info Produk",
    accessor: "info",
  },
  {
    header: "ID Produk",
    accessor: "studentId",
    className: "hidden md:table-cell",
  },
  {
    header: "Stok",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Harga",
    accessor: "address",
    className: "hidden md:table-cell",
  },
  {
    header: "Aksi",
    accessor: "action",
  },
];

const CategoryPage = () => {
  const renderRow = (item: Product) => (
    <tr
      key={item.id}
      className="border-b border-slate-300 even:bg-slate-50 hover:bg-slate-100"
    >
      <td className="flex items-center gap-14 px-14 py-4">
        <Image
          src=""
          alt=""
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold">{item.name}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell text-center">{item.studentId}</td>
      <td className="hidden md:table-cell text-center">{item.grade}</td>
      <td className="hidden md:table-cell text-center">{item.address}</td>
      <td>
        <div className="flex items-center gap-2 justify-center">
          <Link href={`/list/products/${item.id}`}>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 p-2 hover:bg-blue-700 transition-all">
              <MdEdit className="text-xl text-white" />
            </button>
          </Link>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 p-2 hover:bg-red-700 transition-all">
            <MdDelete className="text-xl text-white" />
          </button>
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-lg flex-1 m-4 mt-0">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block text-2xl font-semibold text-slate-600">
          Kategori
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#ffa641] p-2 hover:bg-[#ff9615] transition-all">
              <GoPlus className="text-3xl text-white" />
            </button>
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={studentsData} />
      {/* PAGINATION */}
      {/* <Pagination /> */}
    </div>
  );
};

export default CategoryPage;
