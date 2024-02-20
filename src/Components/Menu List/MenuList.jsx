import { FaChevronDown } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import Cards from "../Cards/Cards";

import Tilt from 'react-parallax-tilt';




const MenuList = () => {
    return (
    
        <>
            <div className="font-primary  space-y-16 md:space-y-20">
                <div className="flex justify-between mx-4">
                    <div className="dropdown">
                        <button tabIndex={0} role="button" className="btn flex items-center gap-3">
                            ALL CATEGORY
                            <FaChevronDown></FaChevronDown>
                        </button>
                        <div tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-md w-max">
                            <button className="text-left py-2 px-6 rounded hover:bg-slate-200 font-semibold">BREAKFAST ITEMS</button>
                            <button className="text-left py-2 px-6 rounded hover:bg-slate-200 font-semibold">LUNCH ITEMS</button>
                            <button className="text-left py-2 px-6 rounded hover:bg-slate-200 font-semibold">DINNER ITEMS</button>
                            <button className="text-left py-2 px-6 rounded hover:bg-slate-200 font-semibold">SNACK ITEMS</button>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button tabIndex={0} role="button" className="btn flex items-center gap-3">
                            MEAL TYPES
                            <FaChevronDown></FaChevronDown>
                        </button>
                        <div tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-md w-max right-0">
                            <button className="text-left py-2 px-6 rounded hover:bg-slate-200 font-semibold">BREAKFAST ITEMS</button>
                            <button className="text-left py-2 px-6 rounded hover:bg-slate-200 font-semibold">LUNCH ITEMS</button>
                            <button className="text-left py-2 px-6 rounded hover:bg-slate-200 font-semibold">DINNER ITEMS</button>
                            <button className="text-left py-2 px-6 rounded hover:bg-slate-200 font-semibold">SNACK ITEMS</button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 place-items-center">
                    <Tilt>
                        <Cards></Cards>
                    </Tilt>
                    <Cards></Cards>
                    <Cards></Cards>
                    <Cards></Cards>
                    <Cards></Cards>
                    <Cards></Cards>
                    <Cards></Cards>
                    <Cards></Cards>
                    <Cards></Cards>
                </div>
            </div>
        </>
    );
};

export default MenuList;