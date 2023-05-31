import React, { useEffect, useState } from "react";
import hero1 from "../../../assets/carousel-1.jpg";
import hero2 from "../../../assets/carousel-2.jpg";
import about from "../../../assets/img/about/about-1.webp";
import service1 from "../../../assets/img/layanan/layanan-1.jpg";
import service2 from "../../../assets/img/layanan/layanan-2.jpg";
import service3 from "../../../assets/img/layanan/layanan-3.jpg";
import service4 from "../../../assets/img/layanan/layanan-4.jpg";
import service5 from "../../../assets/img/layanan/layanan-5.png";
import project from "../../../assets/img/project/coming-soon.gif";
import blog1 from "../../../assets/img/blog/blog-1.jpeg";
import blog2 from "../../../assets/img/blog/blog-2.jpg";
import blog3 from "../../../assets/img/blog/blog-3.webp";
import vendor1 from "../../../assets/img/vendor/vendor-1.png";
import vendor2 from "../../../assets/img/vendor/vendor-2.jpg";
import vendor3 from "../../../assets/img/vendor/vendor-3.png";
import vendor4 from "../../../assets/img/vendor/vendor-4.png";
import vendor5 from "../../../assets/img/vendor/vendor-5.png";
import vendor6 from "../../../assets/img/vendor/vendor-6.png";
import axios from "axios";
import Hero from "./Hero";

