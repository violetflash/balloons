import React, { useContext } from 'react';
import styled from 'styled-components';
import rusFlag from '../../../../images/rus.png';
import spainFlag from '../../../../images/spain.png';
import { rubCurrencyFormat } from "../../../utils/utils";
import Context from "../../../utils/Context";


const countries = {
    "Россия": rusFlag,
    "Испания": spainFlag
}

const List = styled.ul`
  margin-top: 20px;
  display: flex;
  margin-left: -30px;
  flex-wrap: wrap;
`;

const Name = styled.p`
  font-size: 16px;
  font-weight: 700;
  padding: 10px 0;
  color: #000;
  text-align: left;
  transition: all 0.3s ease-in-out;
`;

const Item = styled.figure`
  position: relative;
  width: 100%;
  height: 200px;
  margin: 0;
  background-color: #fff;
  background-image: url(${(({img}) => img)});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.3s ease-in-out;
  z-index: 1;
  color: #fff;
  text-align: left;
  

  //&::before {
  //  position: absolute;
  //  content: '';
  //  width: 100%;
  //  height: 100%;
  //  left: 0;
  //  top: 0;
  //  background-color: Cornsilk;
  //  opacity: 10%;
  //  z-index: -1;
  //}

  &::after {
    position: absolute;
    content: '';
    left: 10px;
    bottom: 10px;
    width: 16px;
    height: 11px;
    background-image: ${({ country }) => {
      return `url(${countries[country]})`
    }};
    background-size: 16px;
    z-index: 1;
  }
`;

const Card = styled.li`
  position:relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 0 20px 30px;
  border-radius: 5px;
  width: calc((100% - 150px) / 5);
  //border: 2px solid #0000001a;
  box-shadow: 0 1px 2px 1px #ccc;
  //height: 200px;
  transition: all 0.3s ease;
  transform: translateY(0);
  cursor: pointer;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
    //box-shadow: 0 3px 3px 1px #ccc;
  }
  
  &:hover ${Name} {
    text-align: center;
  }
  
  @media (max-width: 1440px) {
    width: calc((100% - 120px) / 4);
  }

  @media (max-width: 1200px) {
    width: calc((100% - 90px) / 3);
  }

  @media (max-width: 992px) {
    width: calc((100% - 60px) / 2);
  }

  @media (max-width: 554px) {
    width: 100%;
  }
`;

const CardInfo = styled.aside`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding-left: 20px;
  //background-color: #f5d7ae;
  background-color: rgba(241, 207, 166, 0.4);
  //background-color: #fae3d9;
  //box-shadow: inset 0 19px 38px rgba(255, 94, 94, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  //border-bottom: 1px solid #CCCCCC;


`;

const Price = styled.p`
  position: relative;
  display: flex;
  align-items: center;
  //justify-content: center;
  width: 100%;
  z-index: 1;
  padding: 0 0 5px;
  font-size: 14px;
  color: #000;
`;

const InCart = styled.span`
  position: absolute;
  right: 10px;
  
  span {
    font-weight: 700;
  }
`;



const ListProducts = ({ itemList }) => {

    const {
        openItemState: { setOpenItem },
        orders: { orders },
    } = useContext(Context);

    const getAllEntriesIndexes = (item) => {
        const indexes = [];
        orders.forEach((elem, index) => {
            if (elem.id === item.id) {
                indexes.push(index);
            }
        });

        return indexes;
    };

    const countSameEntries = (item) => {
        const indexes = getAllEntriesIndexes(item);
        const entries = [];
        indexes.forEach((idx) => {
            entries.push(orders[idx]);
        });

        return entries.reduce((counter, current) => counter + current.count, 0);
    };

    return (
        <List>
            {itemList.map(item => (
                <Card
                    key={item.id}
                    //по клику на любой из товаров будет запускаться setOpenItem и задавать стейт
                    onClick={() => setOpenItem(item)}
                >

                    <CardInfo>
                        <Name>{item.name}</Name>
                        <Price>{rubCurrencyFormat(item.price)}
                            {getAllEntriesIndexes(item).length > 0 && <InCart>В корзине: <span>{countSameEntries(item)}</span> шт.</InCart>}
                        </Price>
                    </CardInfo>
                    <Item img={item.img} country={item.country}/>
                </Card>
            ))}
        </List>
    )

};

export default ListProducts;
