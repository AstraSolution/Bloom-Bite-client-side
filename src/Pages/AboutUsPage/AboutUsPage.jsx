// ------------------------------ //
// --------Imported Items-------- //
// ------------------------------ //

import TitleBanner from "../../Shared/Title Banner/TitleBanner";
import Construction from "../../Shared/Construction/Construction";
import Testimonial from "../../Components/Testimonial/Testimonial";
import OurStory from "../../Components/Our Story/OurStory";
import WhyUs from "../../Components/Why Us/WhyUs";
import OurExperts from "../../Components/Our Experts/OurExperts";

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
                <OurExperts></OurExperts>
            </section>
            <section>
                <Testimonial></Testimonial>
            </section>
        </>
    );
};

export default AboutUsPage;