import React from 'react';
import styled from 'styled-components';

const Popup = styled.article`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 25px;
  font-size: 16px;
  //background-color: #FFFBEC;
  background-color: #83698c;
  color: white;
  border-radius: 10px;
  //border: 2px solid #ccc;
  max-width: 350px;
  text-align: center;
  line-height: 1.7;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  z-index: 101;

`;

const Item = styled.span`
  display:block;
  position: relative;
  padding: 0 5px;
  font-size: 20px;
  border-radius: 4px;
  //color: palevioletred;
  text-align: center;
  color: black;
  margin: 10px 0;
  background-color: #f1dada;

  //&::before {
  //  position: absolute;
  //  content: '';
  //  width: 100%;
  //  height: 1px;
  //  background-color: palevioletred;
  //  bottom: -2px;
  //  left: 0;
  //}
`;

const AddToCartPopupElem = ({ addToCartPopup }) => {
    return (
        <Popup>Товар <Item>"{addToCartPopup.name}"</Item> добавлен в корзину.</Popup>
    )

};

export default AddToCartPopupElem;