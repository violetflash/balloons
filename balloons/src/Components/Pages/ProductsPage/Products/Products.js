import React from 'react';
import styled from 'styled-components';
import ListProducts from "../ListProducts/ListProducts";
import db from './db';

const MenuStyled = styled.main`
  //background-color: #fff;
  background-color: #FFFBEC;
  padding: 0 15px 20px;
  text-align:center;
  //height: 500px;
  
  h3 {
    padding-bottom: 5px;
    //border-bottom: 10px solid palevioletred;
  }
`;

const Section = styled.section`
  padding: 20px 0 40px 0;
`;

const Products = ({ setOpenItem }) => {

    return (
        <MenuStyled>
            {/*<Menu>*/}

            {/*</Menu>*/}
            <Section>
                <h3>Шары фольгированные</h3>
                <ListProducts
                    itemList={db.foiled.child}
                    setOpenItem={setOpenItem}
                />
            </Section>

            <Section>
                <h3>Другие товары</h3>
                <ListProducts
                    itemList={db.other}
                    setOpenItem={setOpenItem}
                />
            </Section>
        </MenuStyled>
    )

};

export default Products;