
const TableSearch = () => {
  return (
    <div className="w-full md:w-auto flex items-center gap-2 text-md rounded-lg ring-[1.5px] ring-gray-400 px-2">
      <input
        type="text"
        placeholder="Cari"
        className="w-[200px] p-2 bg-transparent outline-none"
      />
    </div>
  );
};

export default TableSearch;
