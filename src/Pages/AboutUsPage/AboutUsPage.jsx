// ------------------------------ //
// --------Imported Items-------- //
// ------------------------------ //
import { RiCommunityLine } from "react-icons/ri";
import { BsMenuDown } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdOutlineRoomService } from "react-icons/md";
import { GiFarmer } from "react-icons/gi";
import { MdOutlineInsertInvitation } from "react-icons/md";

import TitleBanner from "../../Shared/Title Banner/TitleBanner";

const AboutUsPage = () => {
    return (
        <>
            <section className="container mx-auto font-primary">
                <TitleBanner Title={`ABOUT US`} Track={`HOME > ABOUT`}></TitleBanner>
            </section>
            <section className="flex flex-col lg:flex-row justify-center items-center font-primary mt-14 md:mt-20 mx-4 gap-9">
                <div className="flex-1 space-y-6">
                    <h1 className="text-center lg:text-left text-xl md:text-2xl lg:text-3xl font-bold">OUR STORY OF FOOD</h1>
                    <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-6 md:leading-7 lg:leading-9">Pleased anxious or as in by viewing forbade minutes prevent. Too leave had those get being led weeks blind. Had men rose from down lady able. Its son him ferrars proceed six parlors.</p>
                    <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-6 md:leading-7 lg:leading-9">Advanced diverted domestic sex repeated bringing you old. Possible procured her trifling laughter thoughts property she met way. Companions shy had solicitude favourable own. Which could saw guest man now heard but. Lasted my coming uneasy marked so should. Gravity letters it amongst herself dearest an windows by. Wooded ladies she basket.</p>
                    <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-6 md:leading-7 lg:leading-9">There are many variations of passages of Lorem Ipsum available, but the to a majority have suffered alteration in some form, by injected humour, or find randomised words which don't look even slightly believable.</p>
                    <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-6 md:leading-7 lg:leading-9">Over 20 years’ experience providing top quality house Booking rant and sell for your Amazing Dream & Make you Happy.</p>
                </div>
                <div className="flex-1">
                    <img className="mx-auto" src="https://quomodosoft.com/html/reservq/assets/images/thumb/about-thumb.png" alt="" />
                </div>
            </section>
            <section className="mt-20 md:mt-20 lg:mt-24 mx-4 font-primary space-y-4 lg:space-y-6">
                <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold">WHY CHOOSE US</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="p-7  duration-700 space-y-2 border-b-4">
                        <MdOutlineRoomService className="text-6xl"></MdOutlineRoomService>
                        <h1 className='text-xl md:text-2xl font-bold'>CRAFTSMANSHIP</h1>
                        <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-6 md:leading-7 lg:leading-8 font-medium">Indulge in culinary masterpieces crafted with passion and precision, using only the finest ingredients for an extraordinary dining experience.</p>
                    </div>
                    <div className="p-7 duration-700  border-b-4  space-y-2">
                        <GiFarmer className="text-5xl"></GiFarmer>
                        <h1 className='text-xl md:text-2xl font-bold'>FARM FRESHNESS</h1>
                        <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-5 md:leading-7 lg:leading-8 font-medium">Savor the freshness of locally sourced ingredients, supporting local farmers while ensuring each dish is a delicious and sustainable delight.</p>
                    </div>
                    <div className="p-7 duration-700  border-b-4  space-y-2">
                        <MdOutlineInsertInvitation className="text-5xl"></MdOutlineInsertInvitation>
                        <h1 className='text-xl md:text-2xl font-bold'>INVITING AMBIANCE</h1>
                        <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-5 md:leading-7 lg:leading-8 font-medium">Immerse yourself in our thoughtfully designed, cozy setting—a perfect backdrop for intimate dinners, celebrations, or casual gatherings.</p>
                    </div>
                    <div className="p-7 duration-700  border-b-4  space-y-2">
                        <RiCustomerService2Line className="text-5xl"></RiCustomerService2Line>
                        <h1 className='text-xl md:text-2xl font-bold'>EXCEPTIONAL SERVICE</h1>
                        <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-5 md:leading-7 lg:leading-8 font-medium">Enjoy attentive and friendly service from our dedicated staff, making every visit a memorable and enjoyable experience and local initiatives.</p>
                    </div>
                    <div className="p-7 duration-700  border-b-4  space-y-2">
                        <BsMenuDown className="text-5xl"></BsMenuDown>
                        <h1 className='text-xl md:text-2xl font-bold'>DIVERSE MENUS</h1>
                        <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-5 md:leading-7 lg:leading-8 font-medium">Explore our extensive menu offering a variety of culinary delights, catering to all tastes, including traditional favorites and innovative flavors.</p>
                    </div>
                    <div className="p-7 duration-700  border-b-4  space-y-2">
                        <RiCommunityLine className="text-5xl"></RiCommunityLine>
                        <h1 className='text-xl md:text-2xl font-bold'>Community</h1>
                        <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-5 md:leading-7 lg:leading-8 font-medium">Beyond being a restaurant, we're a community hub. Support a business deeply connected to the neighborhood through partnerships, events.</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUsPage;