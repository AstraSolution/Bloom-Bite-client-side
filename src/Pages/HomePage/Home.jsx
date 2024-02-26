import Banner from '../../Components/Header/Banner/Banner'
import Cards from '../../Components/Cards/Cards';
import Subscribe from '../../Components/Subscribe/Subscribe';
import CardDetails from '../../Components/CardDetails/CardDetails';
import SpecialOffer from '../../Components/SPECIAL OFFER/SpecialOffer';


const Home = () => {

    return (
        <div className=''>
            <Banner></Banner>
            <Cards></Cards>
            <section>
                <Subscribe></Subscribe>
            </section>
            <CardDetails></CardDetails>
            <SpecialOffer></SpecialOffer>
        </div>
    );
};

export default Home;
