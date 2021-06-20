import React from 'react';
import NavBar from "./Components/NavBar/Navbar";
import Products from "./Components/Products/Products";
import GlobalStyles from "./Components/GlobalStyles/GlobalStyles";
import Banner from './Components/Banner/Banner';
import ModalItem from "./Components/ModalItem/ModalItem";
import Checkout from "./Components/Checkout/Checkout";
import UseOpenItemState from "./Components/Hooks/UseOpenItemState/UseOpenItemState";
import UseOpenOrderState from "./Components/Hooks/UseOpenOrderState/UseOpenOrderState";
import UseOrdersState from "./Components/Hooks/UseOrdersState/UseOrdersState";
import OrderItemsCounterState from "./Components/Hooks/OrderItemsCounterState/OrderItemsCounterState";
import AddToCartPopupElem from "./Components/AddToCartPopupElem/AddToCartPopupElem";
import AddToCartPopupState from "./Components/Hooks/AddToCartPopupState/AddToCartPopupState";
import MainPageState from "./Components/Hooks/MainPageState/MainPageState";
import Footer from "./Components/Footer/Footer";
import NavActiveIndexState from "./Components/Hooks/NavActiveIndexState/NavActiveIndexState";



const App = () => {

    //Хуки
    const openItemState = UseOpenItemState();
    const openOrderState = UseOpenOrderState();
    const orders = UseOrdersState();
    const orderItemsCounter = OrderItemsCounterState();
    const orderPopup = AddToCartPopupState();
    const mainPageStatus = MainPageState();
    const indexState = NavActiveIndexState();



    return (
        <React.Fragment>
            <GlobalStyles />
            <NavBar {...openOrderState} {...orderItemsCounter} {...mainPageStatus} {...indexState}/>
            {mainPageStatus.mainPageOpen && <Banner />}
            {mainPageStatus.mainPageOpen && <Products {...openItemState} />}
            {openItemState.openItem && <ModalItem {...openItemState} {...orders} {...orderItemsCounter} {...orderPopup}/>}
            {openOrderState.openOrder && <Checkout {...openOrderState} {...orders} {...orderItemsCounter} {...mainPageStatus}/>}
            {orderPopup.addToCartPopup && <AddToCartPopupElem  {...orderPopup}/>}
            {mainPageStatus.mainPageOpen && <Footer/>}
        </React.Fragment>
    );

};

export default App;
