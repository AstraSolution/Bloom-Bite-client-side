import { LuBellRing } from "react-icons/lu";


const Subscribe = () => {


    const Image = 'https://img.freepik.com/premium-photo/cut-barbecue-pizza-stone-board_220925-26389.jpg?w=1380'


    return (
        <>
            <div style={{ background: `url('https://bsmedia.business-standard.com/_media/bs/img/article/2023-09/14/full/1694673859-4182.jpeg?im=FeatureCrop,size=(826,465)')`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className="flex flex-col lg:flex-row items-center w-full mt-20 md:f mx-auto bg-no-repeat bg-cover text-white">
                <div className=" flex-1 text-center py-10 md:py-16 lg:py-28 space-y-2  w-full">
                    <h1 className="text-3xl font-bold md:w-10/12 xl:w-8/12 mx-auto">LOGO</h1>
                    <h1 className="text-3xl font-bold md:w-10/12 xl:w-8/12 mx-auto">SUBSCRIBE US TO GET <span className="text-red-500 ">25% OFF</span> </h1>
                    <form className="md:w-10/12 xl:8/12 mx-auto">
                        <div className="flex items-center mx-3">
                            <div className="relative input-box flex-1">
                                <input className=" w-full py-2.5 rounded-tl-md rounded-bl-md px-5 outline-none bg-tr border-2 text-black" type="text" name="name" required />
                                <span className="absolute left-3 text-gray-400 duration-300 ">YOUR EMAIL</span>
                            </div>
                            <div className="flex items-center gap-4 font-semibold py-3 px-6 bg-black  ">
                                <button>SUBSCRIBE</button>
                                <LuBellRing></LuBellRing>
                            </div>
                        </div>
                    </form>
                </div>
                <div className=" flex-1 px-6 md:px-10 lg:py-14 w-full">
                    <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white">OPENING HOURS</h1>
                    <div className=" font-bold w-full">
                        <ul className="">
                            <li className="flex items-center justify-between w-full py-5 border-b"><span>SATURDAY :</span>  <span>6.00 AM - 12.00 PM</span></li>
                            <li className="flex items-center justify-between w-full py-5 border-b"><span>SUNDAY :</span>  <span>8.30 AM - 11.00 PM</span></li>
                            <li className="flex items-center justify-between w-full py-5 border-b"><span>MONDAY :</span>  <span>9.00 AM - 10.30 PM</span></li>
                            <li className="flex items-center justify-between w-full py-5 border-b"><span>TUESDAY :</span>  <span>8.00 AM - 12.00 PM</span></li>
                            <li className="flex items-center justify-between w-full py-5 border-b"><span>WEDNESDAY :</span>  <span>9.45 AM - 10.00 PM</span></li>
                            <li className="flex items-center justify-between w-full py-5 border-b"><span>THURSDAY :</span>  <span>10.15 AM - 12.00 PM</span></li>
                            <li className="flex items-center justify-between w-full py-5 border-b"><span>FRIDAY :</span>  <span>CLOSED</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Subscribe;