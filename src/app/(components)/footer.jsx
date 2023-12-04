import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <header className="bg-footerMain p-10">
      <div className=" flex flex-row">
        <div className="flex w-1/3 justify-center content-center ml-20 flex-col mr-20">
          <p className=" text-card-hover font-semibold text-lg 2xl:text-3xl">
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
        <div className="flex w-2/3 justify-center content-center gap-20">
          <div className="flex-col mt-8 text-card-hover font-extralight 2xl:text-3xl">
            <p className="text-lg font-semibold mb-4 2xl:text-3xl">
              Về 2Review
            </p>
            <p>Mục tiêu</p>
            <p>Chính sách</p>
            <p>Hỗ trợ</p>
            <p>Điều khoản & Dịch vụ</p>
          </div>
          <div className="flex-col mt-8 text-card-hover font-extralight 2xl:text-3xl">
            <p className="text-lg font-semibold mb-4 2xl:text-3xl">Trợ giúp</p>
            <p>Cách đánh giá</p>
            <p>Hội viên</p>
            <p>FAQs</p>
            <p>Liên hệ 2Review</p>
          </div>
          <div className="flex-col mt-8 text-card-hover font-extralight 2xl:text-3xl">
            <p className="text-lg font-semibold mb-4 2xl:text-3xl">Tham gia</p>
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
