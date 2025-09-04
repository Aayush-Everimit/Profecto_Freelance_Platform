import 'bootstrap-icons/font/bootstrap-icons.css';
import BackImage from '../assets/Register_Page.png';
import styles from '../Components/RegistrationPage.module.css';
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';

export default function RegistrationPage() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8081/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('User registered successfully!');
                navigate('/login');
            } else {
                const errorText = await response.text();
                alert(`Registration failed: ${errorText}`);
            }
        } catch (error) {
            console.error('An error occurred during registration:', error);
            alert('An error occurred. Please check the console and ensure the backend is running.');
        }
    };

    return (
        <div style={{ position: 'relative', minHeight: '100vh', width: '100vw' }}>
            {/* Background Layer */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${BackImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center top',
                    backgroundRepeat: 'no-repeat',
                    zIndex: 1,
                }}
            />

            {/* Blur Overlay with Card aligned left */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 2,
                    backdropFilter: "blur(10px)",
                    backgroundColor: "rgba(30, 41, 59, 0.6)",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <div className="ps-5">
                    <form
                        onSubmit={handleSubmit}
                        className="card p-4 shadow text-white"
                        style={{
                            backgroundColor: "#1e293b",
                            width: "400px",
                            borderRadius: "3rem",
                            opacity: '0.85',
                            color: "white",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                        }}
                    >
                        <div className="text-secondary small text-uppercase mb-1">
                            Start for Free !!
                        </div>

                        <h3 className="fw-bold mb-1">
                            Create new account<span className="text-primary">.</span>
                        </h3>

                        <p className="text-white-50 small">
                            Already have an account? <Link to="/login" className="text-info text-decoration-none">Sign in</Link>
                        </p>

                        {/* Username */}
                        <div className="mb-3 position-relative">
                            <input
                                type="text"
                                className={`form-control bg-dark border-0 text-white ${styles.inputDark}`}
                                placeholder="Username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                            <i className="bi bi-person position-absolute top-50 end-0 translate-middle-y me-3 text-muted"></i>
                        </div>

                        {/* Email */}
                        <div className="mb-3 position-relative">
                            <input
                                type="email"
                                className={`form-control bg-dark border-0 text-white ${styles.inputDark}`}
                                placeholder="name@example.com"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <i className="bi bi-envelope position-absolute top-50 end-0 translate-middle-y me-3 text-muted"></i>
                        </div>

                        {/* Password */}
                        <div className="mb-3 position-relative">
                            <input
                                type="password"
                                className={`form-control bg-dark border-0 text-white ${styles.inputDark}`}
                                placeholder="Password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <i className="bi bi-lock-fill position-absolute top-50 end-0 translate-middle-y me-3 text-muted"></i>
                            <div className="form-text text-white-50">Must be 8–20 characters long.</div>
                        </div>

                        {/* Submit */}
                        <div className="d-flex justify-content-end mt-3">
                            <button type="submit" className="btn btn-primary px-4 rounded-pill w-100">Create account</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
