"use client";
import { authkey } from "@/constants/storageKey";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const { userId } = getUserInfo() as any;
  const router = useRouter();
  const logOut = () => {
    removeUserInfo(authkey);
    router.push("/login");
  };
  return (
    <div className=" bg-white shadow-md print:hidden">
      <div className="flex justify-between items-center mx-5 p-5">
        <Link href="/">
          <h2 className="text-2xl font-bold">Betafore</h2>
        </Link>
        <div className="flex items-center gap-3">
          <p>{userId}</p>
          <button
            onClick={logOut}
            className="text-white px-2 bg-red-500 rounded-md hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
