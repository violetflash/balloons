import React from 'react';
import styled from 'styled-components';
import Delete from '../../images/delete.png';

const DeleteBtn = styled.button`
  position:relative;
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
    background-color:#fff;
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;  
  margin-bottom: 15px;
  border: 1px solid #ccc;
  
  span {
    margin-right: 15px;
  }
  
`;

const OrderItem = props => {
    return (
        <Item>
            <span>Леди Баг</span>
            <span>10</span>
            <span>62 руб.</span>
            <DeleteBtn />
        </Item>

    )

};

export default OrderItem;