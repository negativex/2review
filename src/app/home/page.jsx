import Link from "next/link";
import Image from "next/image";
// import Carousel from "../(components)/carousel";
import ReviewCarousel from "../(components)/carousel2";
import HotCarousel from "../(components)/carousel1";
const OPTIONS = { slidesToScroll: "auto", containScroll: "trimSnaps" };
const OPTION2 = {};
const SLIDE_COUNT = 12;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const landingPage = () => {
  return (
    <header>
      <div className="flex justify-center object-fill">
        <Link href="/" className="">
          <Image
            href="/"
            src="/icon_banner/banner thong bao.png"
            width={1440}
            height={1440}
            alt="banner thong bao"
          />
        </Link>
      </div>
      <div className="mt-5 ml-20">
        <div className="flex flex-row items-center">
          <p className="flex-1 text-base font-semibold">Mới Nhất Từ 2Review!</p>
          {/* <div className="flex flex-row mr-20 w-27">
            <Image
              href="/"
              src="/Chevron double right.svg"
              width={27}
              height={27}
              alt="Chevron double right"
            ></Image>
            <Image
              className="ml-1 rotate-180"
              href="/"
              src="/Chevron double right.svg"
              width={27}
              height={27}
              alt="Chevron double right"
            ></Image>
          </div> */}
        </div>
        <div className="relative flex py-3 mr-20 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div className="relative flex mr-20">
          <section className="landing__carousel">
            <HotCarousel slides={SLIDES} options={OPTION2} />
          </section>
        </div>
        {/* <div className="flex flex-row">
          <div className="relative bg-redReview w-60 h-60 mr-20 rounded-lg shadow">
            <span className="w-full h-full flex justify-center items-center text-5xl font-black">
              BAD
            </span>
          </div>
          <div className="relative bg-yellowReview w-60 h-60 mr-20 rounded-lg shadow">
            <span className="w-full h-full flex justify-center items-center text-5xl font-black">
              MEDIUM
            </span>
          </div>
          <div className="relative bg-greenReview w-60 h-60 mr-20 rounded-lg shadow">
            <span className="w-full h-full flex justify-center items-center text-5xl font-black">
              GOOD
            </span>
          </div>
        </div> */}
        <div className="flex flex-row items-center mt-5">
          <p className="flex-1 text-base font-semibold">Đang Hot Mùa Này!</p>
          {/* <div className="flex flex-row mr-20 w-27">
            <Image
              href="/"
              src="/Chevron double right.svg"
              width={27}
              height={27}
              alt="Chevron double right"
            ></Image>
            <Image
              className="ml-1 rotate-180"
              href="/"
              src="/Chevron double right.svg"
              width={27}
              height={27}
              alt="Chevron double right"
            ></Image>
          </div> */}
        </div>
        <div className="relative flex py-3 mr-20 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div className="relative flex mr-20">
          <section className="landing__carousel">
            <ReviewCarousel slides={SLIDES} options={OPTIONS} />
          </section>
        </div>
        <p className="flex-1 text-base font-semibold mt-3">2Review Phán!!</p>
        <div className="relative flex py-3 mr-20 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div className="relative flex mr-20">
          <section className="landing__carousel">
            <ReviewCarousel slides={SLIDES} options={OPTIONS} />
          </section>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5">
        <Image
          href="/"
          src="/icon_banner/banner cach danh gia.png"
          width={1800}
          height={1200}
          alt="banner cach danh gia"
        />
      </div>
      <div className="mt5 ml-20">
        <p className="flex-1 text-base font-semibold mt-3">
          Trailer Phim Mới!!
        </p>
        <div className="relative flex py-3 mr-20 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
      </div>
    </header>
  );
};

export default landingPage;
