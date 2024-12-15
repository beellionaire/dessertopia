export default function Loading() {
  return (
    <div>
      <div className="grid grid-cols-4 mt-3 place-items-center">
        <div className="relative m-3 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-gray-400 shadow-md">
          <a
            className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
            href="#"
          >
            <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
              39% OFF
            </span>
          </a>
          <div className="mt-4 px-5 pb-5">
            <a href="#">
              <h5 className="text-xl tracking-tight text-slate-900 truncate"></h5>
            </a>
            <div className="mt-2 mb-5 flex items-center justify-between">
              <p>
                <span className="text-3xl font-bold text-slate-900"></span>
              </p>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}
