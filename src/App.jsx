import { useState } from 'react'
import './App.css'
import LandingPage from './pages/LandingPage.jsx'
import 'bootstrap-icons/font/bootstrap-icons.css';
import RegistrationPage from './pages/RegistrationPage.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import PostJobsPage from "./pages/PostJobsPage.jsx";

function App()
{
    const router = createBrowserRouter([
        {
            path: '/',
            element: <LandingPage/>,
        },
        {
            path: '/login',
            element: <LoginPage/>
        },
        {
            path: '/register',
            element: <RegistrationPage/>
        },
        {
            path:'/postjobs',
            element: <PostJobsPage/>
        }
    ])
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
