import { AiFillMessage } from "react-icons/ai";
import { MdAnnouncement, MdAccountCircle } from "react-icons/md";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCH BAR */}
      <div className="hidden md:flex flex-1 ml-4 xl:max-w-[800px] lg:max-w-[500px] md:max-w-[300px] justify-center items-center">
        <input
          type="text"
          placeholder="Cari"
          className="w-[200px] md:w-[300px] lg:w-[450px] xl:w-[700px] px-4 py-2 border rounded-lg"
        />
      </div>

      {/* PROFILE */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <AiFillMessage className="text-gray-500 text-4xl" />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <MdAnnouncement className="text-gray-500 text-4xl" />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-orange-500 text-white rounded-full text-xs">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-lg leading-3 font-semibold">Admin 1</span>
          <span className="text=[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Link href="/admin">
          <MdAccountCircle className="text-4xl text-orange-500" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
