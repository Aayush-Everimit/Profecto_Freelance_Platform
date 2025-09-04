import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const checkAuthStatus = async () => {
        try {
            const response = await fetch('http://localhost:8081/api/users/me', {
                credentials: 'include',
            });

            if (response.ok) {
                const userData = await response.json();
                setUser(userData);
            } else if (response.status === 401) {
                // User is not authenticated
                setUser(null);
            } else {
                console.error('Unexpected auth status:', response.status);
                setUser(null);
            }
        } catch (error) {
            console.error("Could not fetch auth status:", error);
            setUser(null);
        }
    };

    const login = async (username, password) => {
        try {
            const params = new URLSearchParams();
            params.append('username', username);
            params.append('password', password);

            const response = await fetch('http://localhost:8081/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                credentials: 'include',
                body: params.toString(),
            });

            if (response.ok) {
                const userResponse = await fetch('http://localhost:8081/api/users/me', {
                    credentials: 'include',
                });
                if (userResponse.ok) {
                    const userData = await userResponse.json();
                    setUser(userData);
                    return true;
                }
            }
            return false;
        } catch (error) {
            console.error("Login failed:", error);
            return false;
        }
    };

    const logout = async () => {
        // You can add a backend logout call here if needed
        setUser(null);
    };

    const value = { user, isAuthenticated: !!user, login, logout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
