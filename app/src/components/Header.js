import React, { useEffect, useState } from "react";
import axios from "axios";
import TopBar from "./TopBar";
import Navbar from "./Navbar";

function Header() {
  const [topbars, setTopbars] = useState(null);
  const [navbars, setNavbars] = useState(null);

  useEffect(function () {
    axios.get("http://localhost:8000/api/top-bars").then(function (response) {
      const topbar = response.data.data;
      setTopbars(topbar);
    });

    axios.get("http://localhost:8000/api/navbars").then(function (response) {
      const navbar = response.data.data;
      setNavbars(navbar);
    });
  }, []);
  return (
    <div>
      {/* Spinner Start */}
      {/* <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div class="spinner"></div>
      </div> */}
      {/* Spinner End */}

      {/* topbar */}
      <div className="container-fluid bg-dark px-5 d-none d-lg-block">
        {topbars &&
          topbars.map((topbar) => <TopBar topbar={topbar} key={topbar.id} />)}
      </div>

      {/* Navbar & Carousel Start */}
      <div className="container-fluid position-relative p-0">
        {navbars &&
          navbars.map((navbar) => <Navbar navbar={navbar} key={navbar.id} />)}
      </div>
      {/* Navbar & Carousel End */}

      {/* Full Screen Search Start */}
      <div className="modal fade" id="searchModal" tabIndex="-1">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content content-search">
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn bg-white btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex align-items-center justify-content-center">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control bg-transparent border-primary p-3"
                  placeholder="Type search keyword"
                />
                <button className="btn btn-primary px-4">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Full Screen Search End */}
    </div>
  );
}

export default Header;
