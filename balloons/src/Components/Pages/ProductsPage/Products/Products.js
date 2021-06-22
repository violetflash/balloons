import React from 'react';
import styled from 'styled-components';
import ListProducts from "../ListProducts/ListProducts";
import db from './db';
import Banner from "../Banner/Banner";
import { Wrapper, Content, MainFooter, Main } from "../../../Elements/PageElements/PageElements";
import Footer from "../../../Elements/Footer/Footer";

const Section = styled.section`
  padding: 20px 0 40px 0;
`;

const Products = ({ setOpenItem, orders }) => {

    return (
        <Wrapper>
            <Content>
                <Banner/>
                <Main>
                    <Section>
                        <h3>Шары фольгированные</h3>
                        <ListProducts
                            itemList={db.foiled.child}
                            setOpenItem={setOpenItem}
                            orders={orders}
                        />
                    </Section>

                    <Section>
                        <h3>Другие товары</h3>
                        <ListProducts
                            itemList={db.other}
                            setOpenItem={setOpenItem}
                            orders={orders}
                        />
                    </Section>
                </Main>

            </Content>
            <MainFooter>
                <Footer />
            </MainFooter>
        </Wrapper>



    )

};

export default Products;
