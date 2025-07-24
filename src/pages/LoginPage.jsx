import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from '../Components/RegistrationPage.module.css';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import AuthLayout from '../Components/AuthLayout'; // Import the new layout
import BrandName from '../assets/logo1.svg'; // <-- ADDED: Import your logo

export default function LoginPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // ... (your existing fetch logic remains the same)
        try {
            const response = await fetch('http://localhost:8081/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert('Login successful!');
                navigate('/');
            } else {
                alert('Login failed. Please check your username and password.');
            }
        } catch (error) {
            console.error('An error occurred during login:', error);
            alert('An error occurred. Please ensure the backend is running.');
        }
    };

    return (
        // Use the AuthLayout as the main wrapper
        <AuthLayout>
            <form
                onSubmit={handleSubmit}
                className="card p-4 shadow text-white"
                style={{
                    backgroundColor: "rgba(24, 24, 27, 0.5)", // Semi-transparent card
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    width: "400px",
                    borderRadius: "1rem",
                    zIndex: 10 // Ensure form is on top of the background
                }}
            >
                {/* --- ADDED: Your Logo --- */}
                <img
                    src={BrandName}
                    alt="Profecto Logo"
                    className="d-block mx-auto mb-4"
                    style={{ width: "120px" }}
                />

                <div className="text-secondary small text-uppercase mb-1">
                    Welcome Back!
                </div>
                <h3 className="fw-bold mb-1">
                    Log-In<span className="text-primary">.</span>
                </h3>
                <p className="text-white-50 small">
                    Don't have an account? <Link to="/register" className="text-info text-decoration-none">Register</Link>
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
                </div>

                {/* Buttons */}
                <div className="d-flex justify-content-end mt-3">
                    <button type="submit" className="btn btn-primary px-4 rounded-pill">Log In</button>
                </div>
            </form>
        </AuthLayout>
    );
}
