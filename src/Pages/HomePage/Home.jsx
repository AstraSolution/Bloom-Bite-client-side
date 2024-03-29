import Banner from '../../Components/Header/Banner/Banner'
import Cards from '../../Components/Cards/Cards';
import Subscribe from '../../Components/Subscribe/Subscribe';
import CardDetails from '../../Components/CardDetails/CardDetails';


const Home = () => {

    return (
        <div className=''>
            <Banner></Banner>
            <Cards></Cards>
            <section>
                <Subscribe></Subscribe>
            </section>
            <CardDetails></CardDetails>
        </div>
    );
};

export default Home;
