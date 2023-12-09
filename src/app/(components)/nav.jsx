"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "../css/nav.css";
import "../css/bootstrap.min.css";
import "../css/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPointUp,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";
import "../css/input.css";
import "../css/buttonLogin.css";
import { Modal } from "reactstrap";
import "../css/button.css";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../js/firebase.js";
import { MDBCheckbox } from "mdb-react-ui-kit";

function Nav() {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);

  const [modalShowChild, setModalShowChild] = React.useState(false);
  const [modalOpenChild, setModalOpenChild] = React.useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [registerInformation, setRegisterInformation] = useState({
    password: "",
    confirmPassword: "",
  });
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // navigate("/homepage");
      })
      .catch((err) => alert(err.message));
  };

  const handleRegister = () => {
    if (registerInformation.password !== registerInformation.confirmPassword) {
      alert("Please confirm that password are the same");
      return;
    }
    createUserWithEmailAndPassword(
      auth,
      registerInformation.email,
      registerInformation.password
    )
      .then(() => {
        // navigate("/homepage");
      })
      .catch((err) => alert(err.message));
  };
  return (
    <header>
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <meta content="" name="keywords" />
      <meta content="" name="description" />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Playball&display=swap"
        rel="stylesheet"
      />

      {/* <!-- Icon Font Stylesheet --> */}
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
        rel="stylesheet"
      />

      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Playball&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
        rel="stylesheet"
      />

      {/* <div className="flex justify-center bg-page" style={{color:"black"}}>
        <p className="text-xs 4xl:text-xl font-semibold">Tham gia</p>
        <Link
          href="/"
          className="text-xs font-semibold"
        >
          &nbsp;hội viên&nbsp;
        </Link>
        <p className="text-xs 2xl:text-xl font-semibold">ngay hôm nay!!!</p>
      </div> */}

      <div class="container-fluid nav-bar">
        <div class="container">
          <nav class="navbar navbar-light navbar-expand-lg py-4">
            <a href="/" class="navbar-brand">
              <Image
                href="/"
                src="/logo2.svg"
                width={150}
                height={150}
                alt="Logo"
              />
            </a>

            <div className="navbar-collapse">
              <div className="navbar-nav mx-auto">
                <a href="/login" className="nav-item nav-link active">
                  Phim Mới
                </a>
                <a href="/" className="nav-item nav-link">
                  Top 100
                </a>
                <a href="service.html" class="nav-item nav-link">
                  Games
                </a>
                <a href="event.html" class="nav-item nav-link">
                  Animes
                </a>
                <a href="menu.html" class="nav-item nav-link">
                  Hot Trend
                </a>
                <div class="nav-item dropdown">
                  <a href="#" class="nav-link " data-bs-toggle="dropdown">
                    Pages
                    <FontAwesomeIcon
                      icon={faHandPointUp}
                      rotation={180}
                      style={{ marginLeft: 5 }}
                    />
                  </a>
                  <div class="dropdown-menu bg-light">
                    <a href="book.html" class="dropdown-item">
                      Booking
                    </a>
                    <a href="blog.html" class="dropdown-item">
                      Our Blog
                    </a>
                    <a href="team.html" class="dropdown-item">
                      Our Team
                    </a>
                    <a href="testimonial.html" class="dropdown-item">
                      Testimonial
                    </a>
                    <a href="404.html" class="dropdown-item">
                      404 Page
                    </a>
                  </div>
                </div>
                <a href="contact.html" class="nav-item nav-link">
                  Contact
                </a>
              </div>
              <a class="btn py-2 px-4 d-none d-xl-inline-block rounded-pill">
                <button onClick={() => setModalOpen(!modalOpen)}>
                  Login/Register
                </button>
                <Modal
                  size="xl"
                  toggle={() => setModalOpen(!modalOpen)}
                  isOpen={modalOpen}
                  data-toggle="modal"
                  show={modalShow}
                  // className="modal-backdrop"
                >
                  <div className=" modal-body container" id="exampleModalLabel">
                    <div fluid className="my-5 row">
                      <div className="g-1 align-items-center row my-0 col">
                        <div className="col">
                          <div
                            className="card my-5 cascading-right"
                            style={{
                              background: "hsla(0, 0%, 100%, 0.55)",
                              backdropFilter: "blur(30px)",
                            }}
                          >
                            <div className=" card-body p-5 shadow-5 text-center">
                              <h1 className="fw-bold mb-5 fs-2">
                                Đăng Ký Ngay{" "}
                                <FontAwesomeIcon
                                  icon={faExclamation}
                                  shake
                                  style={{ color: "#000000" }}
                                />
                              </h1>
                              <div className="row">
                                <div className="col" col="6">
                                  <input
                                    placeholder="Tên"
                                    type="text"
                                    class="input"
                                    required=""
                                  />
                                </div>

                                <div className="col" col="6">
                                  <input
                                    placeholder="Gmail"
                                    type="mail"
                                    class="input mb-4"
                                    required=""
                                    value={registerInformation.email}
                                    onChange={(e) =>
                                      setRegisterInformation({
                                        ...registerInformation,
                                        email: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                              </div>

                              <input
                                placeholder="Mật khẩu"
                                type="password"
                                className="input mb-4"
                                required=""
                                value={registerInformation.password}
                                onChange={(e) =>
                                  setRegisterInformation({
                                    ...registerInformation,
                                    password: e.target.value,
                                  })
                                }
                              />
                              <input
                                placeholder="Nhập lại mật khẩu"
                                type="password"
                                className="input mb-4"
                                required=""
                                value={registerInformation.confirmPassword}
                                onChange={(e) =>
                                  setRegisterInformation({
                                    ...registerInformation,
                                    confirmPassword: e.target.value,
                                  })
                                }
                              />

                              <div className="d-flex">
                                <MDBCheckbox
                                  name="flexCheck"
                                  value=""
                                  id="flexCheckDefault"
                                />
                                <p style={{ color: "black", paddingLeft: 5 }}>
                                  Đồng ý với điều khoản
                                </p>
                              </div>

                              <button className="button type1 " onClick={handleRegister}></button>

                              <div className="text-center">
                                <button
                                  style={{ color: "black" }}
                                  className="mt-n4 "
                                  onClick={() => {
                                    setModalOpenChild(!modalOpenChild);
                                    setModalOpen(false);
                                  }}
                                >
                                  Bạn đã có tài khoản?
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col" col="6">
                          <img
                            href="/"
                            src="/movie-posters.png"
                            height={600}
                            width={600}
                            class="w-100 rounded-4 shadow-4"
                            alt=""
                            fluid
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal>
              </a>

              <a class="btn py-2 px-4 d-none d-xl-inline-block rounded-pill">
                <Modal
                  size="xl"
                  toggle={() => setModalOpenChild(!modalOpenChild)}
                  isOpen={modalOpenChild}
                  show={modalShowChild}
                >
                  <div
                    className=" modal-body container"
                    id="exampleModalLabel1"
                  >
                    <div fluid className="my-5 row">
                      <div className="g-1 align-items-center row my-0 col">
                        <div className="col">
                          <div
                            className="card my-5 cascading-right"
                            style={{
                              background: "hsla(0, 0%, 100%, 0.55)",
                              backdropFilter: "blur(30px)",
                            }}
                          >
                            <div className=" card-body p-5 shadow-5 text-center">
                              <h1 className="fw-bold mb-5 fs-2">
                                Đăng Nhập Ngay{" "}
                                <FontAwesomeIcon
                                  icon={faExclamation}
                                  shake
                                  style={{ color: "#000000" }}
                                />
                              </h1>

                              <div className="col" col="6">
                                <input
                                  placeholder="Gmail"
                                  type="text"
                                  class="input mb-4"
                                  required=""
                                />
                              </div>

                              <input
                                placeholder="Mật khẩu"
                                type="password"
                                className="input mb-4"
                                required=""
                              />

                              <button className="button type2 "></button>

                              <div className="text-center">
                                <button
                                  style={{ color: "black" }}
                                  className="mt-n4"
                                  onClick={() => {
                                    setModalOpen(!modalOpen);
                                    setModalOpenChild(false);
                                  }}
                                >
                                  Bạn chưa có tài khoản??
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col" col="6">
                          <img
                            href="/"
                            src="/movie-posters.png"
                            height={600}
                            width={600}
                            class="w-100 rounded-4 shadow-4"
                            alt=""
                            fluid
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal>
              </a>
            </div>
          </nav>
        </div>
      </div>

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>

      {/* <!-- Template Javascript --> */}
      <script src="../js/main.js"></script>
    </header>
  );
}

export default Nav;
