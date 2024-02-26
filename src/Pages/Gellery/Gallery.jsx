import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { motion } from "framer-motion";



let cetegoryName = [

    { id: "Pizza", label: "Pizza" },
    { id: "Salat", label: "Salat " },
    { id: "Coffee", label: "Coffee" },

];


const images = [

    {
        "id": "1",
        "name": "Pizza",
        "image": "https://i.ibb.co/6bP5yPS/davide-cantelli-jpkfc5-d-DI-unsplash.jpg",

    },
    {
        "id": "2",
        "name": "Salat",
        "image": "https://i.ibb.co/6bP5yPS/davide-cantelli-jpkfc5-d-DI-unsplash.jpg",


    },
    {
        "id": "3",
        "name": "Coffee",
        "image": "https://i.ibb.co/6bP5yPS/davide-cantelli-jpkfc5-d-DI-unsplash.jpg",

    },
    {
        "id": "4",
        "name": "Pizza",
        "image": "https://i.ibb.co/6bP5yPS/davide-cantelli-jpkfc5-d-DI-unsplash.jpg",

    },
    {
        "id": "5",
        "name": "Salat",
        "image": "https://i.ibb.co/6bP5yPS/davide-cantelli-jpkfc5-d-DI-unsplash.jpg",


    },
    {
        "id": "6",
        "name": "Coffee",
        "image": "https://i.ibb.co/6bP5yPS/davide-cantelli-jpkfc5-d-DI-unsplash.jpg",

    },
    {
        "id": "7",
        "name": "Pizza",
        "image": "https://i.ibb.co/6bP5yPS/davide-cantelli-jpkfc5-d-DI-unsplash.jpg",

    },
    {
        "id": "8",
        "name": "Salat",
        "image": "https://i.ibb.co/6bP5yPS/davide-cantelli-jpkfc5-d-DI-unsplash.jpg",


    },
    {
        "id": "9",
        "name": "Coffee",
        "image": "https://i.ibb.co/6bP5yPS/davide-cantelli-jpkfc5-d-DI-unsplash.jpg",

    },


    // "https://picsum.photos/2000/2000",
    // //...
    // "https://picsum.photos/3000/2000",
    // "https://picsum.photos/3000/2500",
    // //...
    // "https://picsum.photos/2000/1500",
    // "https://picsum.photos/1000/1500",
    // "https://i.ibb.co/6bP5yPS/davide-cantelli-jpkfc5-d-DI-unsplash.jpg",
    // //...
    // "https://picsum.photos/1500/2000",
    // "https://i.ibb.co/vzzP7Z9/lidye-1-Shk-Pk-Nk-Nw-unsplash.jpg"
]



const Gallery = () => {


    let [activeTab, setActiveTab] = useState(cetegoryName[0].id);

    const currentImage = images?.filter(img => img.name === activeTab);


    // const [data, setData] = useState({ img: '', i: 0 })




    // const viewImage = (img, i) => {
    //     setData({ img, i });
    // }

    // const imgAction = (action) => {
    //     let i = data.i;
    //     if (action === "next-img") {
    //         setData({ img: images[i + 1], i: i + 1 });
    //     }
    //     if (action === "previous-img") {
    //         setData({ img: images[i - 1], i: i - 1 });
    //     }
    //     if (!action) {
    //         setData({ img: "", i: 0 });
    //     }
    // }

    return (
        <div className=''>


            {/* {
                data.img && <div className='w-full h-[55vh] bg-slate-900 fixed flex items-center justify-center overflow-hidden '>

                    <button onClick={()=> imgAction()} className='absolute top-5 right-5  text-red-700 btn bg-white'>X</button>\

                    <button onClick={() => imgAction("previous-img")} className='text-white md:mr-20 lg:ml-60 px-2'> Previous </button>
                    <img src={data.img} alt="" className=' max-w-[90%] max-h-[90%] mx-auto hover:rounded-xl ' />
                    <button onClick={() => imgAction("next-img")} className='text-white md:ml-20 lg:mr-60 px-2'> Next  </button>
                </div>
            } */}


            <div className="flex flex-col items-center justify-center py-10">
                <div className="flex space-x-1 mb-2">
                    {cetegoryName.map((img , i) => (
                        <button
                            key={img.i}
                            onClick={() => {
                                setActiveTab(img.id);

                            }}
                            className={`${activeTab === img.id ? "" : "hover:text-[#1329b7] text-2xl "}
                            relative rounded-full text-2xl px-10 font-montserrat font-bold  py-1.5 mb-10   black outline-sky-400 transition focus-visible:outline-2`}
                            style={{
                                WebkitTapHighlightColor: "transparent",
                            }}
                        >
                            {activeTab === img.id && (
                                <motion.span
                                    layoutId="bubble"
                                    className="absolute inset-0 z-10 bg-[#ea35b4] mix-blend-multiply "
                                    style={{ borderRadius: 9999 }}
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            {img.label}
                        </button>
                    ))}
                </div>

                <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:px-6 px-4">
                    {
                        currentImage?.map(img => <div key={img.id}>
                               
                                 <div>
                                    <img className='rounded-md max-w-xl transition duration-300 ease-in-out hover:scale-105 ' src={img?.image} alt="" />
                                 </div>

                        </div>)
                    }
                </div>

            </div>





            {/* 
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                <Masonry columnsCount={3} gutter="10px">
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image.image}
                            style={{ width: "100%", display: "block", cursor: "pointer" }}
                        // onClick={() => viewImage(image, i)}
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry> */}
        </div>
    );
};

export default Gallery;