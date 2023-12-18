// import Link from "next/link";

const getData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/review/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const SingleReview = async ({ review_id }) => {
  function getBackgroundColor(score) {
    if (score > 80) {
      return "bg-greenReview"; // Màu nền xanh cho điểm > 80
    } else if (score >= 50) {
      return "bg-yellowReview"; // Màu nền vàng cho điểm > 50
    } else {
      return "bg-redReview"; // Màu nền đỏ cho điểm <= 50
    }
  }
  // function formatTimestamp(timestamp) {
  //   const options = {
  //     year: "numeric",
  //     month: "2-digit",
  //     day: "2-digit",
  //     hour: "2-digit",
  //     minute: "2-digit",
  //     hour12: true,
  //   };
  //   const date = new Date(timestamp);
  //   const formattedDate = date.toLocaleString("vi-VN", options);
  //   return formattedDate;
  // }
  const data = await getData(review_id);
  // const createdDateTime = formatTimestamp(data.results[0].created_at);
  // console.log(createdDateTime);
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
      <div className="flex py-2 2xl:mt-4">
        <button class=" bg-btn hover:bg-btn text-white font-normal p-2 px-4 rounded-full">
          Đọc toàn bộ
        </button>
      </div>
      <div className="flex mt-2">
        <p className=" text-sm 2xl:text-2xl xl:text-base lg:text-sm font-normal">
          {/* {createdDateTime} */}
          dd/mm/yyyy
        </p>
      </div>
    </div>
  );
};
export default SingleReview;