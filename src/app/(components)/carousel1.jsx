"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import imageCarousel1 from "./imageCarousel1";
import Image from "next/image";
const HotCarousel = (props) => {
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
                src={imageCarousel1(index)}
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

export default HotCarousel;
