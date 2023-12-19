// "use client";
import Image from "next/image";
// import { useState } from "react";

const Trailer = ({ vidId }) => {
  //   console.log({ vidId });
  return (
    <div className="mx-auto flex youtube-video-container">
      <div className="mx-auto flex w-full h-80 lg:h-96 xl:h-xl mb-2">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${vidId}`}
          title="YouTube Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Trailer;
