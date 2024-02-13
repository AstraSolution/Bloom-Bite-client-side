// ------------------------------ //
// --------Imported Items-------- //
// ------------------------------ //

import { RiCommunityLine } from "react-icons/ri";
import { BsMenuDown } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdOutlineRoomService } from "react-icons/md";
import { GiFarmer } from "react-icons/gi";
import { MdOutlineInsertInvitation } from "react-icons/md";





const WhyUs = () => {
    return (
        <>
            <div className="mt-20 md:mt-20 lg:mt-24 mx-4 font-primary space-y-4 lg:space-y-6">
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
            </div>
        </>
    );
};

export default WhyUs;