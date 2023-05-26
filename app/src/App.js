import brand from "./assets/img/logo/logo.png";
// import "./App.css";
import "./assets/css/style.css";

function App() {
  return (
    <div className="App">
      <div className="container-fluid bg-dark px-5 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div
              className="d-inline-flex align-items-center topbar"
              // style="height: 45px"
            >
              <small className="me-3 text-light">
                <i className="fa fa-map-marker-alt me-2 text-danger"></i>
                <a className="" href="#">
                  Jl.Arumba No.31, Malang
                </a>
              </small>
              <small className="me-3 text-light">
                <i className="fa fa-phone-alt me-2 text-success"></i>
                <a className="" href="#">
                  +6285201202582
                </a>
              </small>
              <small className="text-light">
                <i className="fa fa-envelope-open me-2 text-warning"></i>
                <a className="" href="#">
                  official@gheptech.web.id
                </a>
              </small>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div
              className="d-inline-flex align-items-center topbar"
              // style="height: 45px"
            >
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                href="#"
              >
                <i className="fab fa-github fw-normal"></i>
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                href="#"
              >
                <i className="fab fa-facebook-f fw-normal text-info"></i>
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                href="#"
              >
                <i className="fab fa-instagram fw-normal text-warning"></i>
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle"
                href="#"
              >
                <i className="fab fa-youtube fw-normal text-danger"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
          <a href="/" className="navbar-brand p-0">
            <h1 className="m-0">
              <img className="m-0" src={brand} alt="Image" />
            </h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <a href="/" className="nav-item nav-link active">
                Beranda
              </a>
              <a href="about.html" className="nav-item nav-link">
                Tentang Kami
              </a>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Layanan
                </a>
                <div className="dropdown-menu m-0">
                  <a href="layananWeb.html" className="dropdown-item">
                    Pembuatan Website
                  </a>
                  <a href="layananMobile.html" className="dropdown-item">
                    Pembuatan Aplikasi Mobile
                  </a>
                  <a href="layananSistem.html" className="dropdown-item">
                    Pengembangan Sistem
                  </a>
                  <a href="layananDesain.html" className="dropdown-item">
                    Desain Grafis
                  </a>
                  <a href="layananSupport.html" className="dropdown-item">
                    IT Support
                  </a>
                </div>
              </div>
              <a href="portofolio.html" className="nav-item nav-link">
                Portofolio
              </a>
              <a href="blog.html" className="nav-item nav-link">
                Blog
              </a>
              <a href="contact.html" className="nav-item nav-link">
                Kontak
              </a>
            </div>
            <button
              type="button"
              className="btn text-primary ms-3"
              data-bs-toggle="modal"
              data-bs-target="#searchModal"
            >
              <i className="fa fa-search" />
            </button>
            <a href="quote.html" className="btn btn-primary py-2 px-4 ms-3">
              Pertanyaan ?
            </a>
          </div>
        </nav>

        {/* <div
          id="header-carousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="video-container">
                <iframe
                  className="frame"
                  src="./assets/img/carousel/carousel-1.mp4"
                  autoPlay
                />
              </div>
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3 text-hero">
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                    Transformasi Bisnis Anda dengan Teknologi
                  </h5>
                  <h5 className="text-white mb-md-4 animated zoomIn">
                    <i>
                      Hilangkan sekat teknologi, kami membantu bisnis anda
                      bergerak lebih cepat, ke arah yang lebih tepat
                    </i>
                  </h5>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="video-container">
                <iframe
                  className="frame"
                  src="img/carousel/carousel-2.mp4"
                  autoPlay
                />
              </div>
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3 text-hero">
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                    Tumbuh Bersama dan Selaras Dengan Teknologi
                  </h5>
                  <h5 className="text-white mb-md-4 animated zoomIn">
                    <i>
                      Perkembangan Teknologi tidak lagi jadi ancaman, kami akan
                      membantu bisnis anda untuk tumbuh dan berkembang bersama
                      teknologi
                    </i>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
