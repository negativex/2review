"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import imageCarouselrv from "../[id]/imageCarouselrv";
import Image from "next/image";
const CarouselReview = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [ClassNames()]);

  return (
    <div className="embla_hot">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="embla__container_hot">
          {slides.map((index) => (
            <div
              className="flex-[0_0_var(--slide-size)] min-w-0 pl-[var(--slide-spacing)] relative embla__class-name"
              key={index}
            >
              <Image
                className="block h-[var(--slide-height)] w-full object-cover"
                src={imageCarouselrv(index)}
                alt="Your alt text"
                width="fill"
                height="fill"
              />
              <p className="text-xl text-center bg-card">Phim A</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselReview;
