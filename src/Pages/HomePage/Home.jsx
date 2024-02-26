import { useLoaderData } from 'react-router-dom';
import Banner from '../../Components/Header/Banner/Banner'
import WhyUs from '../../Components/WhyUs/WhyUs';
import Faq from '../FAQ/Faq';
import SliderSwiper from '../../Components/Slider/SliderSwiper';
import FoodList from '../FoodList/FoodList';
import TimeSection from '../TimeSection/TimeSection';



const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <WhyUs></WhyUs>
            <Faq></Faq>
            <SliderSwiper></SliderSwiper>
            <FoodList></FoodList>
            <TimeSection></TimeSection>
        </div>
    );
};

export default Home;
