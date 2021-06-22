import React from 'react';
import NavBar from "./Components/NavBar/Navbar";
import Products from "./Components/Pages/ProductsPage/Products/Products";
import GlobalStyles from "./Components/Elements/GlobalStyles/GlobalStyles";
import ModalProduct from "./Components/Pages/ProductsPage/ModalProduct/ModalProduct";
import Cart from "./Components/Checkout/Cart/Cart";
import UseOpenItemState from "./Components/Hooks/UseOpenItemState/UseOpenItemState";
import UseOrdersState from "./Components/Hooks/UseOrdersState/UseOrdersState";
import OrderItemsCounterState from "./Components/Hooks/OrderItemsCounterState/OrderItemsCounterState";
import AddToCartPopupElem from "./Components/Elements/AddToCartPopupElem/AddToCartPopupElem";
import AddToCartPopupState from "./Components/Hooks/AddToCartPopupState/AddToCartPopupState";
import NavActiveIndexState from "./Components/Hooks/NavActiveIndexState/NavActiveIndexState";
import About from "./Components/Pages/About/About";
import Shipping from "./Components/Pages/Shipping/Shipping";
import Contacts from "./Components/Pages/Contacts/Contacts";



const App = () => {

    //Хуки
    const openItemState = UseOpenItemState();
    const orders = UseOrdersState();
    const orderItemsCounter = OrderItemsCounterState();
    const orderPopup = AddToCartPopupState();
    const indexState = NavActiveIndexState();

    return (
        <React.Fragment>
            <GlobalStyles />
            <NavBar {...orderItemsCounter} {...indexState} {...orders}/>
            {indexState.activeIndex === 0 && <Products {...openItemState} {...orders}/>}
            {indexState.activeIndex === 1 && <About />}
            {indexState.activeIndex === 2 && <Shipping />}
            {indexState.activeIndex === 3 && <Contacts />}
            {openItemState.openItem && <ModalProduct {...openItemState} {...orders} {...orderItemsCounter} {...orderPopup}/>}
            {indexState.activeIndex === 4 && <Cart  {...orders} {...indexState}/>}
            {orderPopup.addToCartPopup && <AddToCartPopupElem  {...orderPopup}/>}

        </React.Fragment>
    );

};

export default App;
