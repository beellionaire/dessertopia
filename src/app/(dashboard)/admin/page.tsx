import Card from "@/components/admin/Card";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full flex flex-col gap-5">
        {/* USER CARDS */}
        <h1 className="text-xl font-bold text-slate-700">Pesanan</h1>
        <div className="flex gap-4 justify-between flex-wrap">
          <Card type="Hari ini" />
          <Card type="Minggu ini" />
          <Card type="Bulan ini" />
        </div>
        <h1 className="text-xl font-bold text-slate-700">Pendapatan</h1>
        <div className="flex gap-4 justify-between flex-wrap">
          <Card type="Hari ini" />
          <Card type="Minggu ini" />
          <Card type="Bulan ini" />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
