export const getData = async (url: string) => {
  try {
    const res = await fetch(url, {
      cache: "no-store",
      next: {
        tags: ["products"], // Digunakan untuk invalidasi cache pada Next.js
      },
    });

    if (!res.ok) {
      // Jika status response bukan OK, lempar error dengan status dan pesan yang lebih jelas
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();

    // Periksa jika data kosong atau tidak sesuai dengan yang diharapkan
    if (!data || Object.keys(data).length === 0) {
      throw new Error("No data returned from the API.");
    }

    return data;
  } catch (error: any) {
    // Tangani kesalahan dan kembalikan pesan error yang lebih jelas
    console.error("Error fetching data from API:", error);
    throw new Error("Terjadi kesalahan saat memuat produk.");
  }
};
