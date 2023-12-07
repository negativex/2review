import Link from "next/link";
import Image from "next/image";
import "../css/nav.css";
import "../css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointUp } from "@fortawesome/free-solid-svg-icons";
const Nav = () => {
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

            <div className="navbar-collapse" id="navbarCollapse">
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
                      style={{marginLeft:5}}
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

              <a
                href="/home"
                class="btn btn-primary py-2 px-4 d-none d-xl-inline-block rounded-pill"
              >
                Login/Register
              </a>
            </div>
          </nav>
        </div>
      </div>
      {/* <!-- Navbar End --> */}

      {/* <!-- JavaScript Libraries --> */}
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>

      {/* <!-- Template Javascript --> */}
      <script src="../js/main.js"></script>
    </header>
  );
};

export default Nav;
