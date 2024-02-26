// import React from 'react';



const Blog = () => {
    return (
        <section className="max-w-7xl mx-auto mt-32 mb-4">
            <div className="">
                <h1 className="py-4 text-3xl  font-bold "> Blog  Section  </h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    {/* main blog */}
                    <div className="mb-4 lg:mb-0  p-4 lg:p-0 w-full md:w-4/7 relative rounded block">
                        <img
                            src="https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1000&format=pjpg&exif=0&iptc=0"
                            alt="Main blog"
                            className="w-full h-[300px]"
                        />
                        <span className="text-[#016961] text-sm hidden md:block mt-4">
                            Food
                        </span>
                        <h1 className="text-black text-4xl font-bold mt-2 mb-2 leading-tight">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        </h1>
                        <p className="text-black mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aliquid praesentium earum vero expedita! Quis, labore. Beatae corrupti est adipisci voluptatem ipsa aspernatur. Aliquid quo facere reiciendis ex provident minima.
                        </p>
                        <button
                            // href={`/blogs/${main?._id}`}
                            className="inline-block px-6 py-3 mt-2 rounded-md bg-[#016961] hover:bg-orange-400 text-white"
                        >
                            Read more
                        </button>
                    </div>


                    {/* Blog right site  */}
                    <div className="rounded-md w-full  flex-col md:flex-row mb-10">
                        <div className="flex item-senter gap-2 mt-2 ">
                            <img
                                src="https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1000&format=pjpg&exif=0&iptc=0"
                                alt="right side "
                                className='w-[210px] h-[120px] rounded-lg'
                            />


                            <div className="px-4 pt-2">
                                <span className="text-[#016961] text-sm hidden md:block">
                                    Lorem ipsum dolor sit amet.
                                </span>
                                <div className="md:mt-0 text-black font-semibold text-xl mb-2">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, aliquam.
                                </div>
                                <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-black">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus impedit mollitia atque perferendis saepe fuga hic velit aut, eaque accusantium?
                                </p>
                            </div>

                        </div>
                        <div className="flex item-senter gap-2 mt-2 ">
                            <img
                                src="https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1000&format=pjpg&exif=0&iptc=0"
                                alt="right side "
                                className='w-[210px] h-[120px] rounded-lg'
                            />


                            <div className="px-4 pt-2">
                                <span className="text-[#016961] text-sm hidden md:block">
                                    Lorem ipsum dolor sit amet.
                                </span>
                                <div className="md:mt-0 text-black font-semibold text-xl mb-2">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, aliquam.
                                </div>
                                <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-black">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus impedit mollitia atque perferendis saepe fuga hic velit aut, eaque accusantium?
                                </p>
                            </div>

                        </div>
                        <div className="flex item-senter gap-2 mt-2">
                            <img
                                src="https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1000&format=pjpg&exif=0&iptc=0"
                                alt="right side "
                                className='w-[210px] h-[120px] rounded-lg'
                            />


                            <div className="px-4 pt-2">
                                <span className="text-[#016961] text-sm hidden md:block">
                                    Lorem ipsum dolor sit amet.
                                </span>
                                <div className="md:mt-0 text-black font-semibold text-xl mb-2">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, aliquam.
                                </div>
                                <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-black">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus impedit mollitia atque perferendis saepe fuga hic velit aut, eaque accusantium?
                                </p>
                            </div>

                        </div>


                       
                        
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Blog;