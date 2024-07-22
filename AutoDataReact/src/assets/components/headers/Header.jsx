// HeaderWeb.jsx
import { Link } from 'react-router-dom';
import { useContext } from "react";
import AuthContext from '../context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../css/style.css';

export default function HeaderWeb(props) {
    const { auth, logoutHandler } = useContext(AuthContext);

    return (
        <header id="header" className="header fixed-top d-flex align-items-center">
            <div className="d-flex align-items-center justify-content-between">
                <Link to="/" className="logo d-flex align-items-center">
                    {/* <img src="assets/img/logo.png" alt=""> */}
                    <span className="d-none d-lg-block">Inspire Car</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
          

            <nav className="header-nav ms-auto">
                <ul className="d-flex  align-items-center">
                    <li className="nav-item m-2">
                        <Link className="nav-link m-2" to="/">Home</Link>
                    </li>
                    <li className="nav-item m-2">
                        <Link className="nav-link m-2" to="/vehicles">Vehicles</Link>
                    </li>
                    <li className="nav-item m-2">
                        <Link className="nav-link m-2" to="/contacts">Contacts</Link>
                    </li>
                    <li className="nav-item m-2">
                        <Link className="nav-link m-2" to="/about">About</Link>
                    </li>
                    <li className="nav-item m-2">
                        <Link className="nav-link m-2" to="/faq">FAQ</Link>
                    </li>
                    {auth.accessToken ? (
                        <>
                           <li className="nav-item m-2">
                        <Link className="nav-link m-2" to="/manage">Manage</Link>
                    </li>
                            <li className="nav-item dropdown pe-3">
                                <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                                    {/* <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle"> */}
                                    <span className="d-none d-md-block dropdown-toggle ps-2">{auth.username}</span>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                    <li className="dropdown-header">
                                        <h6>{auth.username}</h6>
                                        <span>{auth.role === 1 ? 'Admin' : 'User'}</span>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <Link className="dropdown-item d-flex align-items-center" to="/profile">
                                            <i className="bi bi-person"></i>
                                            <span>My Profile</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item d-flex align-items-center" href="#" onClick={logoutHandler}>
                                            <i className="bi bi-box-arrow-right"></i>
                                            <span>Sign Out</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="nav-item m-2">
                                <Link className="nav-link m-2" to="/login">Login</Link>
                            </li>
                            <li className="nav-item m-2">
                                <Link className="nav-link m-2" to="/register">Register</Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
}
