import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold">Main Page</h1>
      <Link href="/register">Profile</Link>
    </>
  );
}
