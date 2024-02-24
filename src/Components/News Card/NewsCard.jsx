const NewsCard = ({ image }) => {
    return (
        <>
            <div className="bg-white rounded-lg shadow-lg">
                <div className="bg-base-200 ">
                    <img className="h-72 w-full mx-auto rounded-tl-lg rounded-tr-lg" src={image} alt="" />
                </div>
                <div className="p-6 space-y-4">
                    {/* <div className="flex items-center justify-between pb-3 border-b">
                        <h2 className="text-[#F95442] text-xl font-bold ">${price}</h2>
                        <p className="flex items-center gap-2 font-semibold"><FaStar className="text-[#FFB23E] text-2xl "></FaStar>{rating}</p>
                    </div> */}
                    <h1 className="text-2xl font-bold">Our New Restaurant Discovered</h1>
                    <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-6 md:leading-7 lg:leading-9">Pleased anxious or as in by viewing forbade minutes prevent. Too leave had those get being led weeks blind. Had men rose from down lady able. Its son him ferrars proceed .....</p>
                    <button className=" text-purple-600 flex items-center gap-2 font-semibold hover:underline ">LEARN MORE</button>
                    <div className="mt-6">
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsCard;