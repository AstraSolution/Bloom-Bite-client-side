import { useLoaderData } from 'react-router-dom';
import Banner from '../../Components/Header/Banner/Banner'
import WhyUs from '../../Components/WhyUs/WhyUs';
import Test from '../../Components/test/test';


const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Test></Test>
            <WhyUs></WhyUs>
        </div>
    );
};

export default Home;
