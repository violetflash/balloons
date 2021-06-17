import React from 'react';
import styled from 'styled-components';
import ListItem from "../ListItem/ListItem";
import db from './db';
import Button from "../Button/Button";

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

const Menu = ({ setOpenItem }) => {
    return (
        <MenuStyled>
            <Section>
                <h3>Шары фольгированные</h3>
                <ListItem
                    itemList={db.foiled}
                    setOpenItem={setOpenItem}
                />
            </Section>

            <Section>
                <h3>Другие товары</h3>
                <ListItem
                    itemList={db.other}
                    setOpenItem={setOpenItem}
                />
            </Section>
        </MenuStyled>
    )

};

export default Menu;
