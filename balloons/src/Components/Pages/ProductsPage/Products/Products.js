import React from 'react';
import styled from 'styled-components';
import ListProducts from "../ListProducts/ListProducts";
import db from './db';
import Banner from "../Banner/Banner";
import { Wrapper, Content, MainFooter, Main } from "../../../Elements/PageElements/PageElements";
import Footer from "../../../Elements/Footer/Footer";
import ProductSwitchState from "../../../Hooks/ProductSwitchState/ProductSwitchState";

const Section = styled.section`
  padding: 15px 0 40px 0;
  
  ul {
    margin-top: 0;
  }
`;

const menu = ['Детские', 'Поздравления', 'Цифры', 'Фигуры', 'Дополнительно'];

const Menu = styled.div`
  margin-top: 30px;
`;

const Button = styled.button`
  border: none;
  margin: 0 20px;
  font-size: 18px;
  font-weight: 700;
  background-color: transparent;
  cursor: pointer;
  padding-bottom: 10px;
  border-bottom: 4px solid transparent;
  transition: all 0.3s ease 0s;

  //color: rgba(79,42,109,1);
  
  &.active {
    border-bottom: 4px solid palevioletred;
  }
`;

const Products = ({ setOpenItem, orders }) => {
    const switcherState = ProductSwitchState();

    const menuHandler = (index) => {
        switcherState.setSwitcherIndex(index);
    };

    return (
        <Wrapper>
            <Content>
                <Banner/>
                <Main>
                    <Menu>
                        {menu.map((link, index) => (
                            <Button
                                key={index}
                                onClick={() => menuHandler(index)}
                                className={switcherState.switcherIndex === index ? 'active' : null}>
                                {link}
                            </Button>
                        ))}
                    </Menu>
                    <Section>
                        {switcherState.switcherIndex === 0 && <ListProducts itemList={db.foiled.child} setOpenItem={setOpenItem} orders={orders}/>}
                        {switcherState.switcherIndex === 1 && <ListProducts itemList={db.foiled.festivals} setOpenItem={setOpenItem} orders={orders}/>}
                        {switcherState.switcherIndex === 2 && <ListProducts itemList={db.foiled.digits} setOpenItem={setOpenItem} orders={orders}/>}
                        {switcherState.switcherIndex === 3 && <ListProducts itemList={db.foiled.walkers} setOpenItem={setOpenItem} orders={orders}/>}
                        {switcherState.switcherIndex === 4 && <ListProducts itemList={db.other} setOpenItem={setOpenItem} orders={orders}/>}
                    </Section>

                    {/*<Section>*/}
                    {/*    <h3>Другие товары</h3>*/}
                    {/*    <ListProducts*/}
                    {/*        itemList={db.other}*/}
                    {/*        setOpenItem={setOpenItem}*/}
                    {/*        orders={orders}*/}
                    {/*    />*/}
                    {/*</Section>*/}
                </Main>

            </Content>
            <MainFooter>
                <Footer />
            </MainFooter>
        </Wrapper>



    )

};

export default Products;
