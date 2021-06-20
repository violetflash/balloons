import React from 'react';
import styled from 'styled-components';
import line from "../../images/Line1.svg";

const Logotype = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 15px;

  & p {
    position: relative;
    font-family: 'Amatic SC', cursive;
    font-size: 40px;
    margin-top: 75px;
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
  
  @media (max-width: 992px) {
    & p {
      position: relative;
      font-family: 'Amatic SC', cursive;
      font-size: 40px;
      margin-top: 0;
      padding: 5px 15px 15px;
      background-color: palevioletred;
      border-radius: 20px;
      color: cornsilk;
      max-width: 100%;
      text-align: center;
      line-height: 1.2;
      display: flex;
      align-items: center;
      justify-content: center;


      &::before {
        position: absolute;
        content: '';
        width: 170px;
        height: 8px;
        background-image: url(${line});
        bottom: 7px;
      }
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
