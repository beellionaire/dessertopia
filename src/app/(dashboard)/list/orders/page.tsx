import { MdDelete } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { FaEdit } from "react-icons/fa";
import Image from "next/image";

// component

import Link from "next/link";
import { role, studentsData } from "@/lib/data";
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
    header: "Tanggal",
    accessor: "info",
  },
  {
    header: "Status Pembayaran",
    accessor: "studentId",
    className: "hidden md:table-cell",
  },
  {
    header: "Pembeli",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Produk",
    accessor: "address",
    className: "hidden md:table-cell",
  },
];

const OrderListPage = () => {
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
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-lg flex-1 m-4 mt-0">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block text-2xl font-semibold text-slate-600">
          Pesanan
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={studentsData} />
      {/* PAGINATION */}
      {/* <Pagination /> */}
    </div>
  );
};

export default OrderListPage;
