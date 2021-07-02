import React, { useContext } from 'react';
import styled from 'styled-components';
import ListProducts from "../ListProducts/ListProducts";
// import db from './db';
import Banner from "../Banner/Banner";
import { Wrapper, Content, MainFooter, Main } from "../../../Elements/PageElements/PageElements";
import Footer from "../../../Elements/Footer/Footer";
import ProductSwitchState from "../../../Hooks/ProductSwitchState/ProductSwitchState";
// import useFetch from "../../../Hooks/useFetch/useFetch";
import Context from "../../../utils/Context";
import Preloader from "../../../Preloader/Preloader";
// import robot from '../../../../images/robot.gif';

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
  position: relative;
  border: none;
  margin: 0 20px;
  font-size: 18px;
  font-weight: 700;
  color: #100;
  background-color: transparent;
  cursor: pointer;
  padding-bottom: 10px;
  border-bottom: 4px solid transparent;
  transition: all 0.3s;

  //color: rgba(79,42,109,1);

  &.active {

    &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 4px;
      border-radius: 4px;
      background-color: palevioletred;
      bottom: 0;
      left: 0;
      right: 0;
    }

  }
`;
//
// const Error = styled.figure`
//   //height: 300px;
//   padding: 0 0 20px;
//   margin: 0;
//   text-align:center;
//   background-color:#f3f3f3;
//
//   img {
//     width: 300px;
//     height: 200px;
//   }
// `;

// const img = styled.figure

const Products = () => {

    const { fdb } = useContext(Context);

    const switcherState = ProductSwitchState();

    const menuHandler = (index) => {
        switcherState.setSwitcherIndex(index);
    };

    // const res = useFetch();
    //
    // const db = res.response;

    const db = fdb;


    return (
        <Wrapper>
            <Content>
                <Banner/>
                {/*{ res.response ?*/}
                { db ?
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
                            {switcherState.switcherIndex === 0 &&
                            <ListProducts itemList={db.foiled.child} />}
                            {switcherState.switcherIndex === 1 &&
                            <ListProducts itemList={db.foiled.festivals} />}
                            {switcherState.switcherIndex === 2 &&
                            <ListProducts itemList={db.foiled.digits} />}
                            {switcherState.switcherIndex === 3 &&
                            <ListProducts itemList={db.foiled.walkers} />}
                            {switcherState.switcherIndex === 4 &&
                            <ListProducts itemList={db.other} />}
                        </Section>
                    </Main> :
                    <Preloader/>
                }
            </Content>
            <MainFooter>
                <Footer />
            </MainFooter>
        </Wrapper>



    )

};

export default Products;