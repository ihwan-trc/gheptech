import React from "react";
import hero1 from "../../../assets/carousel-1.jpg";
import hero2 from "../../../assets/carousel-2.jpg";

export default function Hero({ hero }) {
  return (
    <div
      id="header-carousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="w-100" src={hero1} alt="hero 1" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3 text-hero">
              <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                {hero.title}
              </h5>
              <h5 className="text-white mb-md-4 animated zoomIn">
                <i>
                  Hilangkan sekat teknologi, kami membantu bisnis anda bergerak
                  lebih cepat, ke arah yang lebih tepat
                </i>
              </h5>
              <a
                href="quote.html"
                className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
              >
                Free Quote
              </a>
              <a
                href=""
                className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="w-100" src={hero2} alt="hero 2" />
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
              <a
                href="quote.html"
                className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
              >
                Free Quote
              </a>
              <a
                href=""
                className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#header-carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#header-carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
