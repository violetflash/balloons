import React from 'react';
import styled from 'styled-components';
import Delete from '../../../images/delete.png';
import { capitalizer, rubCurrencyFormat, calcRawProductTotal } from "../../utils/utils";

const DeleteBtn = styled.button`
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  right: 0;

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
  //flex-direction: column;
  align-items: center;
  //justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 10px 50px 10px 20px;
  border-bottom: 1px solid #ccc;
  
  &::before {
    position: absolute;
    content: attr(data-index);
    left: 0;
  }
`;

const ItemContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ItemTop = styled.div`
  display: flex;
  align-items: center;
  //margin-left: 20px;
  cursor: pointer;


`;

const ItemBottom = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 0 10px;
  font-size: 14px;
  padding-bottom: 5px;
`;




const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  //max-width: 400px;
  margin-right: 20px;
  flex-grow: 1;
`;

const Image = styled.div`
  position:relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  background-image: ${({img}) => `url(${img})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
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
    right: -220px;
    //bottom: 50%;
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
  font-weight: 700;
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
  min-width: 90px;
  text-align:right;
`;

const VendorCode = styled.span`
  margin-left: 5px;
  font-size: 12px;
`;

const Total = styled.span`
  margin-left: 10px;
  //font-weight: 700;
  min-width: 100px;
  text-align:right;
`;

const Adds = styled.span`
  //width: 100%;
  margin-left: 5px;
  
  transform: skew(-5deg, 0deg);
  
  span {
    position:relative;
    margin-left: 5px;
    //background-color: #e5e5e5;
    background-color: #f9ebd1;

    padding: 5px;
   
  }
`;

const Choice = styled.span`
  background-color: #f9ebd1;
  //background-color: #e5e5e5;

  padding: 5px;
  margin-left: 5px;
  font-size: 14px;
  transform: skew(-5deg);
  //text-decoration:underline;
`;


const CartItem = (
    {
        order, counter, orders, setOrders, index,
        setOrderItemsCounter, orderItemsCounter,
        setOpenItem
    }) => {
    const adds = order.adds ? order.adds.filter(item => item.checked) : null;
    const addsCount = order.adds ? adds.length : null;
    const addPrice = Math.ceil(order.price * 0.1);
    const totalAddsSum = addPrice * addsCount * order.count;

    const deleteHandler = (idx) => {
        // const idx = orders.findIndex(elem => JSON.stringify(order) === JSON.stringify(elem));
        //  or
        // const newOrders = orders.filter((item, i) => i !== index);
        orders.splice(idx, 1);
        setOrders([...orders]);
        setOrderItemsCounter(orderItemsCounter - 1 > 0 ? orderItemsCounter - 1 : null);
    };

    return (
        <Item data-index={counter + ')'} >
            <Image src={order.img} img={order.img}/>
            <ItemContent>
                <ItemTop onClick={() => setOpenItem({...order, index})}>
                    <ItemInfo>
                        {order.type && <Type>{capitalizer(order.type)}</Type>}
                        {order.subType && <SubType>{order.subType}:</SubType>}
                        <Name>"{order.name}"</Name>
                        {order.choice.option && <Choice>- {order.choice.option}.</Choice> }
                        <VendorCode>(арт. {'000' + order.id})</VendorCode>
                    </ItemInfo>
                    <Quantity>{order.count}</Quantity>
                    <Price>{rubCurrencyFormat(order.price)}</Price>
                    <Total>{rubCurrencyFormat(calcRawProductTotal(order))}</Total>
                </ItemTop>
                {addsCount > 0 && <ItemBottom >
                    <ItemInfo>
                        <Adds>{adds.map((item, index) => <span key={index}>{item.name}</span>)}</Adds>
                    </ItemInfo>
                    {/*<Quantity>{addsCount}</Quantity>*/}
                    <Price>{rubCurrencyFormat(addPrice)}</Price>
                    <Total>{rubCurrencyFormat(totalAddsSum)}</Total>
                </ItemBottom>}
            </ItemContent>

            <DeleteBtn onClick={() => deleteHandler(index)}/>
        </Item>

    );

};

export default CartItem;
