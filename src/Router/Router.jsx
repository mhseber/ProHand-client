import {
    createBrowserRouter,

} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layout/AuthLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h2>Route not Found</h2>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'services',
                element: <Services></Services>
            },
            {
                path: 'dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: 'auth',
                element: <AuthLayout></AuthLayout>,
                children: [
                    {
                        path: '/auth/login',
                        element: <Login></Login>
                    },
                    {
                        path: '/auth/register',
                        element: <Register></Register>
                    }
                ]
            }
        ]
    },
]);

export default router;