function Home() {
  const [heroes, setHeroes] = useState(null);

  useEffect(function () {
    axios.get("http://localhost:8000/api/heroes").then(function (response) {
      const hero = response.data.data;
      setHeroes(hero);
    });
  }, []);

  return (
    <div>
      {heroes && heroes.map((hero) => <Hero hero={hero} key={hero.id} />)}

      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="section-title position-relative pb-3 mb-5">
                <h5 className="fw-bold text-primary mb-0 text-uppercase">
                  VISI ANDA TEKNOLOGI KAMI
                </h5>
              </div>
              <p className="mb-4">
                "Kembangkan bisnis Anda bersama kami" Kami membantu visi bisnis
                anda dengan teknologi, Kelebihan dari kami :
              </p>
              <div className="row g-0 mb-3">
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                  <h5 className="mb-3 text-info">
                    <i className="fa fa-check text-success me-3"></i>Staf
                    Profesional
                  </h5>
                  <h5 className="mb-3 text-info">
                    <i className="fa fa-check text-success me-3"></i>Keamanan
                    Data
                  </h5>
                </div>
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                  <h5 className="mb-3 text-info">
                    <i className="fa fa-check text-success me-3"></i>Dukungan
                    Berkelanjutan
                  </h5>
                  <h5 className="mb-3 text-info">
                    <i className="fa fa-check text-success me-3"></i>Harga
                    Bersahabat
                  </h5>
                </div>
              </div>
              <div
                className="d-flex align-items-center mb-4 wow fadeIn"
                data-wow-delay="0.6s"
              >
                <div className="bg-primary d-flex align-items-center justify-content-center rounded home-contact">
                  <i className="fa fa-phone-alt text-white"></i>
                </div>
                <div className="ps-4">
                  <h5 className="mb-2">Info lebih lanjut :</h5>
                  <h4 className="text-primary mb-0">+628201202582</h4>
                </div>
              </div>
              <a
                href="quote.html"
                className="btn btn-primary py-3 px-5 mt-3 wow zoomIn"
                data-wow-delay="0.9s"
              >
                Ajukan Pertanyaan
              </a>
            </div>
            <div className="col-lg-5 home-about">
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded wow zoomIn"
                  data-wow-delay="0.9s"
                  src={about}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto">
            <h5 className="fw-bold text-primary text-uppercase">
              Layanan Kami
            </h5>
          </div>
          <div className="row g-5">
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon">
                  <img
                    className="position-absolute w-100 h-100 img-service"
                    src={service1}
                  />
                </div>
                <h4 className="mb-3">Pembuatan Website</h4>
                <p className="m-0"># Desain Responsif</p>
                <p className="m-0"># Website Yang Cepat</p>
                <p className="m-0"># SEO Friendly Website</p>
                <p className="m-0"># Pengaturan yang Mudah Dengan CMS</p>
                <a className="btn btn-lg btn-primary rounded" href="">
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon">
                  <img
                    className="position-absolute w-100 h-100 img-service"
                    src={service2}
                  />
                </div>
                <h4 className="mb-3">Pembuatan Aplikasi Mobile</h4>
                <p className="m-0"># IOS & Android</p>
                <p className="m-0"># UI/UX Ramah Pengguna</p>
                <a className="btn btn-lg btn-primary rounded" href="">
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon">
                  <img
                    className="position-absolute w-100 h-100 img-service"
                    src={service3}
                  />
                </div>
                <h4 className="mb-3">Pengembangan Sistem</h4>
                <p className="m-0"># Sistem yang Dibuat Khusus</p>
                <p className="m-0"># Integrasi Sistem Pihak Ketiga</p>
                <a className="btn btn-lg btn-primary rounded" href="">
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon">
                  <img
                    className="position-absolute w-100 h-100 img-service"
                    src={service4}
                  />
                </div>
                <h4 className="mb-3">Desain Grafis</h4>
                <p className="m-0"># Identitas Merek</p>
                <p className="m-0"># Desain Media Cetak</p>
                <a className="btn btn-lg btn-primary rounded" href="">
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon">
                  <img
                    className="position-absolute w-100 h-100 img-service"
                    src={service5}
                  />
                </div>
                <h4 className="mb-3">IT Support</h4>
                <p className="m-0">
                  # Pengadaan - pemeliharaan jaringan dan perangkat pendukung
                  lainnya
                </p>
                <a className="btn btn-lg btn-primary rounded" href="">
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow zoomIn service-contact"
              data-wow-delay="0.9s"
            >
              <div className="position-relative rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                <h3 className="text-white mb-3">
                  Hubungi Kami Untuk Layanan Lainnya
                </h3>
                <h2 className="text-white mb-0">+6285201202582</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}

      {/* Pricing Plan Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto">
            <h5 className="fw-bold text-primary text-uppercase">Paket Harga</h5>
            <h5 className="mb-0">
              Kami Menawarkan Harga Kompetitif untuk Anda
            </h5>
          </div>
          <div className="row g-0">
            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
              <div className="bg-light rounded">
                <div className="border-bottom py-4 px-5 mb-4">
                  <h4 className="text-primary mb-1 text-uppercase text-center">
                    Landing Pages
                  </h4>
                </div>
                <div className="p-5 pt-0">
                  <h6 className="display-6 mb-3">
                    <p className="price">Mulai :</p>
                    Rp.300.000
                  </h6>
                  <div className="d-flex justify-content-between mb-3">
                    <span>Hosting + Domain</span>
                    <i className="fa fa-check text-primary pt-1"></i>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <span>Email Account</span>
                    <i className="fa fa-check text-primary pt-1"></i>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <span>Template</span>
                    <i className="fa fa-times text-danger pt-1"></i>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Ongoing Support</span>
                    <i className="fa fa-times text-danger pt-1"></i>
                  </div>
                  <div className="d-flex justify-content-center">
                    <a href="" className="btn btn-primary py-2 px-4 mt-4">
                      Pesan Sekarang
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
              <div className="bg-white rounded shadow position-relative">
                <div className="border-bottom py-4 px-5 mb-4">
                  <h4 className="text-primary mb-1 text-uppercase text-center">
                    Wordpress
                  </h4>
                </div>
                <div className="p-5 pt-0">
                  <h6 className="display-6 mb-3">
                    <p className="price">Mulai :</p>
                    Rp.500.000
                  </h6>
                  <div className="d-flex justify-content-between mb-3">
                    <span>Hosting + Domain</span>
                    <i className="fa fa-check text-primary pt-1"></i>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <span>Email Account</span>
                    <i className="fa fa-check text-primary pt-1"></i>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <span>Template</span>
                    <i className="fa fa-check text-primary pt-1"></i>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Ongoing Support</span>
                    <i className="fa fa-times text-danger pt-1"></i>
                  </div>
                  <div className="d-flex justify-content-center">
                    <a href="" className="btn btn-primary py-2 px-4 mt-4">
                      Pesan Sekarang
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
              <div className="bg-light rounded">
                <div className="border-bottom py-4 px-5 mb-4">
                  <h4 className="text-success mb-1 text-uppercase text-center">
                    Bisnis
                  </h4>
                </div>
                <div className="p-5 pt-0">
                  <h6 className="display-6 mb-3">
                    <p className="price">Cek Harga :</p>
                    Hubungi Kami
                  </h6>
                  <div className="d-flex justify-content-between mb-3">
                    <span>Hosting + Domain</span>
                    <i className="fa fa-check text-primary pt-1"></i>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <span>SSL</span>
                    <i className="fa fa-check text-primary pt-1"></i>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <span>Responsive Layout</span>
                    <i className="fa fa-check text-primary pt-1"></i>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Ongoing Support</span>
                    <i className="fa fa-check text-primary pt-1"></i>
                  </div>
                  <div className="d-flex justify-content-center">
                    <a href="" className="btn btn-primary py-2 px-4 mt-4">
                      Pesan Sekarang
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pricing Plan End */}

      {/* Portofolio Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-4 mx-auto">
            <h5 className="fw-bold text-primary text-uppercase">
              Pekerjaan Kami
            </h5>
          </div>
          <div
            className="owl-carousel testimonial-carousel wow fadeInUp"
            data-wow-delay="0.6s"
          >
            <div className="team-item bg-light rounded overflow-hidden">
              <div className="team-img position-relative overflow-hidden">
                <img className="img-fluid w-100" src={project} alt="" />
                <a
                  className="position-absolute bottom-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                  href=""
                >
                  SALEHMART
                  <p>
                    <small>Minimarket Salehmart Malang</small>
                  </p>
                </a>
              </div>
            </div>
            <div className="team-item bg-light rounded overflow-hidden">
              <div className="team-img position-relative overflow-hidden">
                <img className="img-fluid w-100" src={project} alt="" />
                <a
                  className="position-absolute bottom-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                  href=""
                >
                  SIBANDID
                  <p>
                    <small>Sistem Informasi Belanja Daerah</small>
                  </p>
                </a>
              </div>
            </div>
            <div className="team-item bg-light rounded overflow-hidden">
              <div className="team-img position-relative overflow-hidden">
                <img className="img-fluid w-100" src={project} alt="" />
                <a
                  className="position-absolute bottom-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                  href=""
                >
                  Website Sekolah
                  <p>
                    <small>SMK Miftahul Ulum Boarding School Demak</small>
                  </p>
                </a>
              </div>
            </div>
            <div className="team-item bg-light rounded overflow-hidden">
              <div className="team-img position-relative overflow-hidden">
                <img className="img-fluid w-100" src={project} alt="" />
                <a
                  className="position-absolute bottom-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                  href=""
                >
                  Web App Keungan Sekolah
                  <p>
                    <small>SMK Miftahul Ulum Boarding School Demak</small>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}

      {/* Blog Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto">
            <h5 className="fw-bold text-primary text-uppercase">
              Blog Terbaru
            </h5>
          </div>
          <div className="row g-5">
            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
              <div className="blog-item bg-light rounded overflow-hidden">
                <div className="blog-img position-relative overflow-hidden">
                  <img className="img-fluid" src={blog1} alt="" />
                  <a
                    className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                    href=""
                  >
                    Teknologi
                  </a>
                </div>
                <div className="p-4">
                  <div className="d-flex mb-3">
                    <small className="me-3">
                      <i className="far fa-user text-primary me-2"></i>Admin
                    </small>
                    <small>
                      <i className="far fa-calendar-alt text-primary me-2"></i>
                      01 Mei 2023
                    </small>
                  </div>
                  <h5 className="mb-3">
                    Kenali apa itu VPN, 3 Fungsi Utama, dan Bagaimana Cara
                    Kerjanya!
                  </h5>
                  <p>
                    VPN adalah singkatan dari Virtual Private Network, merupakan
                    layanan koneksi terenkripsi yang dapat digunakan user untuk
                    mengakses sebuah situs secara pribadi menggunakan server
                    jaringan lain ...
                  </p>
                  <a className="" href="">
                    Selengkapnya <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
              <div className="blog-item bg-light rounded overflow-hidden">
                <div className="blog-img position-relative overflow-hidden">
                  <img className="img-fluid" src={blog2} alt="" />
                  <a
                    className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                    href=""
                  >
                    Informasi
                  </a>
                </div>
                <div className="p-4">
                  <div className="d-flex mb-3">
                    <small className="me-3">
                      <i className="far fa-user text-primary me-2"></i>Ihwan
                    </small>
                    <small>
                      <i className="far fa-calendar-alt text-primary me-2"></i>
                      27 Mei 2023
                    </small>
                  </div>
                  <h5 className="mb-3">
                    Digital Marketing : Pengertian, Tugas, Skills, & Gaji
                  </h5>
                  <p>
                    Ketika anda sedang melihat video youtube seringkali terdapat
                    iklan yang harus anda lihat sebelum anda melanjutkan video
                    yang ingin anda tonton di youtube. Iklan yang sering anda
                    lihat dalam youtube, blog dan facebook merupakan salah satu
                    ...
                  </p>
                  <a className="" href="">
                    Selengkapnya <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
              <div className="blog-item bg-light rounded overflow-hidden">
                <div className="blog-img position-relative overflow-hidden">
                  <img className="img-fluid" src={blog3} alt="" />
                  <a
                    className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                    href=""
                  >
                    Web Design
                  </a>
                </div>
                <div className="p-4">
                  <div className="d-flex mb-3">
                    <small className="me-3">
                      <i className="far fa-user text-primary me-2"></i>Ihwan
                    </small>
                    <small>
                      <i className="far fa-calendar-alt text-primary me-2"></i>
                      29 Mei 2023
                    </small>
                  </div>
                  <h5 className="mb-3">
                    Manfaat Website Sebagai Media Marketing bagi Pelaku Bisnis
                    dan Usaha
                  </h5>
                  <p>
                    Media marketing merupakan teknik pemasaran yang saat ini
                    sering digunakan dalam mempromosikan maupun memberitahukan
                    produk dan layanan bisnis kepada masyarakat luas.
                    Menggunakan berbagai media dan ...
                  </p>
                  <a className="" href="">
                    Selengkapnya <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog End */}

      {/* Vendor Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5 mb-5">
          <div className="bg-white">
            <div className="owl-carousel vendor-carousel">
              <img src={vendor1} alt="" />
              <img src={vendor2} alt="" />
              <img src={vendor3} alt="" />
              <img src={vendor4} alt="" />
              <img src={vendor5} alt="" />
              <img src={vendor6} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Vendor End */}
    </div>
  );
}

export default Home;
