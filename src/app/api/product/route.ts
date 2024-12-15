import { retrieveData, retrieveDataById } from "@/lib/firebase/services";
import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Superleggera V4",
    price: 250000,
    image:
      "https://images.ctfassets.net/x7j9qwvpvr5s/4IZmRG9qogmWELLc8TZW7a/fe22b49705a0bd03ec8ab0108dbe0919/SLV4-01-Data-Sheet-768x480.png",
  },
  {
    id: 2,
    title: "Streetfighter V4 X Lamborghini",
    price: 250000,
    image:
      "https://images.ctfassets.net/x7j9qwvpvr5s/3Ro9s7IFkEDg2YK9zOOPkc/8db310566e784ec9daf153565b66176e/Streetfighter-V4-Lamborghini-MY24-Model-Preview-1050x650-v02.png",
  },
  {
    id: 3,
    title: "Panigale V4R",
    price: 250000,
    image:
      "https://images.ctfassets.net/x7j9qwvpvr5s/6YNYLMLaZJw4XRASvytJDD/7dbe154d1bb69685fc16cdc667928bea/Panigale-V4R-MY23-Model-Preview-1050x650_v02.png",
  },
  
  
  
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const detailProduct = await retrieveDataById('products', id)
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: detailProduct,
      });
    }
    return NextResponse.json({ 
      status: 404,
      message: "Not Found",
      data: {},
    });
  }

  const products = await retrieveData('products');

  return NextResponse.json({ status: 200, message: "Success", data: products });
}
