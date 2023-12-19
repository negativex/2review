"use client";
import Image from "next/image";
import { useState } from "react";

const YouTubeVideo = () => {
  const [vidId, setVidId] = useState("1Jz3e_lq-wg");
  const handleItemClick = (itemId) => {
    setVidId(itemId);
  };
  return (
    <div className="mx-auto flex youtube-video-container">
      <div className="flex w-2/3 mb-2">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${vidId}`}
          title="YouTube Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="ml-4 flex flex-col w-1/3">
        <div
          className="flex flex-row items-center"
          onClick={() => handleItemClick("liJVSwOiiwg")}
        >
          <Image
            className="rounded-lg object-cover h-24 w-40 2xl:h-44 2xl:w-72 mb-2"
            src={"https://i.ytimg.com/vi/1Jz3e_lq-wg/maxresdefault.jpg"}
            alt="Your alt text"
            width={1600}
            height={900}
          />
          <div className="flex-1 ml-5">
            <p>Phim nay hay cuc</p>
            <p>ra mat ngay xx/xx/xx</p>
          </div>
        </div>
        <div
          className="flex flex-row items-center"
          onClick={() => handleItemClick("1Jz3e_lq-wg")}
        >
          <Image
            className="rounded-lg object-cover h-24 w-40 2xl:h-44 2xl:w-72 mb-2"
            src={"https://i.ytimg.com/vi/1Jz3e_lq-wg/maxresdefault.jpg"}
            alt="Your alt text"
            width={1600}
            height={900}
          />
          <div className="flex-1 ml-5">
            <p>Phim nay hay cuc</p>
            <p>ra mat ngay xx/xx/xx</p>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <Image
            className="rounded-lg object-cover h-24 w-40 2xl:h-44 2xl:w-72 mb-2"
            src={"https://i.ytimg.com/vi/1Jz3e_lq-wg/maxresdefault.jpg"}
            alt="Your alt text"
            width={1600}
            height={900}
          />
          <div className="flex-1 ml-5">
            <p>Phim nay hay cuc</p>
            <p>ra mat ngay xx/xx/xx</p>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <Image
            className="rounded-lg object-cover h-24 w-40 2xl:h-44 2xl:w-72 mb-2"
            src={"https://i.ytimg.com/vi/1Jz3e_lq-wg/maxresdefault.jpg"}
            alt="Your alt text"
            width={1600}
            height={900}
          />
          <div className="flex-1 ml-5">
            <p>Phim nay hay cuc</p>
            <p>ra mat ngay xx/xx/xx</p>
          </div>
        </div>
        <div className="flex-row items-center hidden xl:flex">
          <Image
            className="rounded-lg object-cover h-24 w-40 2xl:h-44 2xl:w-72 mb-2"
            src={"https://i.ytimg.com/vi/1Jz3e_lq-wg/maxresdefault.jpg"}
            alt="Your alt text"
            width={1600}
            height={900}
          />
          <div className="flex-1 ml-5">
            <p>Phim nay hay cuc</p>
            <p>ra mat ngay xx/xx/xx</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubeVideo;
