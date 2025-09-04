import React, { useState } from 'react';
import './App.css';
import LandingPage from './pages/LandingPage.jsx';
import 'bootstrap-icons/font/bootstrap-icons.css';
import RegistrationPage from './pages/RegistrationPage.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import PostJobsPage from "./pages/PostJobsPage.jsx";
import JobListPage from "./pages/JobListPage.jsx";
import JobDetailPage from "./pages/JobDetailPage.jsx";

function App() {
    const [jobs, setJobs] = useState([]);

    const handleJobPosted = (newJob) => {
        setJobs((prevJobs) => [...prevJobs, newJob]);
    };

    const router = createBrowserRouter([
        {
            path: '/',
            element: <LandingPage />,
        },
        {
            path: '/login',
            element: <LoginPage />
        },
        {
            path: '/register',
            element: <RegistrationPage />
        },
        {
            path: '/postjobs',
            element: <PostJobsPage onJobPosted={handleJobPosted} /> // Pass callback here
        },
        {
            path: '/jobList',
            element: <JobListPage jobs={jobs} /> // Pass jobs state here
        },
        {
            path: '/jobs/:id',
            element: <JobDetailPage />
        }
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
