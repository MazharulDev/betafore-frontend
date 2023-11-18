import { authkey } from "@/constants/storageKey";
import { removeUserInfo } from "@/services/auth.service";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const logOut = () => {
    removeUserInfo(authkey);
    router.push("/login");
  };
  return (
    <div className=" bg-blue-200 shadow-md">
      <div className="flex justify-between items-center mx-5 p-5">
        <Link href="/">
          <h2 className="text-2xl font-bold">Betafore</h2>
        </Link>
        <button
          onClick={logOut}
          className="text-white p-2 bg-red-500 rounded-md hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
