import React from "react";
import logo from "../../../../Images/logo2.png";
import "./Header.css";
const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={logo} height="50" width="100%" />
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
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Food
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link"
                                    href="#"
                                >
                                    Chefs
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link disabled"
                                    href="#"
                                    aria-disabled="true"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <div className="d-flex flex-lg-row flex-column-reverse align-items-center">
                            <a href="#" className="text-dark me-lg-3"><i className="bi bi-cart"></i></a>
                            <button className="btn me-lg-2 fw-bold">Login</button>
                            <button className="btn btn-danger fw-bold red">Sign up</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
