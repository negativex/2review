"use client";
// import Link from "next/link";
import React, { useState, useEffect } from "react";
// import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPointUp,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";
import "../css/nav.css";
import "../css/bootstrap.min.css";
import "../css/login.css";
import "../css/button.css";
import "../css/input.css";
import "../css/buttonLogin.css";
import { Modal } from "reactstrap";
import { MDBCheckbox } from "mdb-react-ui-kit";
import { auth, db } from "../js/firebase.js";
import { ref, set, update } from "firebase/database";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import Link from "next/link";
import Image from "next/image";
const Nav = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);

  const [modalShowChild, setModalShowChild] = React.useState(false);
  const [modalOpenChild, setModalOpenChild] = React.useState(false);

  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [registerInformation, setRegisterInformation] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleRegister = () => {
    if (registerInformation.password !== registerInformation.confirmPassword) {
      alert("Mật khẩu chưa trùng nè");
      return;
    }
    createUserWithEmailAndPassword(
      auth,
      registerInformation.email,
      registerInformation.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        set(ref(db, "users/" + registerInformation.name + "/"), {
          userName: registerInformation.name,
          Email: registerInformation.email,
        });
      })
      .catch((err) => alert(err.message));
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const data = new Date();
        update(ref(db, "users/" + name + "/"), {
          name: name,
          lastLogin: data,
        });

        // navigate("/homepage");
      })
      .catch((err) => alert(registerInformation.name));
  };
  return (
    <header className="flex-col">
      <div className="flex justify-center py-1 bg-page">
        <p className="text-xs font-semibold">Tham gia</p>
        <Link
          href="/"
          className="text-xs cursor-pointer font-semibold text-yellow"
        >
          &nbsp;hội viên&nbsp;
        </Link>
        <p className="text-xs font-semibold">ngay hôm nay!!!</p>
      </div>
      <div className="flex flex-row py-3 items-center bg-nav">
        <div className="flex-none w-20 ml-20 cursor-pointer">
          <Link href="/" className="">
            <Image
              href="/"
              src="/logo2.svg"
              width={100}
              height={100}
              alt="Logo"
            />
          </Link>
        </div>
        <nav className="grow">
          <ul className="flex justify-center gap-[5vw] ">
            <li>
              <Link href="/" className="text-base	text-black-text">
                Phim Mới
              </Link>
            </li>
            <li>
              <Link href="/home" className="text-base text-black-text">
                Top 100
              </Link>
            </li>
            <li>
              <Link href="/home" className="text-base	text-black-text">
                Games
              </Link>
            </li>
            <li>
              <Link href="/home" className="text-base	text-black-text">
                Animes
              </Link>
            </li>
            <li>
              <Link href="/home" className="text-base	text-black-text">
                Hot Trend
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex flex-row w-20 flex-shrink-0 mr-20 cursor-pointer justify-center gap-[1vw]">
          <Link href="/" className="">
            <Image
              src="/icon_banner/search-outline.svg"
              width={20}
              height={20}
              alt="Logo"
            ></Image>
          </Link>
          <Link href="/" className="">
            <Image
              onClick={() => setModalOpen(!modalOpen)}
              src="/icon_banner/person-outline.svg"
              width={20}
              height={20}
              alt="Logo"
            ></Image>
          </Link>
          <Link href="/" className="">
            <Image
              src="/icon_banner/heart-outline.svg"
              width={20}
              height={20}
              alt="Logo"
            ></Image>
          </Link>
        </div>
      </div>
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
                          value={registerInformation.name}
                          onChange={(e) =>
                            setRegisterInformation({
                              ...registerInformation,
                              name: e.target.value,
                            })
                          }
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
                      <div class="checkbox" style={{color:"black"}}>
                        <input
                          id="checkbox1"
                          class="checkbox__input"
                          type="checkbox"
                        />
                        <label for="checkbox1" class="checkbox__label" style={{marginLeft:10}} >
                          <span class="checkbox__custom" ></span>
                          Đồng ý với điều khoản của chúng tôi
                        </label>
                      </div>
                    </div>

                    <button
                      className="button type1 "
                      onClick={handleRegister}
                    ></button>

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

      {/* Đăng nhập */}
      <a class="btn py-2 px-4 d-none d-xl-inline-block rounded-pill">
        <Modal
          size="xl"
          toggle={() => setModalOpenChild(!modalOpenChild)}
          isOpen={modalOpenChild}
          show={modalShowChild}
        >
          <div className=" modal-body container" id="exampleModalLabel1">
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
                          type="email"
                          onChange={handleEmailChange}
                          class="input mb-4"
                          required=""
                        />
                      </div>

                      <input
                        placeholder="Mật khẩu"
                        type="password"
                        onChange={handlePasswordChange}
                        className="input mb-4"
                        required=""
                      />

                      <button
                        className="button type2 "
                        
                        onClick={() => {
                          handleSignIn
                          setModalOpenChild(false);
                        }}
                      ></button>

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
    </header>
  );
};

export default Nav;
