import { NextResponse } from "next/server";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export async function GET(req: Request) {
  await mongooseConnect();

  const url = new URL(req.url); // Parse URL untuk mendapatkan query parameters
  const id = url.searchParams.get("id"); // Ambil query parameter 'id'

  if (id) {
    // Jika 'id' diberikan, ambil produk berdasarkan ID
    try {
      const product = await Product.findById(id);

      if (!product) {
        return NextResponse.json(
          { error: "Product not found" },
          { status: 404 }
        );
      }

      return NextResponse.json(product, { status: 200 });
    } catch (error) {
      return NextResponse.json(
        { error: "Invalid product ID" },
        { status: 400 }
      );
    }
  } else {
    // Jika 'id' tidak diberikan, ambil semua produk
    const products = await Product.find();
    return NextResponse.json(products, { status: 200 });
  }
}

export async function POST(req: Request) {
  await mongooseConnect();
  const body = await req.json();

  const { productName, productDescription, productPrice, productPhoto } = body;

  // Simpan produk ke database
  const productDoc = await Product.create({
    productName,
    productDescription,
    productPrice,
    productPhoto,
  });

  return NextResponse.json(productDoc, { status: 201 });
}

export async function PUT(req: Request) {
  await mongooseConnect();

  try {
    const body = await req.json();
    const { _id, productName, productDescription, productPrice, productPhoto } =
      body;

    // Validasi input
    if (
      !_id ||
      !productName ||
      !productDescription ||
      !productPrice ||
      !productPhoto
    ) {
      return NextResponse.json(
        { error: "Semua field harus diisi." },
        { status: 400 }
      );
    }

    // Update produk di database
    const updatedProduct = await Product.findByIdAndUpdate(
      _id,
      {
        productName,
        productDescription,
        productPrice,
        productPhoto,
      },
      { new: true }
    );

    if (!updatedProduct) {
      return NextResponse.json(
        { error: "Produk tidak ditemukan." },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedProduct, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Terjadi kesalahan pada server." },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  await mongooseConnect();

  try {
    const url = new URL(req.url); // Parse URL untuk mendapatkan query parameters
    const id = url.searchParams.get("id"); // Ambil query parameter 'id'

    // Validasi ID
    if (!id) {
      return NextResponse.json(
        { error: "ID produk harus disertakan." },
        { status: 400 }
      );
    }

    // Hapus produk berdasarkan ID
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return NextResponse.json(
        { error: "Produk tidak ditemukan." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Produk berhasil dihapus.", deletedProduct },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Terjadi kesalahan pada server." },
      { status: 500 }
    );
  }
}
