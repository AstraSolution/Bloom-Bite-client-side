import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/HomePage/Home";
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
                path: 'about-us',
                element: <AboutUsPage></AboutUsPage>
            },
            {
                path: 'addFood',
                element: <AddFood></AddFood>
            },
            {
                path: 'cart',
                element: <ShoppingCart></ShoppingCart>
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

                path: 'menu',
                element: <Menu></Menu>

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
    },
    {
        path: '/coming-soon',
        element: <ComingSoonPage></ComingSoonPage>
    }
])

export default router