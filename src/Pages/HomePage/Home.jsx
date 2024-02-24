import Banner from '../../Components/Header/Banner/Banner'
import Cards from '../../Components/Cards/Cards';
import Subscribe from '../../Components/Subscribe/Subscribe';
import CardDetails from '../../Components/CardDetails/CardDetails';
import Map from '../../Components/Map/Map';
import News from '../../Components/News/News';


const Home = () => {

    return (
        <div className=''>
            <Banner></Banner>
            <Cards></Cards>
            <section>
                <Subscribe></Subscribe>
            </section>
            <CardDetails></CardDetails>

            <section>
                <Map></Map>
            </section>
            <section>
                <News></News>
            </section>
        </div>
    );
};

export default Home;
