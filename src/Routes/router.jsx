import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Root from "../Layout/Root";
import Home from "../Pages/HomePage/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AboutUsPage from "../Pages/AboutUsPage/AboutUsPage";
import AddFood from "../Pages/AddFood/AddFood";
import UpdateFood from "../Components/UpdateFood/UpdateFood";
import FeedBack from "../Pages/FeedBack/FeedBack";
import OurServices from "../Pages/OurServices/OurServices";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import ContactUsPage from "../Pages/ContactUsPage/ContactUsPage";
import Cart from "../Components/Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "register",
        element: <RegisterPage></RegisterPage>,
      },
      {
        path: "login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "contact-us",
        element: <ContactUsPage></ContactUsPage>,
      },
      {
        path: "about-us",
        element: <AboutUsPage></AboutUsPage>,
      },
      {
        path: "addFood",
        element: <AddFood></AddFood>,
      },
      {
        path: "updateFood",
        element: <UpdateFood></UpdateFood>,
      },
      {
        path: "feedback",
        element: <FeedBack></FeedBack>,
      },
      {
        path: "services",
        element: <OurServices></OurServices>,
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },
    ],
  },
]);

export default router;
