import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;

export async function mongooseConnect() {
  if (!uri)
    throw new Error("Please define the MONGODB_URI environment variable");
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(uri);
  }
}
