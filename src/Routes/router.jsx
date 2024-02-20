import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/HomePage/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AboutUsPage from "../Pages/AboutUsPage/AboutUsPage";
import UserDashboard from "../Layout/Dashboard/Dashboard";
import AddFood from "../Pages/AddFood/AddFood";
import ComingSoonPage from "../Pages/Coming Soon Page/ComingSoonPage";
import Reserve from "../Pages/Reserve/Reserve";
import ShoppingCart from "../Pages/Shopping Cart/ShoppingCart";
import Menu from "../Pages/Menu/Menu";

import UpdateFood from "../Components/UpdateFood/UpdateFood";
import FeedBack from "../Pages/FeedBack/FeedBack";


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
                path: 'reserve',
                element: <Reserve></Reserve>
                
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
                path: 'cart',
                element: <ShoppingCart></ShoppingCart>
            },
            {
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