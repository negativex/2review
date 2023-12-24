"use client";
// import Link from "next/link";
import { useRouter } from "next/navigation";
import { React, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import Image from "next/image";
const CarouselReview = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [ClassNames()]);
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      fetch(`/api/mediaSort/score`, {
        cache: "no-store",
      })
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
    <div className="embla_hot">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="embla__container_hot">
          {slides.map((index) => (
            <div
              className="flex flex-col flex-[0_0_var(--slide-size)] max-w-full min-w-0 pl-[var(--slide-spacing)] relative embla__class-name "
              key={index}
              onClick={() =>
                handleItemClick(data.results[index % data.results.length]._id)
              }
            >
              <Image
                // href={`/review/${
                //   data.results[index % data.results.length]._id
                // }`}
                className="h-36 sm:h-[var(--slide-height)] 2xl:h-4/5 object-cover object-top rounded-md mb-2 2xl:mb-10"
                src={data.results[index % data.results.length].img_sm}
                alt="Your alt text"
                width={1000}
                height={1000}
              />
              <div className="items-center justify-end py-2">
                <p className="w-2/3 h-8 sm:h-12 xl:h-20 2xl:h-36 text-sm 2xl:text-4xl xl:text-xl lg:text-base font-black">
                  {data.results[index % data.results.length].title}
                </p>
                <div
                  className={`${getBackgroundColor(
                    data.results[index % data.results.length].adm_score
                  )} absolute bottom-2 xl:bottom-6  right-0 bg-green h-8 w-8 2xl:h-28 2xl:w-28 xl:h-16 xl:w-16 lg:h-12 lg:w-12 rounded-2xl drop-shadow-rv`}
                >
                  <span className="w-full h-full flex justify-center items-center text-sm 2xl:text-5xl xl:text-2xl lg:text-base font-black">
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

export default CarouselReview;
