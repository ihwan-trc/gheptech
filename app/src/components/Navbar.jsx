import React from "react";
import brand from "../assets/img/logo/logo.png";

export default function Navbar({ navbar }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
      <a href="/" className="navbar-brand p-0">
        <h1 className="m-0">
          <img className="m-0" src={brand} alt="gheptech" />
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
      <div
        key={navbar}
        className="collapse navbar-collapse"
        id="navbarCollapse"
      >
        <div className="navbar-nav ms-auto py-0">
          <a href="/" className="nav-item nav-link active" key={navbar.menu1}>
            {navbar.menu1}
          </a>
          <a href="about.html" className="nav-item nav-link" key={navbar.menu2}>
            {navbar.menu2}
          </a>
          <div className="nav-item dropdown">
            <a
              href="/#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              key={navbar.menu3}
            >
              {navbar.menu3}
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
          <a
            href="portofolio.html"
            className="nav-item nav-link"
            key={navbar.menu4}
          >
            {navbar.menu4}
          </a>
          <a href="blog.html" className="nav-item nav-link" key={navbar.menu5}>
            {navbar.menu5}
          </a>
          <a
            href="contact.html"
            className="nav-item nav-link"
            key={navbar.menu6}
          >
            {navbar.menu6}
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
        <a
          href="quote.html"
          className="btn btn-primary py-2 px-4 ms-3"
          key={navbar.menu7}
        >
          {navbar.menu7}
        </a>
      </div>
    </nav>
  );
}
