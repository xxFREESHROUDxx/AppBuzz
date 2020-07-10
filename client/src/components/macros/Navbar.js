import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      // <!-- header starts -->
      <div className="topBar">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <ul>
                <li>
                  <Link className="brand" to="/">
                    AppBuzz
                  </Link>
                </li>
                <li className="text-right">
                  <div className="dropdown">
                    <button
                      className="btn dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="far fa-user"></i> Iser
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <Link className="dropdown-item" to="">
                        Profile
                      </Link>
                      <Link className="dropdown-item" to="">
                        My account
                      </Link>
                      <Link
                        className="dropdown-item"
                        onClick={() => {
                          localStorage.clear();
                          window.location.reload();
                        }}
                        to="#"
                      >
                        Logout
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      // <!-- header ends -->
    );
  }
}
