import React from 'react';
import styled from 'styled-components';

const FooterBlock = styled.div`
  background-color: #fae3d9;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 60px;
  border-top: 5px solid palevioletred;
`;

const Title = styled.h1`
  font-size: 30px;
  letter-spacing: 1.7px;
  color: #A4687B;
  //font-family: 'Philosopher', sans-serif;
  font-family: 'Amatic SC', cursive;
  margin-right: 10px;
`;

const Footer = props => {
    return (
        <FooterBlock>
            <Title>СПЛОШНОЕ НАДУВАТЕЛЬСТВО, &copy;</Title>

        </FooterBlock>
    )

};

export default Footer;