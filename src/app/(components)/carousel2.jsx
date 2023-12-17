"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import imageCarousel2 from "./imageCarousel2";
import Image from "next/image";
const ReviewCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div className="embla">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div
              className="flex-[0_0_var(--slide-size)] min-w-0 pl-[var(--slide-spacing)] relative"
              key={index}
            >
              <Image
                // className="block h-[var(--slide-height)] w-full object-cover"
                src={imageCarousel2(index)}
                alt="Your alt text"
                width="fill"
                height="fill"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel;
