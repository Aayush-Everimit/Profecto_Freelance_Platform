import React from 'react';
import styles from '../Components/LandingPage.module.css';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Cards from "./Cards.jsx";
import BrandName from '../assets/logo1.svg';
import WebdevImage from '../assets/Web_dev_image.png';
import GraphicImage from '../assets/graphicdesign_image.png';
import Aimlimage from '../assets/Aiml_image.png';
import Contentwritingimage from '../assets/Contentwriting_image.png';
import boy1 from '../assets/boy1.png';
import boy2 from '../assets/boy2.png';
import boy3 from '../assets/boy3.png';
import girl3 from '../assets/girl3.png';
import LoginPage from '../pages/LoginPage.jsx';
import RegisterPage from '../pages/RegistrationPage.jsx';

export default function LandingPage() {
    return (
        <>
            <div className={styles.landingContainer}>

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={BrandName} alt="Profecto" width="80" height="24" />
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
                                    <a className="nav-link active" aria-current="page" href="./LandingPage.jsx">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Job Listing</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Profile
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to="/login">Login</Link></li>
                                        <li><Link className="dropdown-item" to="/register">Register</Link></li>
                                        <li><Link className="dropdown-item" to="/postjobs">PostJobs</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" aria-disabled="true">Application History</a>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>


                <div className="bg-dark p-2 rounded mt-2">
                    <div className="input-group px-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search for jobs..."
                            aria-label="Search for jobs"
                        />
                    </div>
                </div>

                <div className="mt-5 mb-3">
                    <h2>Highlighted Categories <span className="badge text-bg-secondary"></span></h2>
                </div>

                <div className="d-flex flex-row gap-3 overflow-auto">
                    <Cards Title="Web Development" Detail="Build websites and web apps." imageURl={WebdevImage} />
                    <Cards Title="Graphic Design" Detail="Design logos, posters and more." imageURl={GraphicImage} />
                    <Cards Title="Content Writing" Detail="Write blogs, articles and scripts." imageURl={Contentwritingimage}/>
                    <Cards Title="Ai-Ml" Detail="Build stunning ai bots and ML algorithms." imageURl={Aimlimage} />
                </div>


                <div className="mt-5 mb-3">
                    <h2>Testimonials <span className="badge text-bg-secondary"></span></h2>
                </div>

                <div className="d-flex flex-row gap-3 overflow-auto">
                    <Cards
                        imageURl={boy1}
                        Title="Ananya Sharma"
                        Detail="Profecto helped me land my first freelance project as a designer. Amazing experience!"
                    />
                    <Cards
                        imageURl={boy2}
                        Title="Rohit Mehra"
                        Detail="I found web development gigs easily. Great UI, smooth process!"
                    />
                    <Cards
                        imageURl={boy3}
                        Title="Sneha Iyer"
                        Detail="The platform is clean and professional. Got paid on time too."
                    />
                    <Cards
                        imageURl={girl3}
                        Title="Amit Joshi"
                        Detail="Applying for jobs is super easy now. Thanks to Profecto!"
                    />
                </div>

                <div className="mt-5 mb-3">
                    <footer className="bg-dark text-white mt-5 p-4 text-center">
                        © Profecto. All rights reserved ~Aayush.
                    </footer>
                </div>
            </div>
        </>
    );
}
