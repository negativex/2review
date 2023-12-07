import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../css/footer.css";
const Footer = () => {
  return (

    <footer class="footer">
      <div class="footer__addr">
        <address>
          <form action="#" class="subscribe">
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
                <button>
                <FontAwesomeIcon icon={faArrowRight} shake size="2xl" />
              </button>
              </div>
              
            </div>
          </form>
        </address>
      
          <Link href="/">
            <Image
              href="/"
              src="/logo2.svg"
              width={250}
              height={250}
              alt="Logo"
              className="footer__logo"
            />
          </Link>
        
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
