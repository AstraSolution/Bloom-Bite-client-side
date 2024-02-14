
import Banner from '../../Components/Header/Banner/Banner'
import WhyUs from '../../Components/WhyUs/WhyUs';
import Cards from '../../Components/Cards/Cards';
import CardDetails from '../../Components/CardDetails/CardDetails';


const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <WhyUs></WhyUs>
            <Cards></Cards>
            <CardDetails></CardDetails>
        </div>
    );
};

export default Home;
