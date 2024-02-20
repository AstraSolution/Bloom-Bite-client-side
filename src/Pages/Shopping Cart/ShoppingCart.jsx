// ------------------------------ //
// --------Imported Items-------- //
// ------------------------------ //

import Cart from "../../Components/Cart/Cart";
import TitleBanner from "../../Shared/Title Banner/TitleBanner";




const ShoppingCart = () => {
    return (
        <>
            <section className="mx-auto font-primary">
                <TitleBanner Title={`SHOPPING CART`} Track={`HOME > SHOPPING CART`}></TitleBanner>
            </section>
            <section className="font-primary">
                <Cart></Cart>
            </section>
        </>
    );
};

export default ShoppingCart;