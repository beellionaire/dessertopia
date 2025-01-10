const Pagination = () => {
  return (
    <div className="p-4 flex items-center justify-between text-gray-600">
      <button
        disabled
        className="py-2 px-4 rounded-md bg-slate-200 text-md
    font-semibold disabled:opacity-50 disasbled:cursor-not-allowed"
      >
        Prev
      </button>

      <div className="flex items-center gap-2 text-md">
        <button className="p-3 rounded-sm bg-[#8EA2FF] text-md font-semibold">
          1
        </button>
        <button className="p-3 rounded-sm text-md font-semibold">2</button>
        <button className="p-3 rounded-sm text-md font-semibold">3</button>
      </div>

      <button
        className="py-2 px-4 rounded-md bg-slate-200 text-md
    font-semibold disabled:opacity-50 disasbled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
