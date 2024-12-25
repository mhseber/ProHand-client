import {
    createBrowserRouter,

} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layout/AuthLayout";
import AllService from "../Pages/DashboardRouter/AllService";
import SingleService from "../Pages/DashboardRouter/SingleService";
import AddAService from "../Pages/DashboardRouter/AddAService";
import ManageService from "../Pages/DashboardRouter/ManageService";
import BookedService from "../Pages/DashboardRouter/BookedService";
import ServiceToDo from "../Pages/DashboardRouter/ServiceToDo";
import ViewDetails from "../Pages/ViewDetails";

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
            },
            {
                path: 'allService',
                element: <AllService></AllService>
            },
            {
                path: 'singleService',
                element: <SingleService></SingleService>
            },
            {
                path: 'addService',
                element: <AddAService></AddAService>
            },
            {
                path: 'ManageService',
                element: <ManageService></ManageService>
            },
            {
                path: 'BookedService',
                element: <BookedService></BookedService>
            },
            {
                path: 'ServiceToDo',
                element: <ServiceToDo></ServiceToDo>
            },
            {
                path: 'viewDetails',
                element: <ViewDetails></ViewDetails>
            }
        ]
    },
]);

export default router;