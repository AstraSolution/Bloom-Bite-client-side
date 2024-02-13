import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";


const Root = () => {
    return (
        <div>
            <div className="fixed left-0 right-0 top-0 bottom-0 w-full lg:container mx-auto">
                <Navbar></Navbar>
            </div>
            <div className="mt-[87px] lg:container mx-auto relative">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;