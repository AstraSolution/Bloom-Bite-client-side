import Reservation from "../../Components/Reservation/Reservation";
import TitleBanner from "../../Shared/Title Banner/TitleBanner";

const Reserve = () => {
    return (
        <>
            <section>
                <TitleBanner Title={`RESERVE`} Track={`HOME > RESERVE`}></TitleBanner>
            </section>
            <section className="mx-4">
                <Reservation></Reservation>
            </section>
            
        </>
    );
};

export default Reserve;