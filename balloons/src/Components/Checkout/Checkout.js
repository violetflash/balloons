import React from 'react';
import Button from '../Button/Button';
import styled from 'styled-components';
import OrderItem from "../OrderItem/OrderItem";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: Cornsilk;
  width: 80%;
  padding: 20px 40px;
  //height: 600px;
  //min-height: 70vh;
  border-radius: 10px;
  z-index: 100;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

const Content = styled.div`
  width: 100%;
  flex-grow: 1;
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
  margin-bottom: 40px;
  text-align: center;
`;

const OrderList = styled.ul`
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`;

const Total = styled.div`
  display: flex;
  margin: 0 40px 40px 0;
  max-width: 100%;
  //width: 100%;

  & span:first-child {
    flex-grow: 1;
  }


`;


const Footer = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

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
  margin: 0 20px;
`;

const EmptyList = styled.div`
  
`;


const Checkout = ({setOpenOrder, orders}) => {

    const closeModal = (e) => {
        if (e.target.id === 'overlay' || e.target.id === 'closeBtn') {
            setOpenOrder(null);
        }
    };

    return (
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <Close id="closeBtn"/>
                <Title>Ваш Заказ</Title>
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
                </Content>
                <Footer>
                    <Button text="Оформить Заказ"/>
                </Footer>
            </Modal>
        </Overlay>
    );

};

export default Checkout;
