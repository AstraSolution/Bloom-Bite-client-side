import { FaAngleRight } from "react-icons/fa6";




const TitleBanner = ({Title , Track , Location}) => {

    const Image = 'https://img.freepik.com/premium-photo/cut-barbecue-pizza-stone-board_220925-26389.jpg?w=1380'


    return (
        <>
            <div style={{backgroundImage: `url(${Image})`}} className="text-center py-10 md:py-16 lg:py-28 space-y-2 bg-no-repeat bg-cover">
                <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white">{Title}</h1>
                <h3 className="py-2.5 px-6 md:py-3.5 md:px-9 bg-black bg-opacity-50 text-lg md:text-xl lg:text-text-2xl inline-block rounded-[4px] font-semibold text-white">{Track}</h3>
            </div>
        </>
    );
};

export default TitleBanner;