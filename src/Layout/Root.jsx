import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";


const Root = () => {
    return (
        <div>
            <div className="fixed left-0 right-0 top-0 bottom-0 w-full z-50 container mx-auto">
                <Navbar></Navbar>
            </div>
            <div className="mt-[87px] container mx-auto">
            <ScrollToTop />
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;