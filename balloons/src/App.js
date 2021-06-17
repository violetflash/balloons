import React from 'react';
import NavBar from "./Components/NavBar/Navbar";
import Menu from "./Components/Menu/Menu";
import GlobalStyles from "./Components/GlobalStyles/GlobalStyles";
import Banner from './Components/Banner/Banner';
import ModalItem from "./Components/ModalItem/ModalItem";
import Checkout from "./Components/Checkout/Checkout";



const App = () => {

    //openItem - будет содержать данные о товаре, который откроется в модальном окне.
    //ф-ия setOpenItem - будет назначать, какой это будет товар (по которому кликнули) и будет запускать перерендер
    // компонента
    const [openItem, setOpenItem] = React.useState(null);
    const [openOrder, setOpenOrder] = React.useState(null);



    return (
        <React.Fragment>
            <GlobalStyles />
            <NavBar openOrder={openOrder} setOpenOrder={setOpenOrder}/>
            {/*<Order openOrder={openOrder}/>*/}
            <Banner />
            <Menu setOpenItem={setOpenItem}/>
            <ModalItem openItem={openItem} setOpenItem={setOpenItem}/>
            <Checkout openOrder={openOrder} setOpenOrder={setOpenOrder}/>
        </React.Fragment>
    );

};

export default App;
