import React from 'react';
import styled from 'styled-components';
import { Wrapper, Content, MainFooter, MainTitle } from '../../Elements/PageElements/PageElements';
import Footer from "../../Elements/Footer/Footer";



const About = () => {
    return (
        <Wrapper>
            <Content>
                <MainTitle>О нас:</MainTitle>
            </Content>
            <MainFooter>
                <Footer />
            </MainFooter>
        </Wrapper>
    )

};

export default About;
