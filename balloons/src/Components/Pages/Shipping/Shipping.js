import React from 'react';
import styled from 'styled-components';
import { Wrapper, Content, MainFooter, MainTitle, Main } from "../../Elements/PageElements/PageElements";
import Footer from "../../Elements/Footer/Footer";

const Shipping = () => {
    return (
        <Wrapper>
            <Content>
                <Main>
                    <MainTitle>Доставка и оплата</MainTitle>
                </Main>
            </Content>
            <MainFooter>
                <Footer />
            </MainFooter>
        </Wrapper>
    );

};

export default Shipping;
