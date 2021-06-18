import React from 'react';
import styled from 'styled-components';
import Delete from '../../images/delete.png';
import { capitalizer } from "../utils/utils";

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

const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  
  flex-grow: 1;
`;

const Image = styled.div`
  position:relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  background-image: ${({img}) => `url(${img})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  margin-left: 30px;
  cursor: zoom-in;
  
  &::before {
    position: absolute;
    content: '';
    width: 200px;
    height: 200px;
    background-image: ${({img}) => `url(${img})`};
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 1000;
    border-radius: 50%;
    opacity: 0;
    visibility: hidden;
    right: -200px;
    bottom: 50%;
    transition: all 0.3s ease-in-out;
  }
  
  &:hover {
    &::before {
      visibility: visible;
      opacity: 1;
    }
  }

`;

const Name = styled.span`
  margin-left: 10px;
`;

const Type = styled.span`
  margin-left: 10px;
`;

const SubType = styled.span`
  margin-left: 5px;
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
            <ItemInfo>
                <Image src={order.img} img={order.img}/>
                <Type>{capitalizer(order.type)}</Type>
                <SubType>{order.subType}:</SubType>
                <Name>"{order.name}"</Name>
            </ItemInfo>
            <Quantity>1</Quantity>
            <Price>{order.price} руб.</Price>
            <DeleteBtn/>
        </Item>

    );

};

export default OrderItem;
