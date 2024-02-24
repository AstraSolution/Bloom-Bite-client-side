import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";


const Root = () => {
    return (
        <div>
            <div className="fixed w-full top-0 z-50">
                <Navbar></Navbar>
            </div>
            <div className="mt-[87px] lg:f mx-auto relative space-y-16 md:space-y-20">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;