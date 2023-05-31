import React from "react";
import logoFooter from "../assets/img/logo/logo-footer.png";

function Footer() {
  return (
    <div>
      {/* Footer Start */}
      <div
        className="container-fluid bg-dark text-light mt-5 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-4 col-md-6">
              <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
                <a href="/#" className="navbar-brand">
                  <h1 className="m-0 text-white">
                    <img className="m-0 w-50" src={logoFooter} alt="" />
                  </h1>
                </a>
                <p className="mt-3 mb-4">
                  Dapatkan Informasi Terbaru dari Gheptech Solusindo
                </p>
                <form action="">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control border-white p-3"
                      placeholder="Masukkan Email Anda"
                    />
                    <button className="btn btn-dark">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-8 col-md-6">
              <div className="row gx-5">
                <div className="col-lg-4 col-md-12 pt-5 mb-5">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h5 className="text-light mb-0">Kontak</h5>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-geo-alt text-primary me-2"></i>
                    <p className="mb-0">Jl.Arumba No.31, Malang</p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-envelope-open text-primary me-2"></i>
                    <p className="mb-0">official@gheptech.web.id</p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-telephone text-primary me-2"></i>
                    <p className="mb-0">+6285201202582</p>
                  </div>
                  <div className="d-flex mt-4">
                    <a className="btn btn-primary btn-square me-2" href="/#">
                      <i className="fab fa-youtube fw-normal"></i>
                    </a>
                    <a className="btn btn-primary btn-square me-2" href="/#">
                      <i className="fab fa-facebook-f fw-normal"></i>
                    </a>
                    <a className="btn btn-primary btn-square me-2" href="/#">
                      <i className="fab fa-github fw-normal"></i>
                    </a>
                    <a className="btn btn-primary btn-square" href="/#">
                      <i className="fab fa-instagram fw-normal"></i>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h5 className="text-light mb-0">Menu</h5>
                  </div>
                  <div className="link-animated d-flex flex-column justify-content-start">
                    <a className="text-light mb-2" href="/#">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      Beranda
                    </a>
                    <a className="text-light mb-2" href="about.html">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      Tentang kami
                    </a>
                    <a className="text-light mb-2" href="portofolio.html">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      Portofolio
                    </a>
                    <a className="text-light mb-2" href="blog.html">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      Blog
                    </a>
                    <a className="text-light" href="contact.html">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      Kontak
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h5 className="text-light mb-0">Legal Compliance</h5>
                  </div>
                  <div className="link-animated d-flex flex-column justify-content-start">
                    <a className="text-light mb-2" href="/#">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      Syarat & Ketentuan
                    </a>
                    <a className="text-light mb-2" href="/#">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      Disclaimer
                    </a>
                    <a className="text-light mb-2" href="/#">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      Kebijakan Privasi
                    </a>
                    <a className="text-light mb-2" href="/#">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      Cookie Policy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid text-white footer">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-6">
              <div className="d-flex align-items-center justify-content-center footer-copyright">
                <p className="mb-0">
                  &copy; 2023
                  <a className="border-bottom" href="www.gheptech.web.id">
                    Gheptech Solusindo
                  </a>
                  . All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </div>
  );
}

export default Footer;
