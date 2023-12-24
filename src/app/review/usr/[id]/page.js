import Image from "next/image";
import OneReview from "../../../(components)/HoriReview";
const getAllReviewId = async (id) => {
  const res = await fetch(`https://2review-k5ku.vercel.app/api/reviews/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
const getData = async (id) => {
  const res = await fetch(`https://2review-k5ku.vercel.app/api/media/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
const UsrReview = async ({ params }) => {
  const media_id = params.id;
  const data = await getData(media_id);
  const reviewItems = await getAllReviewId(media_id);
  const userData = reviewItems.results.filter(
    (item) => item.admin_role === false
  );
  const usr_ids = userData.map((item) => item._id);
  function getBackgroundColor(score) {
    if (score > 80) {
      return "bg-greenReview"; // Màu nền xanh cho điểm > 80
    } else if (score >= 50) {
      return "bg-yellowReview"; // Màu nền vàng cho điểm > 50
    } else {
      return "bg-redReview"; // Màu nền đỏ cho điểm <= 50
    }
  }
  return (
    <div>
      <div className="relative flex items-center mb-10">
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <div className="flex flex-row ml:5 lg:ml-10 xl:ml-20 2xl:ml-40 items-center">
        <div className="flex basis-1/3 ">
          <Image
            className="rounded-xl w-full object-cover"
            // className="h-48 w-full object-cover md:h-full md:w-48"
            //   href="/"
            src={data.results[0].img}
            height={1600}
            width={900}
            alt="banner phim"
          />
        </div>
        <div className=" basis-1/3 flex flex-col items-center">
          <div className="flex flex-col">
            <p className=" mt-2 uppercase max-w-xs font-extrabold text-sm xl:text-2xl lg:text-lg 2xl:text-4xl">
              {data.results[0].title}
            </p>
            <p className="mt-20 font-extralight text-xs xl:text-xl lg:text-sm 2xl:text-3xl">
              USERSCORE
            </p>
            <p className="mt-2 font-bold text-xs xl:text-2xl lg:text-base 2xl:text-4xl">
              {data.results[0].usr_score > 95
                ? "Siêu phẩm thời đại"
                : data.results[0].usr_score >= 80
                ? "Một bộ phim hay"
                : data.results[0].usr_score >= 50
                ? "Khen chê lẫn lộn"
                : data.results[0].usr_score > 30
                ? "Khen ít chê nhiều"
                : "Phim siêu tệ"}
            </p>
            <p className=" mt-2 font-normal text-xs xl:text-xl hover:underline lg:text-sm 2xl:text-3xl">
              Dựa trên {userData.length} đánh giá
            </p>
          </div>
        </div>
        <div className="flex basis-1/3">
          <div
            className={`${getBackgroundColor(
              data.results[0].usr_score
            )} w-12 h-12 xl:w-28 xl:h-28 shadow-lg rounded-2xl 2xl:w-36 lg:h-20 lg:w-20 2xl:h-36 drop-shadow-rv`}
          >
            <span className="w-full h-full flex justify-center items-center text-xs xl:text-4xl lg:text-2xl 2xl:text-5xl font-black">
              {data.results[0].usr_score}
            </span>
          </div>
        </div>
      </div>
      <div className="w-3/4 flex flex-col ml:5 lg:ml-10 xl:ml-20 2xl:ml-40 items-center">
        {usr_ids.length > 0 ? (
          usr_ids.map((id) => <OneReview key={id} review_id={id} />)
        ) : (
          <p className="flex-1 text-center text-xs xl:text-xl lg:text-base 2xl:text-2xl font-semibold">
            Không có review nào ;-;
          </p>
        )}
      </div>
    </div>
  );
};
export default UsrReview;
