"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export const metadata = {
  title: "2Review: To Watch To Review",
  description:
    "Trang web review về phim của nhóm 2 thực hiện cho đồ án môn học Lập Trình WEB - đường dẫn '/' sẽ được chuyển tiếp sang đường dẫn '/home'",
};
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
