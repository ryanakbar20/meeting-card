import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a class="navbar-brand" href="#">
            Nashta Global
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active ml-5">
                <Link to="/">
                  <a class="nav-link text-white" href="#">
                    HOME
                  </a>
                </Link>
              </li>
              <li class="nav-item active ml-5">
                <Link to="/card">
                  <a class="nav-link text-white" href="#">
                    CARD
                  </a>
                </Link>
              </li>
              <li class="nav-item active ml-5">
                <Link to="/list">
                  <a class="nav-link text-white" href="#">
                    LIST
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
