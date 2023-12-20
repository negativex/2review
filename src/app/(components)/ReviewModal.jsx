"use client";
import { useState } from "react";
const ReviewModal = (this_media_id) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const md_id = this_media_id.this_media_id;
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;
  const [postData, setpostData] = useState({
    title: "",
    body: "",
    score: 50,
    media_id: md_id,
    published_on: formattedDate,
  });
  //   console.log({ postData });
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setpostData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };
  const post = async () => {
    try {
      const res = await fetch(`/api/review`, {
        method: "POST",
        body: JSON.stringify({ postData }),
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      console.log("Data posts successfully:");
    } catch (error) {
      console.error("Error updating data:", error.message);
    }
  };
  const handleOpenModal = () => {
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const handleSubmit = () => {
    if (postData.title.length > 3 && postData.body.length > 10) {
      post();
    }
    handleCloseModal();
  };
  return (
    <div>
      <button
        className="text-xs xl:text-xl lg:text-base 2xl:text-2xl text-black-text"
        onClick={handleOpenModal}
      >
        Đăng đánh giá của bạn...
      </button>

      {isModalOpen && (
        <div className=" w-full bg-gray-light border shadow-[0_0_10px_rgba(0,0,0,0.1)] p-3 border-solid border-[#ccc] ">
          <div className="flex flex-col">
            <div className="flex basis-1/4">
              <input
                className=" w-full text-lg text-black"
                id="title"
                name="title"
                type="text"
                value={postData.title}
                onChange={handleChange}
                placeholder="Nhập tiêu đề"
              />
            </div>
            <div className=" flex basis-1/2 mt-2">
              <textarea
                className=" w-full h-40 text-lg text-black"
                id="body"
                name="body"
                type="text"
                value={postData.body}
                onChange={handleChange}
                placeholder="Nhập nội dung"
              />
            </div>
            <div className=" flex basis-1/4 mt-2">
              <input
                className=" w-full text-lg text-black"
                id="score"
                name="score"
                type="number"
                value={postData.score}
                onChange={handleChange}
                placeholder="Nhập điểm"
              />
            </div>
          </div>
          <div className="flex flex-row gap-5 mt-2">
            <button className="text-lg text-black" onClick={handleSubmit}>
              Hoàn tất
            </button>
            <button className="text-lg text-black" onClick={handleCloseModal}>
              Hủy
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewModal;
