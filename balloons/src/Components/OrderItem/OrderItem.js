import React from 'react';
import styled from 'styled-components';
import Delete from '../../images/delete.png';

const DeleteBtn = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 30px;
  padding: 0;
  border: none;
  background-color: transparent;
  background-image: url(${Delete});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;

  &::before {
    position: absolute;
    content: 'Удалить';
    right: -170%;
    padding: 5px;
    background-color: #fff;
    border: 1px solid #CCCCCC;
    visibility: hidden;
    opacity: 0;
    border-radius: 10px;
    transition: all 0.3s ease;
  }

  &:hover {
    &::before {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const Item = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px 0 10px 20px;
  border-bottom: 1px solid #ccc;
  
  &::before {
    position: absolute;
    content: attr(data-index);
    left: 0;
  }
`;

const Image = styled.img`
  display: inline-block;
  width: 40px;
  height: 40px;
  margin-left: 30px;

`;

const Name = styled.span`
  flex-grow: 1;
  margin-left: 30px;
`;

const Quantity = styled.span`
  margin-right: 20px;
  min-width: 45px;
  text-align: right;
`;

const Price = styled.span`
  margin-right: 20px;
  min-width: 150px;
  text-align:right;
`;

const OrderItem = ({ order, index }) => {
    return (
        <Item data-index={index + ')'}>
            <Image src={order.img}/>
            <Name>{order.name}</Name>
            <Quantity>1</Quantity>
            <Price>{order.price} руб.</Price>
            <DeleteBtn/>
        </Item>

    );

};

export default OrderItem;
