import { useState } from "react";
import NewsCard from "../News Card/NewsCard";

const News = () => {

    const [block, setBlock] = useState(6)

    const images = [
        'https://robbreport.com/wp-content/uploads/2020/12/grilled-dorade-vernick-fish.jpg?w=1000',
        'https://images.food52.com/gyaPcGbJv9wkVpK7cnzQnOrrCEc=/7bc00fc0-7358-408c-a6e5-1a37eece95fa--5475456062_5aaebc1182_z.jpg',
        'https://static01.nyt.com/images/2010/01/27/dining/27feedspan-1/articleLarge.jpg',
        'https://lh6.googleusercontent.com/HsDz-1wrUoeDZPFVo7MzIPk_0nc2DoM6Vg5aYnnRW_Q1tVOSk7Po5QU99MDzQqUi_jlwp64rmsN0KtvjS0LPhD0bhW7oQNmDhfpUPz6uYpBrI5WeNzN5C-8NTtqghv8GV2LFJe-lp6QRSPJFdEezIgg',
        'https://robbreport.com/wp-content/uploads/2020/12/manti-dumplings-albi-dc.jpg?w=1000',
        'https://hips.hearstapps.com/hmg-prod/images/tgi-fridays-potato-skins-1576689702.jpg',
        



    ]
    return (
        <>
            <div className="space-y-12 my-20 mx-4 xl:container xl:mx-auto">
                <div>
                    <div className=" text-center md:w-[500px] xl:w-[600px] mx-auto">
                        <h5 className="text-base md:text-lg xl:text-xl font-semibold text-[#F95442] ">UPDATES</h5>
                        <h1 className="text-2xl md:text-[23px] lg:text-3xl xl:text-4xl xl:leading-normal font-bold mt-4 mb-6 w-max mx-auto ">NEWS & EVENTS</h1>
                        <p className="text-sm md:text-sm xl:text-base font-medium text-gray-500 leading-relaxed">When you choose us, you'll feel the benefit of 10 years experience of Shopping. Because we know that how to handle it. With working knowledge of online, SEO and social media. </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        images.slice(0, block).map((image , i) => <NewsCard key={i} image={image} ></NewsCard>)
                    }
                </div>
                <div className="text-center">
                    <button onClick={() => setBlock(images.length)} className={`${block == images.length || !images.length ? 'hidden' : 'visible'}  bg-[#0FCFEC] rounded-md text-white font-bold py-3 px-12 text-sm md:text-base hover:bg-transparent hover:py-2.5 hover:border-[#0FCFEC] hover:border-2 hover:text-[#0FCFEC] duration-500 bg-opacity-90`}>
                        Show More
                    </button>
                    <button onClick={() => setBlock(6)} className={`${block == images.length ? ' bg-[#0FCFEC] rounded-md text-white font-bold py-3 px-12 text-sm md:text-base hover:bg-transparent hover:py-2.5 hover:border-[#0FCFEC] hover:border-2 hover:text-[#0FCFEC] duration-500 bg-opacity-90' : 'hidden'} `}>
                        Show Less
                    </button>
                </div>
            </div>
        </>
    );
};

export default News;