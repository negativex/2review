// import Link from "next/link";
import React from "react";
import Image from "next/image";
import CarouselReview from "../../(components)/carouselrv";
import SingReview from "../../(components)/SingleReview";
const OPTIONS = { slidesToScroll: "auto", containScroll: "trimSnaps" };
const SLIDE_COUNT = 12;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const putnewData = {
  usr_score: 0,
  adm_score: 0,
  usr_count: 0,
  adm_count: 0,
};
const getData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/media/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
const putData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/media/${id}`, {
    cache: "no-store",
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ putnewData }),
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
const getAllReviewId = async (id) => {
  const res = await fetch(`http://localhost:3000/api/reviews/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
function calculateAverage(dataArray) {
  const totalScore = dataArray.reduce((sum, item) => sum + item.score, 0);
  const averageScore = dataArray.length > 0 ? totalScore / dataArray.length : 0;
  return averageScore;
}
export default async function ReviewPage({ params }) {
  const data = await getData(params.id);
  const reviewItems = await getAllReviewId(params.id);
  const adminData = reviewItems.results.filter(
    (item) => item.admin_role === true
  );
  const userData = reviewItems.results.filter(
    (item) => item.admin_role === false
  );
  const adm_ids = adminData.map((item) => item._id);
  const usr_ids = userData.map((item) => item._id);
  const score_adm = Math.round(calculateAverage(adminData));
  const score_usr = Math.round(calculateAverage(userData));
  putnewData.adm_score = score_adm;
  putnewData.usr_score = score_usr;
  putnewData.adm_count = adminData.length;
  putnewData.usr_count = userData.length;
  const updateData = await putData(params.id);
  return (
    <header>
      {/* <pre>{JSON.stringify(roles, null, 4)}</pre> */}
      <div className="relative flex items-center">
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <div className="py-5 2xl:px-64 px-20 rounded-xl">
        {/* <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"> */}
        <div className="sm:flex">
          <div className="flex-auto w-full sm:w-1/2 lg:w-2/3 2xl:h-main_img_2xl xl:h-main_img_xl lg:h-main_img_lg md:h-main_img_md sm:h-main_img_sm">
            <Image
              className="rounded-xl object-cover sm:w-full sm:h-full"
              // className="h-48 w-full object-cover md:h-full md:w-48"
              href="/"
              src={data.results[0].img}
              height={5000}
              width={5000}
              alt="banner phim"
            />
          </div>
          <div className="flex-auto w-full sm:w-1/2 lg:w-1/3 pl-2 md:pl-4 2xl:pl-16">
            <div className="flex overflow-x-hidden h-1/3 flex-col py-8">
              <p className="text-center uppercase text-sm xl:text-3xl whitespace-normal font-semibold lg:text-2xl 2xl:text-5xl">
                {data.results[0].title}
              </p>
              <a
                href="#"
                className="text-sm xl:mt-6 xl:text-xl block leading-tight font-bold text-black hover:underline lg:mt-2 lg:text-lg 2xl:mt-12 2xl:text-3xl"
              >
                Tag:
              </a>
            </div>
            <div className="flex-grow border-t border-gray-300"></div>
            <div className="flex h-1/3 flex-row items-center">
              <div className="flex w-2/3 flex-col">
                <p className="mt-2 font-extralight text-xs xl:text-xl lg:text-sm 2xl:text-3xl">
                  2REVIEWSCORE
                </p>
                <p className="mt-2 font-bold text-xs xl:text-2xl lg:text-base 2xl:text-4xl">
                  {score_adm > 95
                    ? "Siêu phẩm thời đại"
                    : score_adm >= 80
                    ? "Một bộ phim hay"
                    : score_adm >= 50
                    ? "Khen chê lẫn lộn"
                    : score_adm > 30
                    ? "Khen ít chê nhiều"
                    : "Phim siêu tệ"}
                </p>
                <p className="mt-2 font-normal text-xs xl:text-xl hover:underline lg:text-sm 2xl:text-3xl">
                  Dựa trên {adminData.length} đánh giá
                </p>
              </div>
              <div className="flex w-1/3 justify-end items-end">
                <div
                  className={`${getBackgroundColor(
                    score_adm
                  )} w-12 h-12 xl:w-28 xl:h-28 shadow-lg rounded-2xl 2xl:w-36 lg:h-20 lg:w-20 2xl:h-36 drop-shadow-rv`}
                >
                  <span className="w-full h-full flex justify-center items-center text-xs xl:text-4xl lg:text-2xl 2xl:text-5xl font-black">
                    {score_adm}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-grow border-t border-gray-300"></div>
            <div className="flex h-1/3 flex-row  items-center">
              <div className="flex flex-col w-2/3">
                <p className="mt-2 font-extralight text-xs xl:text-xl lg:text-sm 2xl:text-3xl">
                  USERSCORE
                </p>
                <p className="mt-2 font-bold text-xs xl:text-2xl lg:text-base 2xl:text-4xl">
                  {score_usr > 95
                    ? "Siêu phẩm thời đại"
                    : score_usr >= 80
                    ? "Một bộ phim hay"
                    : score_usr >= 50
                    ? "Khen chê lẫn lộn"
                    : score_usr > 30
                    ? "Khen ít chê nhiều"
                    : "Phim siêu tệ"}
                </p>
                <p className="mt-2 font-normal text-xs xl:text-xl hover:underline lg:text-sm 2xl:text-3xl">
                  Dựa trên {userData.length} đánh giá
                </p>
              </div>
              <div className="flex w-1/3 ml-10 justify-end items-end">
                {/* <p className="mt-5 font-extralight text-2xl">hello</p> */}
                {/* <div className="bg-black bg-opacity-25 flex justify-center items-center"> */}
                {/* <div className=" bg-yellowReview xl:w-28 xl:h-28 shadow-lg rounded-2xl lg:h-20 lg:w-20 2xl:w-36 2xl:h-36 drop-shadow-rv"> */}
                <div
                  className={`${getBackgroundColor(
                    score_usr
                  )} w-12 h-12 xl:w-28 xl:h-28 shadow-lg rounded-2xl 2xl:w-36 lg:h-20 lg:w-20 2xl:h-36 drop-shadow-rv`}
                >
                  <span className="w-full h-full flex justify-center items-center text-xs xl:text-4xl lg:text-2xl 2xl:text-5xl font-black">
                    {score_usr}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center mt-5">
          <p className="flex-1 text-xs xl:text-xl lg:text-base 2xl:text-2xl font-semibold">
            Đánh giá từ 2Review:
          </p>
        </div>
        <div className="relative flex py-3 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        {/* đoan này là đoạn review của 2Review */}
        <div className="flex flex-row items-center">
          {adm_ids.length > 3 ? (
            adm_ids
              .slice(-4)
              .map((id) => <SingReview key={id} review_id={id} />)
          ) : adm_ids.length > 0 ? (
            adm_ids.map((id) => <SingReview key={id} review_id={id} />)
          ) : (
            <p className="flex-1 text-center text-xs xl:text-xl lg:text-base 2xl:text-2xl font-semibold">
              Không có review nào ;-;
            </p>
          )}
        </div>
        <div className="flex flex-row items-center mt-1 xl:mt-2">
          <p className="flex-1 text-xs xl:text-xl lg:text-base 2xl:text-2xl font-semibold">
            Đánh giá từ người xem:
          </p>
        </div>
        <div className="relative flex py-3 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        {/* đoan này là đoạn review của 2Review */}
        <div className="flex flex-row items-center">
          {usr_ids.length > 3 ? (
            usr_ids
              .slice(-4)
              .map((id) => <SingReview key={id} review_id={id} />)
          ) : usr_ids.length > 0 ? (
            usr_ids.map((id) => <SingReview key={id} review_id={id} />)
          ) : (
            <p className="flex-1 text-center text-xs xl:text-xl lg:text-base 2xl:text-2xl font-semibold">
              Không có review nào ;-;
            </p>
          )}
        </div>
        <div className="flex flex-row items-center mt-5">
          <p className="flex-1 text-xs xl:text-xl lg:text-base 2xl:text-2xl font-semibold">
            Thông tin tổng quan:
          </p>
        </div>
        <div className="relative flex py-3 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        {/* <div className="whitespace-pre-line text-xs xl:text-xl lg:text-base 2xl:text-2xl">
          {data.results[0].summary}
        </div> */}
        <div
          className="whitespace-pre-line text-xs xl:text-xl lg:text-base 2xl:text-2xl"
          dangerouslySetInnerHTML={{ __html: data.results[0].summary }}
        />
        <div className="flex flex-row items-center mt-5">
          <p className="flex-1 text-xs xl:text-xl lg:text-base 2xl:text-2xl font-semibold">
            Nội dung liên quan:
          </p>
        </div>
        <div className="relative flex py-3 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div className="2xl:mb-20 max-w-full">
          <section className="landing__carousel">
            <CarouselReview slides={SLIDES} options={OPTIONS} />
          </section>
        </div>
      </div>
    </header>
  );
}
function getBackgroundColor(score) {
  if (score > 80) {
    return "bg-greenReview"; // Màu nền xanh cho điểm > 80
  } else if (score >= 50) {
    return "bg-yellowReview"; // Màu nền vàng cho điểm > 50
  } else {
    return "bg-redReview"; // Màu nền đỏ cho điểm <= 50
  }
}
// export default ReviewPage;
