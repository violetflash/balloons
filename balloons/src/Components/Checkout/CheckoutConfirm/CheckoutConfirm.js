import React from 'react';
import styled from 'styled-components'
import { Overlay } from "../../Pages/ProductsPage/ModalProduct/ModalProduct";

const Modal = styled.div`
  max-width: 300px;
  width: 100%;
  min-height: 200px;
  display: flex;
  align-items: center;
  //justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  padding: 20px;
  background-color: #FFFBEC;
  z-index: 100;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

const Ok = styled.button`
  border: none;
  background-color: teal;
  color: #fff;
  border-radius: 5px;
  padding: 10px;
  cursor:pointer;
`;

const Title = styled.h2`
    margin-bottom: 40px;
    
`;

const CheckoutConfirm = ({ setOpenOrderConfirm, setActiveIndex }) => {

    const btnHandler = () => {
        setOpenOrderConfirm(null);
        setActiveIndex(0);
    };

    return (
        <Overlay>
            <Modal>
                <Title>Заказ принят!</Title>
                <Ok onClick={btnHandler}>Ясно понятно</Ok>
            </Modal>
        </Overlay>
    );

};

export default CheckoutConfirm;
