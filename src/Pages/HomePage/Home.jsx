import Banner from '../../Components/Header/Banner/Banner'
import Cards from '../../Components/Cards/Cards';
import Subscribe from '../../Components/Subscribe/Subscribe';


const Home = () => {

    return (
        <div className=''>
            <Banner></Banner>
            <Cards></Cards>
            <section>
                <Subscribe></Subscribe>
            </section>
        </div>
    );
};

export default Home;
