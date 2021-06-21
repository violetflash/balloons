import React from 'react';
import NavBar from "./Components/NavBar/Navbar";
import Products from "./Components/Pages/ProductsPage/Products/Products";
import GlobalStyles from "./Components/Elements/GlobalStyles/GlobalStyles";
import Banner from './Components/Pages/ProductsPage/Banner/Banner';
import ModalProduct from "./Components/Pages/ProductsPage/ModalProduct/ModalProduct";
import Cart from "./Components/Checkout/Cart/Cart";
import UseOpenItemState from "./Components/Hooks/UseOpenItemState/UseOpenItemState";
import UseOpenOrderState from "./Components/Hooks/UseOpenOrderState/UseOpenOrderState";
import UseOrdersState from "./Components/Hooks/UseOrdersState/UseOrdersState";
import OrderItemsCounterState from "./Components/Hooks/OrderItemsCounterState/OrderItemsCounterState";
import AddToCartPopupElem from "./Components/Elements/AddToCartPopupElem/AddToCartPopupElem";
import AddToCartPopupState from "./Components/Hooks/AddToCartPopupState/AddToCartPopupState";
import Footer from "./Components/Elements/Footer/Footer";
import NavActiveIndexState from "./Components/Hooks/NavActiveIndexState/NavActiveIndexState";
import About from "./Components/Pages/About/About";



const App = () => {

    //Хуки
    const openItemState = UseOpenItemState();
    const openOrderState = UseOpenOrderState();
    const orders = UseOrdersState();
    const orderItemsCounter = OrderItemsCounterState();
    const orderPopup = AddToCartPopupState();
    const indexState = NavActiveIndexState();

    return (
        <React.Fragment>
            <GlobalStyles />
            <NavBar {...openOrderState} {...orderItemsCounter} {...indexState} {...orders}/>
            {indexState.activeIndex === 0 && <>
                <Banner />
                <Products {...openItemState} />
                <Footer/>
            </>}
            {indexState.activeIndex === 1 && <About />}
            {openItemState.openItem && <ModalProduct {...openItemState} {...orders} {...orderItemsCounter} {...orderPopup}/>}
            {openOrderState.openOrder && <Cart {...openOrderState} {...orders} {...orderItemsCounter}/>}
            {orderPopup.addToCartPopup && <AddToCartPopupElem  {...orderPopup}/>}

        </React.Fragment>
    );

};

export default App;
