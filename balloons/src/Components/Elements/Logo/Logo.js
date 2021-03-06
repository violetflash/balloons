import React from 'react';
import styled from 'styled-components';
import line from "../../../images/Line1.svg";

const Logotype = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  
  left: 20px;
  top: 20px;

  & p {
    position: relative;
    font-family: 'Amatic SC', cursive;
    font-size: 40px;
    //margin-top: 75px;
    padding: 5px 15px 15px;
    background-color: palevioletred;
    border-radius: 50%;
    color: cornsilk;
    max-width: 240px;
    text-align: center;
    line-height: 1.2;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);



    &::before {
      position: absolute;
      content: '';
      width: 170px;
      height: 8px;
      background-image: url(${line});
    }
  }
  
  @media (max-width: 1340px) {
    display: none;
  }
`;

const Logo = props => {
    return (
        <Logotype>
            <p>сплошное надувательство</p>
        </Logotype>
    );
};

export default Logo;
