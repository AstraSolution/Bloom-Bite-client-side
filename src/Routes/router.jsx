import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/HomePage/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AboutUsPage from "../Pages/AboutUsPage/AboutUsPage";
import UserDashboard from "../Layout/Dashboard/Dashboard";
import AddFood from "../Pages/AddFood/AddFood";


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