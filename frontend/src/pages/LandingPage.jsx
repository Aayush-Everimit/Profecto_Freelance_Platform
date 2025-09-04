import React, { useContext } from 'react'; // 1. Import useContext
import styles from '../Components/LandingPage.module.css';
import { Link } from 'react-router-dom';
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
import { AuthContext } from '../context/AuthContext.jsx'; // 2. Import your AuthContext

export default function LandingPage() {
    // 3. Get the authentication state from the context
    const { isAuthenticated, user, logout } = useContext(AuthContext);

    return (
        <>
            <div className={styles.landingContainer}>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img src={BrandName} alt="Profecto" width="80" height="24" />
                        </Link>
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
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/jobList">All Jobs</Link>
                                </li>

                                {isAuthenticated && (
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/postjobs">Post Job</Link>
                                    </li>
                                )}
                            </ul>

                            {/* --- 4. DYNAMIC AUTH SECTION --- */}
                            <div className="d-flex align-items-center">
                                {isAuthenticated ? (
                                    // If user IS logged in
                                    <>
                                        <span className="navbar-text me-3">
                                            Welcome, {user ? user.username : ''}!
                                        </span>
                                        <button onClick={logout} className="btn btn-outline-danger">Logout</button>
                                    </>
                                ) : (
                                    // User not loggedin
                                    <>
                                        <Link to="/login" className="btn btn-outline-primary me-2">Login</Link>
                                        <Link to="/register" className="btn btn-primary">Register</Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>

                {/* ... (The rest of your landing page content remains exactly the same) ... */}
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
                    <h2>Highlighted Categories</h2>
                </div>

                <div className="d-flex flex-row gap-3 overflow-auto">
                    <Cards Title="Web Development" Detail="Build websites and web apps." imageURl={WebdevImage} />
                    <Cards Title="Graphic Design" Detail="Design logos, posters and more." imageURl={GraphicImage} />
                    <Cards Title="Content Writing" Detail="Write blogs, articles and scripts." imageURl={Contentwritingimage}/>
                    <Cards Title="Ai-Ml" Detail="Build stunning ai bots and ML algorithms." imageURl={Aimlimage} />
                </div>

                <div className="mt-5 mb-3">
                    <h2>Testimonials</h2>
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
