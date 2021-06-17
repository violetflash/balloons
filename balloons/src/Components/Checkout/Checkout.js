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
  width: 80vw;
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
  margin-bottom: 40px;
  max-width: 100%;
  width: 100%;

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


const Checkout = ({openOrder, setOpenOrder}) => {

    const closeModal = (e) => {
        if (e.target.id === 'overlay' || e.target.id === 'closeBtn') {
            setOpenOrder(null);
        }
    };

    if (!openOrder) {
        return null;
    }

    return (
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <Close id="closeBtn"/>
                <Title>Ваш Заказ</Title>
                <Content>
                    <OrderList>
                        <OrderItem/>
                        <OrderItem/>
                        <OrderItem/>
                    </OrderList>
                    <Total>
                        <span>Итого:</span>
                        <span>5</span>
                        <span>850 р.</span>
                    </Total>
                </Content>
                <Footer>
                    <Button text="Оформить покупку"/>
                </Footer>
            </Modal>
        </Overlay>
    );

};

export default Checkout;
