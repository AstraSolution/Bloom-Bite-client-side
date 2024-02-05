// ------------------------------ //
// --------Imported Items-------- //
// ------------------------------ //


import { Link, NavLink, Outlet } from "react-router-dom";
import { AiOutlineHome } from 'react-icons/ai';
import { GiTatteredBanner } from 'react-icons/gi';
import { PiFlagBanner, PiTestTubeThin } from 'react-icons/pi';
import { RiReservedLine, RiTeamLine, RiMenu4Line } from 'react-icons/ri';
import { MdAlignHorizontalLeft } from 'react-icons/md';
import { BsJournalCheck } from 'react-icons/bs';
import { VscChecklist, VscAccount } from 'react-icons/vsc';
import './Style.css'
import { useState } from "react";




const Dashboard = () => {

    const [isOpen, setIsOpen] = useState(false);




    const toggleSidebar = () => {

        if (!isOpen) {

            console.log('closed');

            setIsOpen(!isOpen)

            document.getElementById('sideNav').classList.add('hidden')

            document.getElementById('DashBody').classList.remove('gap-8')

        } else {

            console.log('opened');

            setIsOpen(!isOpen);

            document.getElementById('sideNav').classList.remove('hidden')

            document.getElementById('DashBody').classList.add('gap-8')
        }
    }




    return (
        <>
            <section>
                <div className="navbar py-3 md:py-9 relative mx-auto bg-blue-400 wave ">
                    <div className="navbar-start gap-3">


                        {/* Button For Close Sidebar in Medium and small device */}
                        <label htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden"><RiMenu4Line /></label>


                        {/* Button For close Sidebar in Large Device */}
                        <button onClick={toggleSidebar} className="btn btn-ghost hidden lg:flex"><RiMenu4Line /></button>

                        <h1 className="text-sm md:text-base lg:text-lg xl:text-xl flex items-center justify-center gap-2 font-bold inter"><img className=" h-8" src="https://i.ibb.co/FXwN0tk/bright-luminous-pink-medical-digital-medical-neon-sign-pharmacy-hospital-store-beautiful-shiny-with.png" alt="" />DIAGNO FAX</h1>
                    </div>
                    <div className="navbar-end">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://i.ibb.co/3TBSmhX/404062834-122138341550026868-4171797228385572915-n.jpg" />
                                </div>
                            </label>
                            <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded w-52">
                                <li className="bg-transparent py-2 md:py-2 md:px-2 font-bold text-xs md:text-sm  rounded"> Astramers </li>
                                <li className="bg-transparent py-2 md:py-2 md:px-2 font-bold text-xs md:text-sm  rounded">
                                    <Link className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li className="bg-transparent py-2 md:py-2 md:px-2 font-bold text-xs md:text-sm btn-ghost rounded"><Link>Logout</Link></li>
                            </ul>
                        </div>
                        <button className="bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD]  py-2 md:py-3 px-3 md:px-6 lg:px-9 text-white font-bold text-xs md:text-sm  rounded">LOGOUT</button>
                    </div>
                </div>
                <div id="DashBody" className="lg:drawer-open lg:flex lg:flex-row-reverse gap-8  mx-auto">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <main id="Content" className=" w-full mx-auto lg:flex-[3] duration-1000 ">

                        {/* Dashboard Content Start From Here */}

                        <Outlet></Outlet>
                    </main>
                    <div id="Drawer" className={`drawer-side rounded-lg ${isOpen ? 'closed' : 'open'}`}>
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

                        {/* Side Navigation's Code Start From here */}

                        <nav id="sideNav" className="  p-4 min-h-full bg-base-200 roboto space-y-8">
                            <div className="text-center space-y-6 mt-6">
                                <div className="w-24 h-24 mx-auto">
                                    <img className="w-full h-full rounded-full" src="https://i.ibb.co/3TBSmhX/404062834-122138341550026868-4171797228385572915-n.jpg" alt="Profile" />
                                </div>
                                <div>
                                    <h1 className="text-xl roboto font-bold">Astramers</h1>
                                </div>
                            </div>


                            {/* Sidebar content here */}

                            <div className="space-y-4">
                                <NavLink className={({ isActive }) => isActive ? `bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD] md:py-3.5 md:px-5 text-white font-bold text-xs md:text-sm  rounded flex items-center gap-3` : `bg-transparent md:py-3.5 md:px-5 font-bold text-xs md:text-sm  rounded flex items-center gap-3`} to="/dashboard/profile" ><VscAccount className="text-xl"></VscAccount> MY PROFILE</NavLink>
                                <NavLink className={({ isActive }) => isActive ? `bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD] md:py-3.5 md:px-5 text-white font-bold text-xs md:text-sm  rounded flex items-center gap-3` : `bg-transparent md:py-3.5 md:px-5 font-bold text-xs md:text-sm  rounded flex items-center gap-3`} to="/dashboard/appointments" ><VscChecklist className="text-xl"></VscChecklist>UPCOMING APPOINTMENTS</NavLink>
                                <NavLink className={({ isActive }) => isActive ? `bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD] md:py-3.5 md:px-5 text-white font-bold text-xs md:text-sm  rounded flex items-center gap-3` : `bg-transparent md:py-3.5 md:px-5 font-bold text-xs md:text-sm  rounded flex items-center gap-3`} to="/dashboard/results" ><BsJournalCheck className="text-xl"></BsJournalCheck>TEST RESULTS</NavLink>
                                <NavLink className={({ isActive }) => isActive ? `bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD] md:py-3.5 md:px-5 text-white font-bold text-xs md:text-sm  rounded flex items-center gap-3` : `bg-transparent md:py-3.5 md:px-5 font-bold text-xs md:text-sm  rounded flex items-center gap-3`} to="/dashboard/all-users" ><RiTeamLine className="text-xl"></RiTeamLine>ALL USERS</NavLink>
                                <NavLink className={({ isActive }) => isActive ? `bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD] md:py-3.5 md:px-5 text-white font-bold text-xs md:text-sm  rounded flex items-center gap-3` : `bg-transparent md:py-3.5 md:px-5 font-bold text-xs md:text-sm  rounded flex items-center gap-3`} to="/dashboard/add-test" ><PiTestTubeThin className="text-xl"></PiTestTubeThin>ADD TEST</NavLink>
                                <NavLink className={({ isActive }) => isActive ? `bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD] md:py-3.5 md:px-5 text-white font-bold text-xs md:text-sm  rounded flex items-center gap-3` : `bg-transparent md:py-3.5 md:px-5 font-bold text-xs md:text-sm  rounded flex items-center gap-3`} to="/dashboard/all-tests" ><MdAlignHorizontalLeft className="text-xl"></MdAlignHorizontalLeft>ALL TESTS</NavLink>
                                <NavLink className={({ isActive }) => isActive ? `bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD] md:py-3.5 md:px-5 text-white font-bold text-xs md:text-sm  rounded flex items-center gap-3` : `bg-transparent md:py-3.5 md:px-5 font-bold text-xs md:text-sm  rounded flex items-center gap-3`} to="/dashboard/reservation" ><RiReservedLine className="text-xl"></RiReservedLine>RESERVATION</NavLink>
                                <NavLink className={({ isActive }) => isActive ? `bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD] md:py-3.5 md:px-5 text-white font-bold text-xs md:text-sm  rounded flex items-center gap-3` : `bg-transparent md:py-3.5 md:px-5 font-bold text-xs md:text-sm  rounded flex items-center gap-3`} to="/dashboard/add-banner" ><PiFlagBanner className="text-xl"></PiFlagBanner> ADD BANNER</NavLink>
                                <NavLink className={({ isActive }) => isActive ? `bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD] md:py-3.5 md:px-5 text-white font-bold text-xs md:text-sm  rounded flex items-center gap-3` : `bg-transparent md:py-3.5 md:px-5 font-bold text-xs md:text-sm  rounded flex items-center gap-3`} to="/dashboard/all-Banners" ><GiTatteredBanner className="text-xl"></GiTatteredBanner>ALL BANNERS</NavLink>
                                <hr />
                                <NavLink className={({ isActive }) => isActive ? `bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD] md:py-3.5 md:px-5 text-white font-bold text-xs md:text-sm  rounded flex items-center gap-3` : `bg-transparent md:py-3.5 md:px-5 font-bold text-xs md:text-sm  rounded flex items-center gap-3`} to="/" ><AiOutlineHome></AiOutlineHome> HOME</NavLink>
                            </div>
                        </nav>

                        {/* Side Navigation's Code Ends Here */}


                    </div>
                </div>
            </section>
        </>
    );
};

