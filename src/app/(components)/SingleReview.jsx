// import Link from "next/link";
const SingleReview = ({ review }) => {
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
    <div className="flex w-1/4 flex-col p-4">
      <div className="flex flex-row w-full items-center">
        <div
          className={`${getBackgroundColor(
            review.usr_score
          )} flex-none h-10 w-10 2xl:h-28 2xl:w-28 xl:h-16 xl:w-16 lg:h-12 lg:w-12 shadow-lg rounded-2xl drop-shadow-rv`}
        >
          <span className="w-full h-full flex justify-center items-center text-sm 2xl:text-5xl xl:text-2xl lg:text-base font-black">
            {review.usr_score}
          </span>
        </div>
        <div className="xl:ml-4 ml-2">
          <p className="text-sm 2xl:text-4xl xl:text-xl lg:text-base font-black">
            Tran Bao Ngoc
          </p>
        </div>
      </div>
      <div className="flex mt-2">
        <p className="max-h-28 2xl:max-h-32 overflow-hidden text-sm 2xl:text-2xl xl:text-base lg:text-base font-light p-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been ... Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been ... Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been ...
        </p>
      </div>
      <div className="flex p-2 2xl:mt-4">
        <button class=" bg-btn hover:bg-btn text-white font-normal p-2 px-4 rounded-full">
          Đọc toàn bộ
        </button>
      </div>
      <div className="flex mt-2">
        <p className=" text-sm 2xl:text-2xl xl:text-base lg:text-sm font-normal">
          10, tháng 10 - 2023
        </p>
      </div>
    </div>
  );
};
export default SingleReview;
