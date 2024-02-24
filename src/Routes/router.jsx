import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Root from "../Layout/Root";
import Home from "../Pages/HomePage/Home";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import ContactUsPage from "../Pages/ContactUsPage/ContactUsPage";
import CartPage from "../Pages/CartPage/CartPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AboutUsPage from "../Pages/AboutUsPage/AboutUsPage";
import UserDashboard from "../Layout/Dashboard/Dashboard";
import AddFood from "../Pages/AddFood/AddFood";

import UpdateFood from "../Components/UpdateFood/UpdateFood";
import FeedBack from "../Pages/FeedBack/FeedBack";
import OurServices from "../Pages/OurServices/OurServices";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: 'register',
                element: <RegisterPage></RegisterPage>
            },
            {
                path: 'login',
                element: <LoginPage></LoginPage>
            },
            {
                path: 'contact-us',
                element: <ContactUsPage></ContactUsPage>
            },
            {
                path: 'about-us',
                element: <AboutUsPage></AboutUsPage>
            },
            {
                path: 'addFood',
                element: <AddFood></AddFood>
            },
            {
                path: 'updateFood',
                element: <UpdateFood></UpdateFood>
            },
            {
                path: 'feedback',
                element: <FeedBack></FeedBack>
            },
            {
                path: 'services',
                element: <OurServices></OurServices>
            },
            {
                path: 'cart',
                element: (
                    <PrivateRoute>
                        <CartPage></CartPage>
                    </PrivateRoute>
                ),
            },

        ]
    },
    {
        path: '/dashboard',
        element: <UserDashboard></UserDashboard>,
        children: [
            {
                path:'/dashboard',
                element:<Home></Home>
            }
        ]
    }
])

export default router