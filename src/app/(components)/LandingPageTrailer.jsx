"use client";
import Image from "next/image";
import { useState } from "react";

const YouTubeVideo = () => {
  const [vidId, setVidId] = useState("EGYxDe_OJ_M");
  const handleItemClick = (itemId) => {
    setVidId(itemId);
  };
  return (
    <div className="mr-20 flex youtube-video-container text-xs lg:text-xs xl:text-lg 2xl:text-2xl">
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
          onClick={() => handleItemClick("EGYxDe_OJ_M")}
        >
          <Image
            className="rounded-lg object-cover h-24 w-40 2xl:h-44 2xl:w-72 mb-2"
            src={"https://i.ytimg.com/vi/EGYxDe_OJ_M/maxresdefault.jpg"}
            alt="Your alt text"
            width={1600}
            height={900}
          />
          <div className=" flex-1 ml-5 ">
            <p>Arkie Và Ngày Mặt Trời Mất Tích</p>
            <p>Ra mắt ngày 31/12/2023</p>
          </div>
        </div>
        <div
          className="flex flex-row items-center"
          onClick={() => handleItemClick("MV4XLx_Vzw0")}
        >
          <Image
            className="rounded-lg object-cover h-24 w-40 2xl:h-44 2xl:w-72 mb-2"
            src={"https://i.ytimg.com/vi/MV4XLx_Vzw0/maxresdefault.jpg"}
            alt="Your alt text"
            width={1600}
            height={900}
          />
          <div className="flex-1 ml-5">
            <p>Quỷ Cấu</p>
            <p>Ra mắt ngày 22/12/2023</p>
          </div>
        </div>
        <div
          className="flex flex-row items-center"
          onClick={() => handleItemClick("Rbc5Yvpqg0g")}
        >
          <Image
            className="rounded-lg object-cover h-24 w-40 2xl:h-44 2xl:w-72 mb-2"
            src={"https://i.ytimg.com/vi/Rbc5Yvpqg0g/maxresdefault.jpg"}
            alt="Your alt text"
            width={1600}
            height={900}
          />
          <div className="flex-1 ml-5">
            <p>Tiễn Vong</p>
            <p>Ra mắt ngày 15/12/2023</p>
          </div>
        </div>
        <div
          className="flex flex-row items-center"
          onClick={() => handleItemClick("MoM0LeHbmzA")}
        >
          <Image
            className="rounded-lg object-cover h-24 w-40 2xl:h-44 2xl:w-72 mb-2"
            src={"https://i.ytimg.com/vi/MoM0LeHbmzA/sddefault.jpg"}
            alt="Your alt text"
            width={1600}
            height={900}
          />
          <div className="flex-1 ml-5">
            <p>Đỉnh Chiak</p>
            <p>Ra mắt ngày 15/12/2023</p>
          </div>
        </div>
        <div
          className="flex-row items-center hidden xl:flex"
          onClick={() => handleItemClick("GJ62bnEoUxg")}
        >
          <Image
            className="rounded-lg object-cover h-24 w-40 2xl:h-44 2xl:w-72 mb-2"
            src={"https://i.ytimg.com/vi/GJ62bnEoUxg/maxresdefault.jpg"}
            alt="Your alt text"
            width={1600}
            height={900}
          />
          <div className="flex-1 ml-5">
            <p>Cầu hồn</p>
            <p>Ra mắt ngày 24/11/2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubeVideo;
