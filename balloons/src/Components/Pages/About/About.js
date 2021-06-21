import React from 'react';
import styled from 'styled-components';
import { Wrapper, Content, MainFooter } from '../../Elements/PageElements/PageElements';
import Footer from "../../Elements/Footer/Footer";

const Section = styled.article`
  margin-top: 110px;
  //padding: 20px 15px;
  height: calc(100% - 110px);

  //display: flex;
  //align-items: center;
  //justify-content: center;
  
`;

const Title = styled.h1`
  text-align:center;
  padding-top: 20px;
`;


const About = props => {
    return (
        <Section>
            <Title>О нас:</Title>
            <Wrapper>
                <Content>

                </Content>
                <MainFooter>
                    <Footer />
                </MainFooter>
            </Wrapper>
        </Section>
    )

};

export default About;
