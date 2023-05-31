import React from "react";

export default function TopBar({ topbar }) {
  return (
    <div className="row gx-0">
      <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
        <div className="d-inline-flex align-items-center topbar">
          <small className="me-3 text-light">
            <i className="fa fa-map-marker-alt me-2 text-danger"></i>
            <a className="" href="/#" key={topbar.alamat}>
              {topbar.alamat}
            </a>
          </small>
          <small className="me-3 text-light">
            <i className="fa fa-phone-alt me-2 text-success"></i>
            <a className="" href="/#" key={topbar.no_telp}>
              {topbar.no_telp}
            </a>
          </small>
          <small className="text-light">
            <i className="fa fa-envelope-open me-2 text-warning"></i>
            <a
              className=""
              href={topbar.email}
              target="_blank"
              key={topbar.email}
            >
              {topbar.email}
            </a>
          </small>
        </div>
      </div>
      <div className="col-lg-4 text-center text-lg-end">
        <div className="d-inline-flex align-items-center topbar">
          <a
            className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
            href={topbar.github}
            target="_blank"
            key={topbar.github}
          >
            <i className="fab fa-github fw-normal"></i>
          </a>
          <a
            className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
            href={topbar.facebook}
            target="_blank"
            key={topbar.facebook}
          >
            <i className="fab fa-facebook-f fw-normal text-info"></i>
          </a>
          <a
            className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
            href={topbar.instagram}
            target="_blank"
            key={topbar.instagram}
          >
            <i className="fab fa-instagram fw-normal text-warning"></i>
          </a>
          <a
            className="btn btn-sm btn-outline-light btn-sm-square rounded-circle"
            href={topbar.youtube}
            target="_blank"
            key={topbar.youtube}
          >
            <i className="fab fa-youtube fw-normal text-danger"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
