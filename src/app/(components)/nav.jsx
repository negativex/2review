import Link from "next/link";
import "../css/header.css";
import "../css/bootstrap.min.css";
const Nav = () => {
  return (

    <header>
      {/* <!-- Google Web Fonts --> */}

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

      {/* <!-- Customized Bootstrap Stylesheet --> */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />

      {/* <!-- Template Stylesheet --> */}
      <link href="css/bootstrap.min.css" rel="stylesheet" />
      <link href="css/header.css" rel="stylesheet"></link>
      <div class="flex justify-center py-1 bg-page">
        <p class="text-sm 2xl:text-xl font-semibold">Tham gia</p>
        <Link
          href="/"
          class="text-sm 2xl:text-xl cursor-pointer font-semibold text-yellow"
        >
          &nbsp;hội viên&nbsp;
        </Link>
        <p class="text-sm 2xl:text-xl font-semibold">ngay hôm nay!!!</p>
      </div>

      

      <div class="container-fluid nav-bar">
        <div class="container">
          <nav class="navbar navbar-light navbar-expand-lg py-4">
            <a href="index.html" class="navbar-brand">
              <h1 class="text-primary fw-bold mb-0">
                Cater<span class="text-dark">Serv</span>
              </h1>
            </a>

            <div class="collapse navbar-collapse" id="navbarCollapse">
              <div class="navbar-nav mx-auto">
                <a href="" class="nav-item nav-link active">
                  Home
                </a>
                <a href="about.html" class="nav-item nav-link">
                  About
                </a>
                <a href="service.html" class="nav-item nav-link">
                  Services
                </a>
                <a href="event.html" class="nav-item nav-link">
                  Events
                </a>
                <a href="menu.html" class="nav-item nav-link">
                  Menu
                </a>
                <div class="nav-item dropdown">
                  <a
                    href="#"
                    class="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Pages
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
              <button
                class="btn-search btn btn-primary btn-md-square me-4 rounded-circle d-none d-lg-inline-flex"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
              >
                <i class="fas fa-search"></i>
              </button>
              <a
                href=""
                class="btn btn-primary py-2 px-4 d-none d-xl-inline-block rounded-pill"
              >
                Book Now
              </a>
            </div>
          </nav>

        </div>
      </div>
      {/* <!-- Navbar End -->
              {/* <!-- JavaScript Libraries --> */}
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>

      {/* <!-- Template Javascript --> */}
      <script src="./header.jsx"></script>
    </header>
  );
};

export default Nav;
