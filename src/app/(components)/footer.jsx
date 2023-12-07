import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "../css/footer.css";
const Footer = () => {
  return (

    <footer className="footer">
      <div className="footer__addr">

        <address>
          <form action="#" class="subscribe">
            <div className="form-group">
              <div className="inputContainer">
                <input
                  required="required"
                  id="inputField"
                  placeholder="Email"
                  type="email"
                />
                <label className="usernameLabel" for="inputField">
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

        <div className="footer__logo">

      

        
      </div>

      <ul className="footer__nav">
        <li className="nav__item">
          <h2 className="nav__title">Về 2Review</h2>

          <ul className="nav__ul">
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

        <li className="nav__item">
          <h2 className="nav__title">Trợ giúp</h2>

          <ul className="nav__ul ">
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

        <li className="nav__item">
          <h2 className="nav__title">Tham gia</h2>

          <ul className="nav__ul">
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

      <div className="legal">
        <p>&copy; 2023 2Review. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