// const Dashboard = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleSidebar = () => {
//         setIsOpen(!isOpen);
//     };

//     // Close the sidebar when the screen size is greater than or equal to large devices
//     const closeSidebarForLargeDevices = () => {
//         if (window.innerWidth >= 1024) {
//             setIsOpen(false);
//         }
//     };

//     useEffect(() => {
//         window.addEventListener("resize", closeSidebarForLargeDevices);

//         return () => {
//             window.removeEventListener("resize", closeSidebarForLargeDevices);
//         };
//     }, []);

//     return (
//         <>
//             <section>
//                 <div className="navbar py-3 md:py-4 relative mx-auto wave bg-lime-200">
//                     <div className="navbar-start gap-3">
//                         {/* Button For Close Sidebar in Medium and small device */}
//                         <label htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden">
//                             <RiMenu4Line />
//                         </label>
//                         {/* Button For close Sidebar in Large Device */}
//                         <button onClick={toggleSidebar} className="btn btn-ghost hidden lg:flex">
//                             <RiMenu4Line />
//                         </button>
//                         <h1 className="text-sm md:text-base lg:text-lg xl:text-xl flex items-center justify-center gap-2 font-bold inter">
//                             <img className=" h-8" src="https://i.ibb.co/FXwN0tk/bright-luminous-pink-medical-digital-medical-neon-sign-pharmacy-hospital-store-beautiful-shiny-with.png" alt="" />
//                             DIAGNO FAX
//                         </h1>
//                     </div>
//                     <div className="navbar-end">
//                         <div className="dropdown dropdown-end">
//                             <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
//                                 <div className="w-10 rounded-full">
//                                     <img src="https://i.ibb.co/3TBSmhX/404062834-122138341550026868-4171797228385572915-n.jpg" />
//                                 </div>
//                             </label>
//                             <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded w-52">
//                                 <li className="bg-transparent py-2 md:py-2 md:px-2 font-bold text-xs md:text-sm  rounded"> Astramers </li>
//                                 <li className="bg-transparent py-2 md:py-2 md:px-2 font-bold text-xs md:text-sm  rounded">
//                                     <Link className="justify-between">
//                                         Profile
//                                         <span className="badge">New</span>
//                                     </Link>
//                                 </li>
//                                 <li className="bg-transparent py-2 md:py-2 md:px-2 font-bold text-xs md:text-sm btn-ghost rounded"><Link>Logout</Link></li>
//                             </ul>
//                         </div>
//                         <button className="bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD] py-2 md:py-3 px-3 md:px-6 lg:px-9 text-white font-bold text-xs md:text-sm rounded">
//                             LOGOUT
//                         </button>
//                     </div>
//                 </div>
//                 <div className={`lg:drawer-open lg:flex lg:flex-row-reverse gap-8 mx-auto ${isOpen ? 'lg:drawer-open' : 'lg:drawer-close'}`}>
//                     <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//                     <main className="w-full mx-auto space-y-16 md:space-y-24 lg:space-y-32 xl:space-y-48 lg:flex-[3]">
//                         {/* Dashboard Content Start From Here */}
//                         <Outlet />
//                     </main>
//                     <div className="drawer-side rounded-lg">
//                         <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
//                         {/* Side Navigation's Code Start From here */}

