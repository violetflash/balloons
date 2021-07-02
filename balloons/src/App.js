import React from 'react';
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';
import useAuth from "./Components/Hooks/useAuth/useAuth";
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
import TitleState from "./Components/Hooks/TitleState/TitleState";
import useFDB from "./Components/Hooks/useFDB/useFDB";
import Context from "./Components/utils/Context";

const firebaseConfig = {
    apiKey: "AIzaSyARo7yq3MZQXVoHskgOi5FIPHr0BcFO0v4",
    authDomain: "balloons-aac5a.firebaseapp.com",
    databaseURL: "https://balloons-aac5a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "balloons-aac5a",
    storageBucket: "balloons-aac5a.appspot.com",
    messagingSenderId: "346056313266",
    appId: "1:346056313266:web:36306a498b582b94663cab"
};

firebase.initializeApp(firebaseConfig);

const App = () => {

    //Хуки
    const openItemState = UseOpenItemState();
    const orders = UseOrdersState();
    const orderItemsCounter = OrderItemsCounterState();
    const orderPopup = AddToCartPopupState();
    const indexState = NavActiveIndexState();
    const auth = useAuth(firebase.auth);
    TitleState(openItemState.openItem);
    const firebaseDatabase = firebase.database();

    const fdb = useFDB(firebaseDatabase);

    return (
        <Context.Provider value={{
            auth,
            openItemState,
            orders,
            orderItemsCounter,
            indexState,
            orderPopup,
            firebaseDatabase,
            fdb
        }}>
            <GlobalStyles />
            <NavBar/>
            {indexState.activeIndex === 0 && <Products />}
            {indexState.activeIndex === 1 && <About />}
            {indexState.activeIndex === 2 && <Shipping />}
            {indexState.activeIndex === 3 && <Contacts />}
            {openItemState.openItem && <ModalProduct />}
            {indexState.activeIndex === 4 && <Cart />}
            {orderPopup.addToCartPopup && <AddToCartPopupElem />}
        </Context.Provider>
    );

};

export default App;
