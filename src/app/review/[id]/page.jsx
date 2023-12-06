import Link from "next/link";
import Image from "next/image";
import CarouselReview from "./carouselrv";
const OPTIONS = { slidesToScroll: "auto", containScroll: "trimSnaps" };
const SLIDE_COUNT = 12;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const reviewPage = () => {
  return (
    <header>
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
              <p className="text-center uppercase text-3xl whitespace-normal font-semibold 2xl:text-5xl">
                Bến Phà Xác Sống da dsajsakdgkjasdhjk shakjd hsakjh djksahd kjsa
                hdas
              </p>
              <a
                href="#"
                className="mt-6 text-xl block leading-tight font-bold text-black hover:underline 2xl:text-3xl"
              >
                Tag:
              </a>
            </div>
            <div className="flex-grow border-t border-gray-300"></div>
            <div className="flex h-1/3 flex-row items-center">
              <div className="flex w-2/3 flex-col">
                <p className="mt-2 font-extralight text-xl 2xl:text-3xl">
                  2REVIEWSCORE
                </p>
                <p className="mt-2 font-bold text-2xl 2xl:text-4xl">
                  Không thể cứu vớt
                </p>
                <p className="mt-2 font-normal text-xl hover:underline 2xl:text-3xl">
                  Dựa trên 12 đánh giá
                </p>
              </div>
              <div className="flex w-1/3 ml-10 justify-center items-center">
                <div className=" bg-redReview w-28 h-28 shadow-lg rounded-2xl 2xl:w-36 2xl:h-36 drop-shadow-rv">
                  <span className="w-full h-full flex justify-center items-center text-4xl 2xl:text-5xl font-black">
                    15
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-grow border-t border-gray-300"></div>
            <div className="flex h-1/3 flex-row  items-center">
              <div className="flex flex-col w-2/3">
                <p className="mt-2 font-extralight text-xl 2xl:text-3xl">
                  USERSCORE
                </p>
                <p className="mt-2 font-bold text-2xl 2xl:text-4xl">
                  Có khen có chê
                </p>
                <p className="mt-2 font-normal text-xl hover:underline 2xl:text-3xl">
                  Dựa trên 5 đánh giá
                </p>
              </div>
              <div className="flex w-1/3 ml-10 justify-center items-center">
                {/* <p className="mt-5 font-extralight text-2xl">hello</p> */}
                {/* <div className="bg-black bg-opacity-25 flex justify-center items-center"> */}
                <div className=" bg-yellowReview w-28 h-28 shadow-lg rounded-2xl 2xl:w-36 2xl:h-36 drop-shadow-rv">
                  <span className="w-full h-full flex justify-center items-center text-4xl 2xl:text-5xl font-black">
                    50
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center mt-5">
          <p className="flex-1 text-xl 2xl:text-2xl font-semibold">
            Đánh giá từ 2Review:
          </p>
        </div>
        <div className="relative flex py-3 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div className="flex flex-row items-center mt-5">
          <p className="flex-1 text-xl 2xl:text-2xl font-semibold">
            Đánh giá từ người dùng:
          </p>
        </div>
        <div className="relative flex py-3 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div className="flex flex-row items-center mt-5">
          <p className="flex-1 text-xl 2xl:text-2xl font-semibold">
            Thông tin chi tiết:
          </p>
        </div>
        <div className="relative flex py-3 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div className="text-xl 2xl:text-2xl">
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
          <p className="flex-1 text-xl 2xl:text-2xl font-semibold">
            Nội dung liên quan:
          </p>
        </div>
        <div className="relative flex py-3 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div>
          <div className="relative flex mr-20 2xl:mb-20">
            <section className="landing__carousel">
              <CarouselReview slides={SLIDES} options={OPTIONS} />
            </section>
          </div>
        </div>
      </div>
    </header>
  );
};

export default reviewPage;