//                         <nav id="sideNav" className=" p-4 w-80 min-h-full bg-base-200 roboto space-y-8 duration-500">
//                             <div className="text-center space-y-6 mt-6">
//                                 <div className="w-24 h-24 mx-auto">
//                                     <img className="w-full h-full rounded-full" src="https://i.ibb.co/3TBSmhX/404062834-122138341550026868-4171797228385572915-n.jpg" alt="Profile" />
//                                 </div>
//                                 <div>
//                                     <h1 className="text-xl roboto font-bold">Astramers</h1>
//                                 </div>
//                             </div>

//                             {/* Sidebar content here */}

//                             <div className="space-y-4">
//                                 <NavLink className={({ isActive }) => isActive ? `bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD] md:py-3.5 md:px-5 text-white font-bold text-xs md:text-sm  rounded flex items-center gap-3` : `bg-transparent md:py-3.5 md:px-5 font-bold text-xs md:text-sm  rounded flex items-center gap-3`} to="/dashboard/profile" ><VscAccount className="text-xl"></VscAccount> MY PROFILE</NavLink>
//                                 {
//                                     <><NavLink className={({ isActive }) => isActive ? `bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD] md:py-3.5 md:px-5 text-white font-bold text-xs md:text-sm  rounded flex items-center gap-3` : `bg-transparent md:py-3.5 md:px-5 font-bold text-xs md:text-sm  rounded flex items-center gap-3`} to="/dashboard/appointments" ><VscChecklist className="text-xl"></VscChecklist>UPCOMING APPOINTMENTS</NavLink>
//                                         <NavLink className={({ isActive }) => isActive ? `bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD] md:py-3.5 md:px-5 text-white font-bold text-xs md:text-sm  rounded flex items-center gap-3` : `bg-transparent md:py-3.5 md:px-5 font-bold text-xs md:text-sm  rounded flex items-center gap-3`} to="/dashboard/results" ><BsJournalCheck className="text-xl"></BsJournalCheck>TEST RESULTS</NavLink></>
//                                 }
//                                 {
//                                     <> <NavLink className={({ isActive }) => isActive ? `bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD] md:py-3.5 md:px-5 text-white font-bold text-xs md:text-sm  rounded flex items-center gap-3` : `bg-transparent md:py-3.5 md:px-5 font-bold text-xs md:text-sm  rounded flex items-center gap-3`} to="/dashboard/all-users" ><RiTeamLine className="text-xl"></RiTeamLine>ALL USERS</NavLink>
//                                         <NavLink className={({ isActive }) => isActive ? `bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD] md:py-3.5 md:px-5 text-white font-bold text-xs md:text-sm  rounded flex items-center gap-3` : `bg-transparent md:py-3.5 md:px-5 font-bold text-xs md:text-sm  rounded flex items-center gap-3`} to="/dashboard/add-test" ><PiTestTubeThin className="text-xl"></PiTestTubeThin>ADD TEST</NavLink>
//                                         <NavLink className={({ isActive }) => isActive ? `bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD] md:py-3.5 md:px-5 text-white font-bold text-xs md:text-sm  rounded flex items-center gap-3` : `bg-transparent md:py-3.5 md:px-5 font-bold text-xs md:text-sm  rounded flex items-center gap-3`} to="/dashboard/all-tests" ><MdAlignHorizontalLeft className="text-xl"></MdAlignHorizontalLeft>ALL TESTS</NavLink>
//                                         <NavLink className={({ isActive }) => isActive ? `bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD] md:py-3.5 md:px-5 text-white font-bold text-xs md:text-sm  rounded flex items-center gap-3` : `bg-transparent md:py-3.5 md:px-5 font-bold text-xs md:text-sm  rounded flex items-center gap-3`} to="/dashboard/reservation" ><RiReservedLine className="text-xl"></RiReservedLine>RESERVATION</NavLink>
//                                         <NavLink className={({ isActive }) => isActive ? `bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD] md:py-3.5 md:px-5 text-white font-bold text-xs md:text-sm  rounded flex items-center gap-3` : `bg-transparent md:py-3.5 md:px-5 font-bold text-xs md:text-sm  rounded flex items-center gap-3`} to="/dashboard/add-banner" ><PiFlagBanner className="text-xl"></PiFlagBanner> ADD BANNER</NavLink>
//                                         <NavLink className={({ isActive }) => isActive ? `bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD] md:py-3.5 md:px-5 text-white font-bold text-xs md:text-sm  rounded flex items-center gap-3` : `bg-transparent md:py-3.5 md:px-5 font-bold text-xs md:text-sm  rounded flex items-center gap-3`} to="/dashboard/all-Banners" ><GiTatteredBanner className="text-xl"></GiTatteredBanner>ALL BANNERS</NavLink></>
//                                 }
//                                 <hr />
//                                 <NavLink className={({ isActive }) => isActive ? `bg-gradient-to-l from-[#8D53FD] to-[#9E6EFD] md:py-3.5 md:px-5 text-white font-bold text-xs md:text-sm  rounded flex items-center gap-3` : `bg-transparent md:py-3.5 md:px-5 font-bold text-xs md:text-sm  rounded flex items-center gap-3`} to="/" ><AiOutlineHome></AiOutlineHome> HOME</NavLink>
//                             </div>
//                         </nav>

//                         {/* Side Navigation's Code Ends Here */}
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

export default Dashboard;