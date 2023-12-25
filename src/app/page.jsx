"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
const Page = () => {
  const router = useRouter();
  useEffect(() => {
    const handleLoad = () => {
      router.push("/home");
    };
    handleLoad();
  });
  return <div>Loading...</div>;
};

export default Page;
