import { useLoaderData } from 'react-router-dom';
import Banner from '../../Components/Header/Banner/Banner'
import WhyUs from '../../Components/WhyUs/WhyUs';
import Faq from '../FAQ/Faq';


const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <WhyUs></WhyUs>
            <Faq></Faq>
        </div>
    );
};

export default Home;
