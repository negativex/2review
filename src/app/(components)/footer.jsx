import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../css/footer.css";
const Footer = () => {
  return (
    // <header className="bg-footerMain h-2/5">
    //   <div className=" flex flex-row gap-20">
    //     <div className="ml-20 mt-12 flex flex-col mr-20">
    //       <p className=" text-card-hover font-semibold text-lg">
    //         Tham Gia Hội Viên Nhận Thông Báo Về Phim!!
    //       </p>
    //       <div className="flex flex-row mt-12 gap-2">
    //         <Link href="/" className="">
    //           <Image
    //             src="/icon_banner/Social media.png"
    //             width={20}
    //             height={20}
    //             alt="Logo"
    //           ></Image>
    //         </Link>
    //         <Link href="/" className="">
    //           <Image
    //             src="/icon_banner/Social media1.png"
    //             width={20}
    //             height={20}
    //             alt="Logo"
    //           ></Image>
    //         </Link>
    //         <Link href="/" className="">
    //           <Image
    //             src="/icon_banner/Social media2.png"
    //             width={20}
    //             height={20}
    //             alt="Logo"
    //           ></Image>
    //         </Link>
    //         <Link href="/" className="">
    //           <Image
    //             src="/icon_banner/Social media3.png"
    //             width={20}
    //             height={20}
    //             alt="Logo"
    //           ></Image>
    //         </Link>
    //       </div>
    //     </div>
    //     <div className="flex-col mt-16 text-card-hover font-extralight">
    //       <p className="text-lg font-semibold mb-4">Về 2Review</p>
    //       <p>Mục tiêu</p>
    //       <p>Chính sách</p>
    //       <p>Hỗ trợ</p>
    //       <p>Điều khoản & Dịch vụ</p>
    //     </div>
    //     <div className="flex-col mt-16 text-card-hover font-extralight">
    //       <p className="text-lg font-semibold mb-4">Trợ giúp</p>
    //       <p>Cách đánh giá</p>
    //       <p>Hội viên</p>
    //       <p>FAQs</p>
    //       <p>Liên hệ 2Review</p>
    //     </div>
    //     <div className="flex-col mt-16 text-card-hover font-extralight">
    //       <p className="text-lg font-semibold mb-4">Tham gia</p>
    //       <p>2Review Social Club</p>
    //       <p>Chính sách</p>
    //       <p>Fanpage</p>
    //       <p>Cộng tác</p>
    //     </div>
    //   </div>
    // </header>

    <footer class="footer">
      <div class="footer__addr">
        <address>
          <form action="#">
            <div class="form-group">
              <div class="inputContainer">
                <input
                  required="required"
                  id="inputField"
                  placeholder="Email"
                  type="email"
                />
                <label class="usernameLabel" for="inputField">
                  Đăng ký để không thành tối cổ
                </label>
                <FontAwesomeIcon
                  icon={faExclamation}
                  shake
                  className="userIcon"
                  style={{ color: "#ffffff" }}
                />
              </div>
              <button>
                <span class="icon-keyboard_backspace"></span>
              </button>
            </div>
          </form>
        </address>
        <div class="footer__logo">
          <Link href="/">
            <Image
              href="/"
              src="/logo2.svg"
              width={150}
              height={150}
              alt="Logo"
            />
          </Link>
        </div>
      </div>

      <ul class="footer__nav">
        <li class="nav__item">
          <h2 class="nav__title">Về 2Review</h2>

          <ul class="nav__ul">
            <li>
              <a href="#">Mục tiêu</a>
            </li>

            <li>
              <a href="#">Chính sách</a>
            </li>

            <li>
              <a href="#">Hỗ trợ</a>
            </li>

            <li>
              <a href="#">Điều khoản & dịch vụ</a>
            </li>

            <li>
              <a href="#">Bản quyền</a>
            </li>
          </ul>
        </li>

        <li class="nav__item nav__item--extra">
          <h2 class="nav__title">Trợ giúp</h2>

          <ul class="nav__ul nav__ul--extra">
            <li>
              <a href="#">Cách đánh giá</a>
            </li>

            <li>
              <a href="#">Hội viên</a>
            </li>

            <li>
              <a href="#">FAQs</a>
            </li>

            <li>
              <a href="#">Liên hệ 2Review</a>
            </li>
          </ul>
        </li>

        <li class="nav__item">
          <h2 class="nav__title">Tham gia</h2>

          <ul class="nav__ul">
            <li>
              <a href="#">2Review Social Club</a>
            </li>

            <li>
              <a href="#">Công việc</a>
            </li>

            <li>
              <a href="#">Về chúng tôi</a>
            </li>
          </ul>
        </li>
      </ul>

      <div class="legal">
        <p>&copy; 2023 2Review. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
