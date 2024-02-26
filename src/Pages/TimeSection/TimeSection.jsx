
const TimeSection = () => {
    return (
        <div>

            <div
                className=" h-[70vh] w-full mx-auto overflow-y-scroll bg-cover  bg-fixed bg-center bg-no-repeat shadow-lg mt-20"
                style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJip25s7SbJys_UxhmXpD3iUKXbG2-_XrIoSKAzHYl7TJAhOridlGMxUaJawUGTa_6hqU&usqp=CAU" }}>
                <div className="mt-40">
                    <div className="text-center text-white  font-montserrat  ">
                        <h1 className="text-6xl pb-6 "> Opening Time </h1 >
                        <h1 className="text-3xl  "> Call For Reservation </h1>
                    </div>
                    <div className="p-4 sm:p-8">
                        <div className=" flex  w-1/2   mx-auto items-center justify-between lg:px-20 px-4 lg:pt-20 md:pt-10 pt-6 ">
                            <div className="text-center ">
                                <h1 className="text-orange-500 font-montserrat text-6xl "> Sunday to <br /> Tuesday </h1>
                                <p className=" text-5xl font-montserrat py-10  text-white "> 09 : 00 <br /> <br /> <span classNameName=" ">24 : 00</span> </p>
                            </div>
                            <div className="text-center ">
                                <h1 className="text-orange-500 font-montserrat text-6xl "> Friday and <br /> Saturday</h1>
                                <p className=" text-5xl font-montserrat py-10  text-white  "> 08 : 00 <br /> <br /> 03 : 00 </p>
                            </div>


                        </div>
                        <div className="text-center font-montserrat text-white text-2xl mt-40 ">
                            RESERVATION NUMBER: 0842-5484214
                        </div>
                    </div>

                </div>


            </div>



        </div>
    );
};

export default TimeSection;