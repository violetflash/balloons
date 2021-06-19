import React from 'react';
import Button from '../Button/Button';
import styled from 'styled-components';
import OrderItem from "../OrderItem/OrderItem";
import Footer from "../Footer/Footer";

// const Overlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 100;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
// `;
//
// const Modal = styled.div`
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   background-color: Cornsilk;
//   width: 100%;
//   padding: 0 0 40px;
//   height: calc(100% - 100px);
//   //min-height: 70vh;
//   border-radius: 10px;
//   z-index: 100;
//   box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
// `;

const Order = styled.div`
  position: relative;
  margin-top: 100px;
  height: 100%;
  //min-height: calc(100% - 100px);
  //display: flex;
  //align-items: center;
  //justify-content: center;
  //flex-direction: column;
  overflow-x: hidden;

`;

const Wrapper = styled.div`
  min-height: calc(100% - 106px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Content = styled.div`
  width: 100%;
  flex: 1 0 auto;
  padding: 0 40px;
  //max-height: 60vh;
  font-size: 16px;

`;

const Close = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before,
  &::after {
    position: absolute;
    content: '';
    width: 40px;
    height: 4px;
    background-color: #f1dbaf;
    border-radius: 10px;
    transform: rotate(45deg);
    transition: all 0.2s;
  }

  &::before {
    transform: rotate(-45deg);
  }

  &:hover {
    &::before,
    &::after {
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
`;

const Title = styled.h1`
  //background-color: rgba(79,42,109,0.4);
  //background-color: palevioletred;
  //color: #fff;
  width: 100%;
  padding: 20px 40px;
  margin-bottom: 20px;
  text-align: center;
`;

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
  background-color: rgba(79, 42, 109, 0.3);
  padding: 20px 40px;
  //max-width: 100%;
  max-width: 1200px;
  margin: 0 auto 40px;
  width: 100%;
  
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
  min-width: 45px;
  text-align: right;
`;

const TotalSum = styled.span`
  text-align: right;
  min-width: 150px;
  margin: 0 60px 0 20px;
`;

const EmptyList = styled.div`

`;


const MainFooter = styled.div`
  flex: 0 0 auto;
  width: 100%;
`;

const Checkout = (
    {
        setOpenOrder, orders,
        mainPageOpen, setMainPageOpen,
    }) => {

    const closeCheckout = (e) => {
        if (e.target.id === 'closeBtn') {
            setMainPageOpen(true);
            setOpenOrder(null);
        }
    };

    return (
        <Order id="checkout" onClick={closeCheckout}>
            <Close id="closeBtn"/>
            <Title>Ваш Заказ</Title>
            <Wrapper>
                <Content>
                    {orders.length ?
                        <OrderList>
                            {orders.map((item, index) => <OrderItem key={item.id} order={item} index={index + 1}/>)}
                        </OrderList> :
                        <EmptyList>Вы ничего не добавили в корзину</EmptyList>
                    }
                    <Total>
                        <span>Итого:</span>
                        <TotalQuantity>5</TotalQuantity>
                        <TotalSum>35850 руб.</TotalSum>
                    </Total>
                    <CheckoutFooter>
                        <Button text="Оформить Заказ"/>
                    </CheckoutFooter>
                </Content>

                <MainFooter>
                    <Footer/>
                </MainFooter>
            </Wrapper>
        </Order>
    );

};

export default Checkout;
