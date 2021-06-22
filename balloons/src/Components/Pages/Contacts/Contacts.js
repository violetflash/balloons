import React from 'react';
import styled from 'styled-components';
import { Wrapper, Content, MainFooter, MainTitle } from "../../Elements/PageElements/PageElements";
import Footer from "../../Elements/Footer/Footer";

const Contacts = () => {
    return (
        <Wrapper>
            <Content>
                <MainTitle>Наши контакты</MainTitle>
            </Content>
            <MainFooter>
                <Footer />
            </MainFooter>
        </Wrapper>
    );

};

export default Contacts;
