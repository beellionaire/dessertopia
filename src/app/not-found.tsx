import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center min-h-screen justify-center">
      <h1>Not Found</h1>
      <Link href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back</Link>
    </div>
  )
}