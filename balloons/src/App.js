import React from 'react';
import NavBar from "./Components/NavBar/Navbar";
import Menu from "./Components/Menu/Menu";
import GlobalStyles from "./Components/GlobalStyles/GlobalStyles";
import Banner from './Components/Banner/Banner';
import ModalItem from "./Components/ModalItem/ModalItem";
import Checkout from "./Components/Checkout/Checkout";
import UseOpenItemState from "./Components/Hooks/UseOpenItemState/UseOpenItemState";
import UseOpenOrderState from "./Components/Hooks/UseOpenOrderState/UseOpenOrderState";
import UseOrdersState from "./Components/Hooks/UseOrdersState/UseOrdersState";
import OrderItemsCounterState from "./Components/Hooks/OrderItemsCounterState/OrderItemsCounterState";



const App = () => {

    //openItem - будет содержать данные о товаре, который откроется в модальном окне.
    //ф-ия setOpenItem - будет назначать, какой это будет товар (по которому кликнули) и будет запускать перерендер
    // компонента
    //Хуки
    const openItemState = UseOpenItemState();
    const openOrderState = UseOpenOrderState();
    const orders = UseOrdersState();
    const orderItemsCounter = OrderItemsCounterState();



    return (
        <React.Fragment>
            <GlobalStyles />
            <NavBar {...openOrderState} {...orderItemsCounter}/>
            <Banner />
            <Menu {...openItemState} /> {/*JSX SPREAD ATTRIBUTE PATTERN*/}
            {openItemState.openItem && <ModalItem {...openItemState} {...orders} {...orderItemsCounter}/>}
            {openOrderState.openOrder && <Checkout {...openOrderState} {...orders} {...orderItemsCounter}/>}
        </React.Fragment>
    );

};

export default App;
