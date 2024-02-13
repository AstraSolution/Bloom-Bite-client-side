// ------------------------------ //
// --------Imported Items-------- //
// ------------------------------ //

import TitleBanner from "../../Shared/Title Banner/TitleBanner";
import Construction from "../../Shared/Construction/Construction";
import Testimonial from "../../Components/Testimonial/Testimonial";
import OurStory from "../../Components/Our Story/OurStory";
import WhyUs from "../../Components/Why Us/WhyUs";

const AboutUsPage = () => {
    return (
        <>
            <section className="mx-auto font-primary">
                <TitleBanner Title={`ABOUT US`} Track={`HOME > ABOUT`}></TitleBanner>
            </section>
            <section>
                <OurStory></OurStory>
            </section>
            <section>
                <WhyUs></WhyUs>
            </section>
            <section className="my-20 md:mt-20 lg:mt-24 mx-4 font-primary">
                <div className="space-y-4 mb-10">
                    <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold">MEET OUR EXPERTS</h1>
                    <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-6 md:leading-7 lg:leading-9 text-center md:w-3/4 xl:w-1/2 mx-auto">While mirth large of on front. Ye he greater related adapted proceed entered an. Through it examine express promise no. Past add size game cold girl off how old</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <img className="h-[500px] bg-gray-200 mx-auto rounded-lg" src="https://i.ibb.co/2v8wyYP/1.png" alt="" />
                        <div className="text-center space-y-4 bg-white py-10 -mt-20 w-10/12 mx-auto relative rounded-lg shadow-lg">
                            <h1 className="text-xl font-bold"> Lionel Messi </h1>
                            <h4 className="py-2 px-6 border-2 inline-block rounded-md">Master Chef</h4>
                        </div>
                    </div>
                    <div>
                        <img className="h-[500px] bg-gray-200 mx-auto rounded-lg" src="https://i.ibb.co/Ttz54TZ/2.png" alt="" />
                        <div className="text-center space-y-4 bg-white py-10 -mt-20 w-10/12 mx-auto relative rounded-lg shadow-lg">
                            <h1 className="text-xl font-bold"> Rubina Melodes </h1>
                            <h4 className="py-2 px-6 border-2 inline-block rounded-md">Chef</h4>
                        </div>
                    </div>
                    <div>
                        <img className="h-[500px] bg-gray-200 mx-auto rounded-lg" src="https://i.ibb.co/TcYyw7p/3.png" alt="" />
                        <div className="text-center space-y-4 bg-white py-10 -mt-20 w-10/12 mx-auto relative rounded-lg shadow-lg">
                            <h1 className="text-xl font-bold"> Cristiano Ronaldo </h1>
                            <h4 className="py-2 px-6 border-2 inline-block rounded-md">Assistant Chef</h4>
                        </div>
                    </div>
                    <div>
                        <img className="h-[500px] bg-gray-200 mx-auto rounded-lg" src="https://i.ibb.co/FXvVSgt/4.png" alt="" />
                        <div className="text-center space-y-4 bg-white py-10 -mt-20 w-10/12 mx-auto relative rounded-lg shadow-lg">
                            <h1 className="text-xl font-bold"> M. Bappe </h1>
                            <h4 className="py-2 px-6 border-2 inline-block rounded-md">Master Chef</h4>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="mx-4">
                <Construction></Construction>
            </section> */}
            <section>
                <Testimonial></Testimonial>
            </section>
        </>
    );
};

export default AboutUsPage;