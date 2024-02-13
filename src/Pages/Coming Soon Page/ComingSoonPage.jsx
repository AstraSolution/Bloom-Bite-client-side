import "./style.css"
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

const ComingSoonPage = () => {
    return (
        <>
            <section className="min-h-screen container mx-auto flex justify-center items-center">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:mx-auto font-primary">
                    <div className="flex-1 space-y-4 lg:space-y-6 text-center lg:text-left">
                        <h1 className=" text-xl md:text-3xl lg:text-4xl font-bold">The Page Under Construction</h1>
                        <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-5 md:leading-7 lg:leading-8 font-medium">Our website is currently undergoing scheduled maintenance. We Should be back shortly. Thank you for you patience.</p>
                        <div className="container-normal">
                            <FlipClockCountdown 
                            className="flip-clock"
                            to={new Date().getTime() + 24 * 3600 * 1000 + 5000 }
                            lebels={["DAYS", 'HOURS', 'MINUTES', 'SECONDS']}
                            duration={0.5}
                            >

                            </FlipClockCountdown>
                        </div>
                        <button className="py-3 px-10 lg:py-4 lg:px-12 border-2 rounded-md text-[12px] md:text-[14px] lg:text-[16px] ">GO BACK</button>
                        <button className="py-3 px-10 lg:py-4 lg:px-12 border-2 rounded-md text-[12px] md:text-[14px] lg:text-[16px] ml-6">NOTIFY US</button>
                    </div>
                    <div className="flex-1">
                        <img className="w-full mx-auto" src="https://i.ibb.co/4gD6C1y/ezgif-6-6607551ce8.gif" alt="" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default ComingSoonPage;