// File: src/Components/AuthLayout.jsx
import React from 'react';
import styles from './AuthLayout.module.css';

// It now accepts a 'logo' prop
export default function AuthLayout({ children, logo }) {
    return (
        <div className={styles.authContainer}>
            {/* The background logo is rendered here */}
            {logo && (
                <img
                    src={logo}
                    alt="background logo"
                    className={styles.backgroundLogo}
                />
            )}

            {/* The children (your form) will be rendered on top */}
            {children}
        </div>
    );
}
