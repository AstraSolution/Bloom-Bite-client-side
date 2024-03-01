import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
const Footer = () => {
    const Year = new Date().getFullYear();
    return (
        <footer className="relative text-white">
        <div className="absolute top-0 bg-black left-0 w-[100%] overflow-hidden">
            <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 150"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,
                        250.45-.39C823.78,31,906.67,60,985.66,92.83c70.05,18.48,146.53,26.09,214.34,
                        3V0H0V5.35A615.10,600.21,0,0,0,321.39,56.44Z"
                        className="relative block h-[600px] fill-white"
                    ></path>
                </svg>
            <div className="grid lg:grid-cols-4 gap-20 sm:grid-cols-1 p-5 ml-5 place-items-center">
                <div className="flex flex-col gap-5">
                    <h2 className="text-3xl text-pink-500">Footer</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, deleniti dolores
                        vel ipsa reiciendis corporis similique dolor earum aut itaque.
                    </p>
                </div>

                <div>
                    <li className="text-[22px] list-none font-semibold text-pink-500 py-2 uppercase">
                        Creativity
                    </li>
                    <li className="my-4 list-none">Website Guidlines & Ideas</li>
                    <li className="my-4 list-none">Tips & Tricks</li>
                    <li className="my-4 list-none">photography</li>
                </div>

                <div>
                    <li className="text-[22px] list-none font-semibold text-pink-500 py-2 uppercase">
                        Creativity</li>
                    <li className="my-4 list-none">Guidlines & Ideas</li>
                    <li className="my-4 list-none">Tips & Tricks</li>
                    <li className="my-4 list-none">photography</li>
                </div>
                <div className="mb-4 md:mb-0">
                    <h2 className="text-[22px] font-semibold text-pink-500 py-2 uppercase">Contact</h2>
                    <p className="text-[16px] my-4">Email: youremail.gmail.com</p>
                    <p className="text-[16px] my-4">Phone: +1 113-456-7890 </p>
                    <div className="flex space-x-4">
                        <a
                            className="text-white hover:text-pink-500 transform hover:scale-150 
                        transition-all duration-150 ease-in-out" href="">
                            <FaGithub />
                        </a>
                        <a
                            className="text-white hover:text-pink-500 transform hover:scale-150
                         transition-all duration-150 ease-in-out" href="">
                            <FaLinkedinIn />
                        </a>
                        <a
                            className="text-white hover:text-pink-500 transform hover:scale-150
                         transition-all duration-150 ease-in-out" href="">
                            <FaTwitter />
                        </a>
                        <a
                            className="text-white hover:text-pink-500 transform hover:scale-150
                         transition-all duration-150 ease-in-out" href="">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>

            
            <h6 className="text-center mt-10">&copy; Astra Solution  {Year}</h6>
        </div>
    </footer>
    );
};

export default Footer;