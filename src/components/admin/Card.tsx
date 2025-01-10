const Card = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl bg-orange-500 text-white p-10 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-orange-300 font-semibold">
          2024/2025
        </span>
      </div>
      <h1 className="text-4xl font-semibold my-4">1.000</h1>
      <h1 className="capitalize text-lg font-semibold text-gray-100">{type}</h1>
    </div>
  );
};

export default Card;
