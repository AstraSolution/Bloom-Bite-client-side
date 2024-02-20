import Loading from "../../Components/Loading/Loading";
import MenuList from "../../Components/Menu List/MenuList";
import TitleBanner from "../../Shared/Title Banner/TitleBanner";

const Menu = () => {
    return (
        <>
            <section>
                <TitleBanner Title={'MENU'} Track={'HOME > MENU'}></TitleBanner>
            </section>

            <section>
                <MenuList></MenuList>
            </section>
            <section>
                <Loading></Loading>
            </section>
        </>
    );
};

export default Menu;