import Link from "next/link";

const NotFoundPage = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div>
          <h1 className="text-red-500 text-3xl font-bold text-center">
            404!!! Page not Found
          </h1>
          <Link href="/">
            <button className=" text-center underline text-green-500 mt-5">
              Go to home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
