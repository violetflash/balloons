import React from 'react';
import styled from 'styled-components';
import { Wrapper, Content, MainFooter, MainTitle } from "../../Elements/PageElements/PageElements";
import Footer from "../../Elements/Footer/Footer";

const Shipping = props => {
    return (
        <Wrapper>
            <Content>
                <MainTitle>Доставка и оплата</MainTitle>
            </Content>
            <MainFooter>
                <Footer />
            </MainFooter>
        </Wrapper>
    );

};

export default Shipping;
