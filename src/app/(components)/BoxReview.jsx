"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const SingleReview = ({ review_id }) => {
  const [data, setData] = useState(null);
  const router = useRouter();
  const getData = async (id) => {
    try {
      const res = await fetch(`/api/review/${id}`, {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await res.json();
      setData(result);
    } catch (error) {
      console.error(error);
    }
  };
  const getBackgroundColor = (score) => {
    if (score > 80) {
      return "bg-greenReview"; // Màu nền xanh cho điểm > 80
    } else if (score >= 50) {
      return "bg-yellowReview"; // Màu nền vàng cho điểm > 50
    } else {
      return "bg-redReview"; // Màu nền đỏ cho điểm <= 50
    }
  };
  const handleItemClick = (data) => {
    if (data.admin_role == true) {
      router.refresh();
      router.push(`/review/adm/${data.media_id}`);
    } else {
      router.refresh();
      router.push(`/review/usr/${data.media_id}`);
    }
  };
  useEffect(() => {
    getData(review_id);
  }, [review_id]);
  if (!data) {
    // Loading state or handle error
    return <p>Loading...</p>;
  }
  return (
    <div className="flex w-1/4 flex-col p-4">
      <div className="flex flex-row w-full items-center">
        <div
          className={`${getBackgroundColor(
            data.results[0].score
          )} flex-none h-10 w-10 2xl:h-28 2xl:w-28 xl:h-16 xl:w-16 lg:h-12 lg:w-12 shadow-lg rounded-2xl drop-shadow-rv`}
        >
          <span className="w-full h-full flex justify-center items-center text-sm 2xl:text-5xl xl:text-2xl lg:text-base font-black">
            {data.results[0].score}
          </span>
        </div>
        <div className="xl:ml-4 ml-2">
          <p className="text-sm 2xl:text-4xl xl:text-xl lg:text-base font-black">
            {data.results[0].title}
          </p>
        </div>
      </div>
      <div className="flex mt-2">
        <p className="whitespace-pre-line max-h-28 2xl:max-h-32 overflow-hidden text-sm 2xl:text-2xl xl:text-base lg:text-base font-light py-3">
          {data.results[0].body}
        </p>
      </div>
      <div
        className="flex py-2 2xl:mt-4"
        onClick={() => handleItemClick(data.results[0])}
      >
        <button className=" bg-btn hover:bg-btn text-white font-normal p-2 px-4 rounded-full">
          Đọc toàn bộ
        </button>
      </div>
      <div className="flex mt-2">
        <p className=" text-sm 2xl:text-2xl xl:text-base lg:text-sm font-normal">
          {data.results[0].published_on}
        </p>
      </div>
    </div>
  );
};
export default SingleReview;
