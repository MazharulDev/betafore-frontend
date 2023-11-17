"use client";
import { getUserInfo, isLoggedIn } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import LoadingSpinner from "../components/loadingSpinner/Loading";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { exp } = getUserInfo() as any;
  let expireTime = Date.now() >= exp * 1000;
  const router = useRouter();
  const userLoggedIn = isLoggedIn();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    if (!userLoggedIn || expireTime === true) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router, userLoggedIn, expireTime]);
  if (!isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <section className="main-container">
      <div className="w-full max-w-4xl">{children}</div>
    </section>
  );
}
