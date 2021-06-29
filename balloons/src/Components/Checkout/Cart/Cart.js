import React from 'react';
import Button from '../../Elements/Button/Button';
import styled from 'styled-components';
import CartItem from "../CartItem/CartItem";
import Footer from "../../Elements/Footer/Footer";
import { getTotalQuantity, getTotalCartSum, rubCurrencyFormat, projection } from "../../utils/utils";
import { Wrapper, Content, MainFooter, MainTitle } from "../../Elements/PageElements/PageElements";


const OrderList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto 40px;
`;

const Total = styled.div`
  display: flex;
  //padding: 0 40px;
  //background-color: rgba(79, 42, 109, 0.3);
  background-color: rgba(241, 207, 166, 0.4);
  box-shadow: inset 0 15px 30px cornsilk, 0 2px 9px rgb(0 0 0 / 22%);
  padding: 20px 40px;
  //max-width: 100%;
  max-width: 1200px;
  margin: 0 auto 40px;
  width: 100%;
  font-weight: 700;
  font-size: 22px;


  margin-bottom: 30px;

  & span:first-child {
    flex-grow: 1;
    text-align: center;
  }
`;

const CheckoutFooter = styled.footer`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 50px;
  padding: 0 40px;

  div {
    margin: 0;
  }
`;

const TotalQuantity = styled.span`
  position: relative;
  min-width: 45px;
  text-align: right;
  padding-right: 40px;

  &::after {
    position: absolute;
    content: 'шт.';
    right: 0;
  }
`;

const TotalSum = styled.span`
  text-align: right;
  //min-width: 150px;
  font-size: 22px;
  min-width: 200px;
  //margin: 0 60px 0 20px;
`;

const EmptyList = styled.div`
  padding: 15px 0;
  text-align: center;
  margin-bottom: 40px;
`;


const dataRules = {
    name: ['name'],
    type: ['type', item => item ? item : ''],
    subType: ['subType', item => item ? item : ''],
    price: ['price'],
    count: ['count'],
    adds: ['adds', arr => arr.filter(item => item.checked).map(obj => obj.name),
        arr => arr.length ? arr : 'Без допов'],
    choice: ['choice', item => item.option, item => item ? item : 'Без опций']
};

const Cart = (
    {
        orders, setOrders,
        setOrderItemsCounter, orderItemsCounter,
        setOpenItem,
        authentication, login, firebaseDatabase
    }) => {

    const fdb = firebaseDatabase();

    const sendOrder = () => {
        console.log('orders', orders);
        const newOrder = orders.map(projection(dataRules));
        console.log('New orders', newOrder);

        fdb.ref('orders').push().set({
            customerName: authentication.displayName,
            email: authentication.email,
            order: newOrder
        });
        setOrders([]);
    };

    const checkoutHandler = () => {
        sendOrder();
    };

    return (
        <Wrapper id="checkout">
            <Content>
                <MainTitle>Ваш Заказ</MainTitle>
                {orders.length ?
                    <OrderList>
                        {orders.map((item, index) => (
                            <CartItem
                                key={item.id + '' + index}
                                order={item}
                                counter={index + 1}
                                index={index}
                                orders={orders}
                                setOrders={setOrders}
                                orderItemsCounter={orderItemsCounter}
                                setOrderItemsCounter={setOrderItemsCounter}
                                setOpenItem={setOpenItem}
                            />
                        ))}
                    </OrderList> :
                    <EmptyList>Вы пока ничего не добавили в корзину...</EmptyList>
                }
                <Total>
                    <span>Итого:</span>
                    <TotalQuantity>{getTotalQuantity(orders)}</TotalQuantity>
                    <TotalSum>{rubCurrencyFormat(getTotalCartSum(orders))}</TotalSum>
                </Total>
                <CheckoutFooter>
                    {orders.length > 0 &&
                    <Button text="Оформить Заказ" onClick={authentication ? checkoutHandler : login}/>}
                </CheckoutFooter>
            </Content>

            <MainFooter>
                <Footer/>
            </MainFooter>
        </Wrapper>

    );

};

export default Cart;
