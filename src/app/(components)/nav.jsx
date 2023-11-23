import Link from "next/link";
import Image from "next/image";
const Nav = () => {
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
    </header>
  );
};

export default Nav;
