// import Link from "next/link";
import React from "react";
import Image from "next/image";
import CarouselReview from "./carouselrv";
const OPTIONS = { slidesToScroll: "auto", containScroll: "trimSnaps" };
const SLIDE_COUNT = 12;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const getData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/media/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
export default async function ReviewPage({ params }) {
  const data = await getData(params.id);
  return (
    <header>
      {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
      <div className="relative flex items-center">
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <div className="py-5 2xl:px-64 px-20 rounded-xl ">
        {/* <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"> */}
        <div className="md:flex">
          <div className="flex-auto w-2/3">
            <Image
              className="rounded-xl object-cover md:w-full md:h-full"
              // className="h-48 w-full object-cover md:h-full md:w-48"
              href="/"
              src="/movies_pic/maxresdefault.jpg"
              width={10000}
              height={10000}
              alt="banner thong bao"
            />
          </div>
          <div className="flex-auto w-1/3 md:pl-4 2xl:pl-16">
            <div className="flex overflow-hidden h-1/3 flex-col py-8 overflow-y-auto">
              <p className="text-center uppercase xl:text-3xl whitespace-normal font-semibold lg:text-2xl 2xl:text-5xl">
                {data.results[0].title}
              </p>
              <a
                href="#"
                className="xl:mt-6 xl:text-xl block leading-tight font-bold text-black hover:underline lg:mt-2 lg:text-lg 2xl:mt-12 2xl:text-3xl"
              >
                Tag:
              </a>
            </div>
            <div className="flex-grow border-t border-gray-300"></div>
            <div className="flex h-1/3 flex-row items-center">
              <div className="flex w-2/3 flex-col">
                <p className="mt-2 font-extralight xl:text-xl lg:text-sm 2xl:text-3xl">
                  2REVIEWSCORE
                </p>
                <p className="mt-2 font-bold xl:text-2xl lg:text-base 2xl:text-4xl">
                  {/* {data.adm_voice} */}
                  Phim rat hay
                </p>
                <p className="mt-2 font-normal xl:text-xl hover:underline lg:text-sm 2xl:text-3xl">
                  Dựa trên {data.results[0].adm_count} đánh giá
                </p>
              </div>
              <div className="flex w-1/3 ml-10 justify-center items-center">
                <div className=" bg-redReview xl:w-28 xl:h-28 shadow-lg rounded-2xl 2xl:w-36 lg:h-20 lg:w-20 2xl:h-36 drop-shadow-rv">
                  <span className="w-full h-full flex justify-center items-center xl:text-4xl lg:text-2xl 2xl:text-5xl font-black">
                    {data.results[0].adm_score}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-grow border-t border-gray-300"></div>
            <div className="flex h-1/3 flex-row  items-center">
              <div className="flex flex-col w-2/3">
                <p className="mt-2 font-extralight xl:text-xl lg:text-sm 2xl:text-3xl">
                  USERSCORE
                </p>
                <p className="mt-2 font-bold xl:text-2xl lg:text-base 2xl:text-4xl">
                  {/* {data.usr_voice} */}
                  Phim hay
                </p>
                <p className="mt-2 font-normal xl:text-xl hover:underline lg:text-sm 2xl:text-3xl">
                  Dựa trên {data.results[0].usr_count} đánh giá
                </p>
              </div>
              <div className="flex w-1/3 ml-10 justify-center items-center">
                {/* <p className="mt-5 font-extralight text-2xl">hello</p> */}
                {/* <div className="bg-black bg-opacity-25 flex justify-center items-center"> */}
                <div className=" bg-yellowReview xl:w-28 xl:h-28 shadow-lg rounded-2xl lg:h-20 lg:w-20 2xl:w-36 2xl:h-36 drop-shadow-rv">
                  <span className="w-full h-full flex justify-center items-center xl:text-4xl lg:text-2xl 2xl:text-5xl font-black">
                    {data.results[0].usr_score}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center mt-5">
          <p className="flex-1 xl:text-xl lg:text-base 2xl:text-2xl font-semibold">
            Đánh giá từ 2Review:
          </p>
        </div>
        <div className="relative flex py-3 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div className="flex flex-row items-center mt-5">
          <p className="flex-1 xl:text-xl lg:text-base 2xl:text-2xl font-semibold">
            Đánh giá từ người dùng:
          </p>
        </div>
        <div className="relative flex py-3 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div className="flex flex-row items-center mt-5">
          <p className="flex-1 xl:text-xl lg:text-base 2xl:text-2xl font-semibold">
            Thông tin chi tiết:
          </p>
        </div>
        <div className="relative flex py-3 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div className="xl:text-xl lg:text-base 2xl:text-2xl">
          <p>Đạo diễn: Nguyễn Thành Nam</p>
          <p>
            Diễn viên: Huỳnh Đông, Ốc Thanh Vân, Trần Phong, La Thành, Xuân
            Nghị, Lê Lộc…
          </p>
          <p>Thể loại: Hồi hộp</p>
          <p>Khởi chiếu: 01/09/2023</p>
          <p>Thời gian: 83 phút</p>
          <p>Ngôn ngữ: Tiếng Việt - Phụ đề</p>
          <p>
            Rate: Tiếng Anh T16 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 16 TUỔI
            TRỞ LÊN (16+)
          </p>
        </div>
        <div className="flex flex-row items-center mt-5">
          <p className="flex-1 xl:text-xl lg:text-base 2xl:text-2xl font-semibold">
            Nội dung liên quan:
          </p>
        </div>
        <div className="relative flex py-3 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div>
          <div className="relative flex 2xl:mb-20">
            <section className="landing__carousel">
              <CarouselReview slides={SLIDES} options={OPTIONS} />
            </section>
          </div>
        </div>
      </div>
    </header>
  );
}

// export default ReviewPage;
