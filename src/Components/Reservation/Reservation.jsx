// ------------------------------ //
// --------Imported Items-------- //
// ------------------------------ //

import './style.css'





const Reservation = () => {
    return (
        <>
            <div className=" flex flex-col gap-6 lg:flex-row items-center justify-center overflow-hidden py-5 md:py-10 mx-auto ">
                <div className="flex-1">
                    <div className="xl:w-11/12 md:space-y-4 text-center lg:text-left px-4 space-y-2 lg:w-full md:w-8/12 mx-auto">
                        <h2 className="text-xl md:text-[26px] xl:text-[30px]  font-semibold">RESERVE YOUR TABLE</h2>
                        <h1 className="text-[26px] md:text-[30px] xl:text-5xl font-bold">MAKE A RESERVATION</h1>
                        <p className="text-[14px] xl:text-[16px] leading-6 lg:leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, hic doloribus! Illum, sunt quaerat. Totam, quas possimus recusandae sed, ab culpa quaerat qui labore</p>
                    </div>
                </div>
                <div className="flex-1 min-w-full lg:min-w-fit  ">
                    <div className="p-8 md:w-11/12 mx-auto bg-[#F9FAFC] rounded-md ">
                        <form className="md:p-8 space-y-9 md:bg-white rounded-md md:border-dashed md:border ">
                            <div className="relative input-box">
                                <input className="border-2 w-full py-2.5 rounded-md px-5 outline-none" type="text" name="name" required />
                                <span className="absolute left-3 text-gray-400 duration-300 ">YOUR NAME</span>
                            </div>
                            <div className="relative input-box">
                                <input className="border-2 w-full py-2.5 rounded-md px-5 outline-none" type="text" name="name" required />
                                <span className="absolute left-3 text-gray-400 duration-300 ">PHONE NUMBER</span>
                            </div>
                            <div className="relative input-box">
                                <input className="border-2 w-full py-2.5 rounded-md px-5 outline-none" type="text" name="name" required />
                                <span className="absolute left-3 text-gray-400 duration-300 ">YOUR E-MAIL</span>
                            </div>
                            <div className="relative input-box">
                                <input className="border-2 w-full py-2.5 rounded-md px-5 outline-none" type="number" name="" required />
                                <span className="absolute left-3 text-gray-400 duration-300 ">PERSON</span>
                            </div>
                            <div className='md:flex md:flex-row md:items-center md:gap-5 lg:flex-col lg:items-stretch lg:gap-9 xl:flex-row xl:items-center xl:gap-5 space-y-9 md:space-y-0'>
                                <div className=" md:flex-1 ">
                                    <input className="border-2 w-full py-2.5 rounded-md px-5 outline-none" type="date" name="name" required />
                                </div>
                                <div className=" md:flex-1 ">
                                    <input className="border-2 w-full py-2.5 rounded-md px-5 outline-none" type="time" name="name" required />
                                </div>
                            </div>
                            <div>
                                <button className="py-3 px-10 lg:py-4 lg:px-12 border-2 rounded-md text-[12px] md:text-[14px] lg:text-[16px] w-full ">RESERVE A TABLE</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Reservation;