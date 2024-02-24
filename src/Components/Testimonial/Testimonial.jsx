import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import "swiper/css/bundle";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from '../Review Card/ReviewCard';

const Testimonial = () => {

    const [swiperInitialized, setSwiperInitialized] = useState(false);
    const [swiper, setSwiper] = useState(null);


    const handleNextButtonClick = () => {
        if (swiper) {
            swiper.slideNext();
        }
    };

    const handlePrevButtonClick = () => {
        if (swiper) {
            swiper.slidePrev();
        }
    };


    const handleSwiperInit = (swiperInstance) => {
        setSwiper(swiperInstance);
        setSwiperInitialized(true);
    };

    useEffect(() => {
        if (swiper) {
            swiper.update();
        }
    }, [swiper]);


    const cardsInfo = [
            {
                id: 1,
                img: "https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg",
                title: "BIG MAGIC",
                auther: "by Elizabeth Gilbert",
                color: "#EB5757",
                details:
                    "Readers of all ages and walks of life have drawn inspiration and empowerment from Elizabeth Louisa Clark is no longer just an ordinary girl living an ordinary life. After the transformative six months spent. Gilbert’s books for years.",
            },
            {
                id: 2,
                img: "https://images-na.ssl-images-amazon.com/images/I/A1kNdYXw0GL.jpg",
                title: "Ten Thousand Skies Above",
                auther: "by Claudia Gray",
                color: "#A4E0EB",
                details:
                    "The hunt for each splinter of Paul's soul sends Marguerite racing through Louisa Clark is no longer just an ordinary girl living an ordinary life. After the transformative six months spent. a war-torn San Francisco.",
            },
            {
                id: 3,
                img: "https://images-na.ssl-images-amazon.com/images/I/81eI0ExR+VL.jpg",
                title: "A Tale For The Time Being",
                auther: "by Ruth Ozeki",
                color: "#EDB9D6",
                details:
                    "In Tokyo, sixteen-year-old Nao has decided there’s only Louisa Clark is no longer just an ordinary girl living an ordinary life. After the transformative six months spent. one escape from her aching loneliness and her classmates’ bullying.",
            }, 
            {
                id: 4,
                img: "https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg",
                title: "The Great Gatsby",
                auther: "by F.Scott Fitzgerald",
                color: "#FDCA95",
                details:
                    "The Great Gatsby, F. Scott Fitzgerald’s third Louisa Clark is no longer just an ordinary girl living an ordinary life. After the transformative six months spent. book, stands as the supreme achievement of his career.",
            },
            {
                id: 5,
                img: "https://images-na.ssl-images-amazon.com/images/I/81UWB7oUZ0L.jpg",
                title: "After You",
                auther: "by Jojo Moyes",
                color: "#CBB5E2",
                details:
                    "Louisa Clark is no longer just an ordinary girl living an ordinary life. After the transformative six months spent. Louisa Clark is no longer just an ordinary girl living an ordinary life. After the transformative six months spent.",
            },
        ];


    return (
        <>
            <div className="font-primary mx-4 space-y-8 lg:space-y-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
                    <div className="text-center md:text-left flex-1 space-y-3 lg:space-y-6">
                        <h1 className=" text-xl md:text-2xl lg:text-3xl font-bold">REVIEWS ABOUT US</h1>
                        <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-5 md:leading-7 lg:leading-8 md:w-2/3 mx-auto md:ml-0">While mirth large of on front. Ye he greater related adapted proceed entered an.</p>
                    </div>
                    <div className="flex-1 flex justify-between items-center lg:justify-end gap-3 md:gap-0 lg:gap-4">
                        <div className="flex gap-3">
                            <button onClick={handlePrevButtonClick} className="py-3.5 px-7 border rounded-md"><FaArrowLeft></FaArrowLeft></button>
                            <button onClick={handleNextButtonClick} className="py-3.5 px-7 border rounded-md"><FaArrowRight></FaArrowRight></button>
                        </div>
                        <button className="flex items-center gap-3 font-bold py-3.5 px-7 border rounded-md"><FaRegComment></FaRegComment>ALL REVIEWS</button>
                    </div>
                </div>
                <div>
                    <Swiper
                        direction="horizontal"
                        spaceBetween={13}
                        onSwiper={handleSwiperInit}
                        controller={{ control: swiper => (window.swiper = swiper) }}
                        slidesPerView={2}
                    >
                        {swiperInitialized ? (
                            cardsInfo.map((cardInfo) => (
                                <SwiperSlide key={cardInfo.id}>
                                    <ReviewCard cardinfo={cardInfo}></ReviewCard>
                                </SwiperSlide>
                            ))
                        ) : (
                            <div className="w-full flex justify-center items-center">
                                <div className="book">
                                    <div className="book__pg-shadow"></div>
                                    <div className="book__pg"></div>
                                    <div className="book__pg book__pg--2"></div>
                                    <div className="book__pg book__pg--3"></div>
                                    <div className="book__pg book__pg--4"></div>
                                    <div className="book__pg book__pg--5"></div>
                                </div>
                            </div>
                        )}
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default Testimonial;


// import './Spinner.css'
// import "swiper/css/bundle";
// import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import RelatedCard from "./RelatedCard";
// import { FiArrowUpRight } from "react-icons/fi";

// const Related = () => {
//     const [swiperInitialized, setSwiperInitialized] = useState(false);
//     const [swiper, setSwiper] = useState(null);

//     const cardsInfo = [
//         {
//             id: 1,
//             img: "https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg",
//             title: "BIG MAGIC",
//             auther: "by Elizabeth Gilbert",
//             color: "#EB5757",
//             details:
//                 "Readers of all ages and walks of life have drawn inspiration and empowerment from Elizabeth Gilbert’s books for years.",
//         },
//         {
//             id: 2,
//             img: "https://images-na.ssl-images-amazon.com/images/I/A1kNdYXw0GL.jpg",
//             title: "Ten Thousand Skies Above",
//             auther: "by Claudia Gray",
//             color: "#A4E0EB",
//             details:
//                 "The hunt for each splinter of Paul's soul sends Marguerite racing through a war-torn San Francisco.",
//         },
//         {
//             id: 3,
//             img: "https://images-na.ssl-images-amazon.com/images/I/81eI0ExR+VL.jpg",
//             title: "A Tale For The Time Being",
//             auther: "by Ruth Ozeki",
//             color: "#EDB9D6",
//             details:
//                 "In Tokyo, sixteen-year-old Nao has decided there’s only one escape from her aching loneliness and her classmates’ bullying.",
//         },
//         {
//             id: 4,
//             img: "https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg",
//             title: "The Great Gatsby",
//             auther: "by F.Scott Fitzgerald",
//             color: "#FDCA95",
//             details:
//                 "The Great Gatsby, F. Scott Fitzgerald’s third book, stands as the supreme achievement of his career.",
//         },
//         {
//             id: 5,
//             img: "https://images-na.ssl-images-amazon.com/images/I/81UWB7oUZ0L.jpg",
//             title: "After You",
//             auther: "by Jojo Moyes",
//             color: "#CBB5E2",
//             details:
//                 "Louisa Clark is no longer just an ordinary girl living an ordinary life. After the transformative six months spent.",
//         },
//     ];



//     const handleNextButtonClick = () => {
//         if (swiper) {
//             swiper.slideNext();
//         }
//     };

//     const handlePrevButtonClick = () => {
//         if (swiper) {
//             swiper.slidePrev();
//         }
//     };


//     const handleSwiperInit = (swiperInstance) => {
//         setSwiper(swiperInstance);
//         setSwiperInitialized(true);
//     };

//     useEffect(() => {
//         if (swiper) {
//             swiper.update();
//         }
//     }, [swiper]);


//     return (
//         <>
//             <div className="min-w-full gap-3 my-36">
//                 <div className="flex justify-between items-center mb-4">
//                     <h2 className="text-2xl md:text-3xl text-[#016961] font-bold text-nowrap">Related Books</h2>
//                     <hr className="hr " />
//                     <div className="flex items-center justify-end gap-3 text-nowrap">
//                         {/* View All button */}
//                         <button className="button-color px-4 py-2 rounded-full text-sm md:text-base text-teal-50 flex items-center gap-1">
//                             View All <span className="text-xl"><FiArrowUpRight /></span>
//                         </button>
//                         {/* Previous Button */}
//                         <button className="button-color p-1.5 md:p-2 rounded-full text-teal-50 flex items-center gap-1" onClick={handlePrevButtonClick}>
//                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12 15.75 4.5" />
//                             </svg>
//                         </button>
//                         {/* Next Button */}
//                         <button className="button-color p-1.5 md:p-2 rounded-full text-teal-50 flex items-center gap-1" onClick={handleNextButtonClick}>
//                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
//                             </svg>
//                         </button>
//                     </div>
//                 </div>
//                 <Swiper
//                     direction="horizontal"
//                     spaceBetween={13}
//                     onSwiper={handleSwiperInit}
//                     controller={{ control: swiper => (window.swiper = swiper) }}
//                     slidesPerView={2} // Set a default value
//                 >
//                     {swiperInitialized ? (
//                         cardsInfo.map((cardInfo) => (
//                             <SwiperSlide key={cardInfo.id}>
//                                 <RelatedCard cardInfo={cardInfo} ></RelatedCard>
//                             </SwiperSlide>
//                         ))
//                     ) : (
//                         <div className="w-full flex justify-center items-center">
//                             <div className="book">
//                                 <div className="book__pg-shadow"></div>
//                                 <div className="book__pg"></div>
//                                 <div className="book__pg book__pg--2"></div>
//                                 <div className="book__pg book__pg--3"></div>
//                                 <div className="book__pg book__pg--4"></div>
//                                 <div className="book__pg book__pg--5"></div>
//                             </div>
//                         </div>
//                     )}
//                 </Swiper>
//             </div>
//         </>
//     );
// };

// export default Related;