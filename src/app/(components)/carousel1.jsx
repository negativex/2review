"use client";
import { useRouter } from "next/navigation";
import { React, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import Image from "next/image";
const HotCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [ClassNames()]);
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      fetch("http://localhost:3000/api/media")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    };
    fetchData();
  }, []);
  function getBackgroundColor(score) {
    if (score > 80) {
      return "bg-greenReview"; // Màu nền xanh cho điểm > 80
    } else if (score >= 50) {
      return "bg-yellowReview"; // Màu nền vàng cho điểm > 50
    } else {
      return "bg-redReview"; // Màu nền đỏ cho điểm <= 50
    }
  }
  const router = useRouter();
  const handleItemClick = (itemId) => {
    router.refresh();
    router.push(`/review/${itemId}`);
  };
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div className="embla">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div
              className="flex-col flex-[0_0_var(--slide-size)] min-w-0 pl-[var(--slide-spacing)] relative embla__class-name"
              key={index}
              onClick={() =>
                handleItemClick(data.results[index % data.results.length]._id)
              }
            >
              <div
                className={`${getBackgroundColor(
                  data.results[index % data.results.length].adm_score
                )} relative w-full h-20 xl:h-24 2xl:h-40 rounded-t-lg`}
              >
                <div className=" absolute inset-x-1 xl:inset-x-2 2xl:inset-x-4 top-1 xl:top-2 2xl:top-4 ">
                  <Image
                    className="rounded-lg object-cover h-28 xl:h-32 2xl:h-56 w-55"
                    src={data.results[index % data.results.length].img}
                    alt="Your alt text"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
              <div className="h-24 xl:h-28 2xl:h-52 pt-12 2xl:pt-24">
                <div>
                  <p className="ml-1 xl:ml-2 w-2/3 justify-center text-sm 2xl:text-4xl xl:text-xl lg:text-base font-black">
                    {data.results[index % data.results.length].title}
                  </p>
                </div>
                <div
                  className={`${getBackgroundColor(
                    data.results[index % data.results.length].adm_score
                  )} absolute bottom-0 right-1 xl:right-2 bg-green 2xl:h-28 2xl:w-28 xl:h-16 xl:w-16 lg:h-12 lg:w-12 w-8 h-8 rounded-2xl drop-shadow-rv`}
                >
                  <span className="w-full h-full flex justify-center items-center text-xs sm:text-sm 2xl:text-5xl xl:text-2xl lg:text-base font-black">
                    {data.results[index % data.results.length].adm_score}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotCarousel;
