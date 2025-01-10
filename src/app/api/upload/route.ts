// import { NextRequest, NextResponse } from "next/server";
// import { supabase } from "@/lib/supabaseClient";
// import multiparty from "multiparty";
// import fs from "fs";
// import mime from "mime-types";

// // Nama bucket di Supabase
// const bucketName = "images";

// export async function POST(req: NextRequest) {
//   try {
//     // Parsing form data menggunakan multiparty
//     const form = new multiparty.Form();

//     const { fields, files }: { fields: any; files: any } = await new Promise(
//       (resolve, reject) => {
//         form.parse(req as any, (err, fields, files) => {
//           if (err) {
//             reject(err);
//           } else {
//             resolve({ fields, files });
//           }
//         });
//       }
//     );

//     console.log("Fields:", fields);
//     console.log("Files:", files);

//     // Validasi apakah file ditemukan
//     const fileArray = files?.file || [];
//     if (fileArray.length === 0) {
//       return NextResponse.json({ error: "No files uploaded" }, { status: 400 });
//     }

//     const links: string[] = [];

//     // Proses upload setiap file
//     for (const file of fileArray) {
//       const ext = file.originalFilename.split(".").pop() || "";
//       const newFilename = Date.now() + "." + ext;

//       const { data, error } = await supabase.storage
//         .from(bucketName)
//         .upload(
//           `product_images/${newFilename}`,
//           fs.createReadStream(file.path),
//           {
//             cacheControl: "3600",
//             upsert: true,
//             contentType:
//               mime.lookup(file.originalFilename) || "application/octet-stream",
//           }
//         );

//       if (error) {
//         console.error("Supabase upload error:", error.message);
//         return NextResponse.json({ error: error.message }, { status: 500 });
//       }

//       // Generate URL publik untuk file
//       const link = `https://gpsmsuqelqdwvpetqefo.supabase.co/storage/v1/object/public/${bucketName}/product_images/${newFilename}`;
//       links.push(link);
//     }

//     // Kembalikan link hasil upload
//     return NextResponse.json({ links }, { status: 200 });
//   } catch (err) {
//     console.error("Unexpected error:", err);
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }

// export const config = {
//   api: { bodyParser: false },
// };
