import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <header className="bg-footerMain h-2/5">
      <div className=" flex flex-row w-full ">
        <div className="flex w-1/3 ml-2 sm:ml-20 mt-12 flex-col mr-5 sm:mr-20">
          <p className=" text-card-hover font-semibold text-xs sm:text-lg">
            Tham Gia Hội Viên Nhận Thông Báo Về Phim!!
          </p>
          <div className="flex flex-row mt-12 gap-2">
            <Link href="/" className="">
              <Image
                src="/icon_banner/Social media.png"
                width={20}
                height={20}
                alt="Logo"
              ></Image>
            </Link>
            <Link href="/" className="">
              <Image
                src="/icon_banner/Social media1.png"
                width={20}
                height={20}
                alt="Logo"
              ></Image>
            </Link>
            <Link href="/" className="">
              <Image
                src="/icon_banner/Social media2.png"
                width={20}
                height={20}
                alt="Logo"
              ></Image>
            </Link>
            <Link href="/" className="">
              <Image
                src="/icon_banner/Social media3.png"
                width={20}
                height={20}
                alt="Logo"
              ></Image>
            </Link>
          </div>
        </div>
        <div className="flex w-2/3 gap-3 sm:gap-20 mb-3 2xl:mb-10 sm:items-center justify-center">
          <div className="flex-col mt-16 text-card-hover font-extralight text-xs xl:text-lg 2xl:text-2xl">
            <p className="text-xs sm:text-lg  font-semibold mb-4">Về 2Review</p>
            <p>Mục tiêu</p>
            <p>Chính sách</p>
            <p>Hỗ trợ</p>
            <p>Điều khoản & Dịch vụ</p>
          </div>
          <div className="flex-col mt-16 text-card-hover font-extralight text-xs xl:text-lg 2xl:text-2xl">
            <p className="text-xs sm:text-lg font-semibold mb-4">Trợ giúp</p>
            <p>Cách đánh giá</p>
            <p>Hội viên</p>
            <p>FAQs</p>
            <p>Liên hệ 2Review</p>
          </div>
          <div className="flex-col mt-16 text-card-hover font-extralight text-xs xl:text-lg 2xl:text-2xl">
            <p className="text-xs sm:text-lg font-semibold mb-4">Tham gia</p>
            <p>2Review Social Club</p>
            <p>Chính sách</p>
            <p>Fanpage</p>
            <p>Cộng tác</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Footer;
