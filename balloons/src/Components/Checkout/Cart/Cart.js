import React from 'react';
import Button from '../../Elements/Button/Button';
import styled from 'styled-components';
import OrderItem from "../CartItem/CartItem";
import Footer from "../../Elements/Footer/Footer";
import { getTotalQuantity, getTotalCartSum, rubCurrencyPrice } from "../../utils/utils";


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
  min-height: calc(100% - 110px);
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

const MainFooter = styled.div`
  flex: 0 0 auto;
  width: 100%;
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
  position:relative;
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

`;



const Cart = (
    {
        orders,
    }) => {


    return (
        <Order id="checkout" >
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
                        <TotalQuantity>{getTotalQuantity(orders)}</TotalQuantity>
                        <TotalSum>{rubCurrencyPrice(getTotalCartSum(orders))}</TotalSum>
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

export default Cart;
