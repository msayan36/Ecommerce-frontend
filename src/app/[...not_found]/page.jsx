// 404.js
import Link from "next/link";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="font-bold text-3xl">404 - Page Not Found</h1>
      <Link href="/">
        <h1 className="font-base text-lg text-blue-500 mt-8 hover:text-blue-700">
          Go back home
        </h1>
      </Link>
    </div>
  );
}
