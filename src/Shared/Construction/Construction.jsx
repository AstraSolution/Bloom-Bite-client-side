const Construction = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:mx-auto font-primary">
                <div className="flex-1 space-y-4 lg:space-y-6 text-center lg:text-left">
                    <h1 className=" text-2xl md:text-4xl lg:text-6xl font-bold">The Section Under Construction</h1>
                    <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-5 md:leading-7 lg:leading-8 font-medium">Our website is currently undergoing scheduled maintenance. We Should be back shortly. Thank you for you patience.</p>
                    <button className="py-3 px-10 lg:py-4 lg:px-12 border-2 rounded-md ">GO BACK</button>
                    <button className="py-3 px-10 lg:py-4 lg:px-12 border-2 rounded-md ml-6">NOTIFY US</button>
                </div>
                <div className="flex-1">
                    <img className="w-10/12 mx-auto" src="https://i.ibb.co/rfGkdL7/construction-crane-concept-illustration-114360-9067.jpg" alt="" />
                </div>
            </div>
            <div>
                <img className="w-full mx-auto" src="https://i.ibb.co/m8Khnxk/stock-vector-seamless-under-construction-line-vector-or-simple-under-construction-line-isolated-on-w.png" alt="" />
            </div>
        </>
    );
};

export default Construction;