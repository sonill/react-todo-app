import React from 'react';

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark mb-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            To Do List
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <form role="search" className="container mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="text"
              className="form-control"
              placeholder="Search Keywords"
            />
          </div>
          <div className="col">
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
