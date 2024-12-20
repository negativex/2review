"use client";
// import Link from "next/link";
import React, { useState, useEffect } from "react";
// import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPointUp,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";

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

  return (
    <header className="flex-col">
      <div className="flex justify-center py-1 bg-page">
        <p className="text-xs 2xl:text-xl font-semibold">Tham gia</p>
        <Link
          href="/"
          className="text-xs 2xl:text-xl cursor-pointer font-semibold text-yellow"
        >
          &nbsp;hội viên&nbsp;
        </Link>
        <p className="text-xs 2xl:text-xl font-semibold">ngay hôm nay!!!</p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:gap-0 ml-3 sm:ml-0 py-3 sm:items-center justify-center bg-nav">
        <Link href="/">
          <Image
            href="/"
            className="flex-none w-20 ml-5 xl:ml-20 2xl:w-32 cursor-pointer"
            src="/logo2.svg"
            width={300}
            height={300}
            alt="Logo"
          />
        </Link>
        <nav className="grow">
          <ul className="flex flex-col ml-3 sm:ml-0 sm:flex-row sm:items-center justify-center gap-[5vw] ">
            <li>
              <Link
                href="/"
                className=" xs:text-xs lg:text-base 2xl:text-2xl text-black-text"
              >
                Phim Mới
              </Link>
            </li>
            <li>
              <Link
                href="/home"
                className="xs:text-xs lg:text-base 2xl:text-2xl text-black-text"
              >
                Top 100
              </Link>
            </li>
            <li>
              <Link
                href="/home"
                className="xs:text-xs lg:text-base 2xl:text-2xl	text-black-text"
              >
                Games
              </Link>
            </li>
            <li>
              <Link
                href="/home"
                className="xs:text-xs lg:text-base 2xl:text-2xl	text-black-text"
              >
                Animes
              </Link>
            </li>
            <li>
              <Link
                href="/home"
                className="xs:text-xs lg:text-base 2xl:text-2xl	text-black-text"
              >
                Hot Trend
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex flex-row w-8 xl:w-12 2xl:w-20 flex-shrink-0 mr-2 sm:mr-5 lg:mr-20 cursor-pointer justify-center gap-[1vw] items-center">
          <Link href="/" className="">
            <Image
              src="/icon_banner/search-outline.svg"
              width={32}
              height={32}
              alt="Logo"
            ></Image>
          </Link>
          <Link href="/" className="">
            <Image
              onClick={() => setModalOpen(!modalOpen)}
              src="/icon_banner/person-outline.svg"
              width={32}
              height={32}
              alt="Logo"
            ></Image>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Nav;
