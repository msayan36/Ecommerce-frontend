import Link from "next/link";

const Cancel = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
      <h1 className="text-4xl mb-8 font-bold">Payment is Not Successfull</h1>
      <Link
        href="/"
        className="text-lg underline text-red-400 hover:text-white hover:no-underline"
      >
        Back To Home
      </Link>
    </div>
  );
};

export default Cancel;
