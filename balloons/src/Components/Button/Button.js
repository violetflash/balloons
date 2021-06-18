import React from 'react';
import styled from 'styled-components';


const BtnLayer = styled.div`
  position: absolute;
  height: 100%;
  width: 300%;
  left: -100%;
  background-image: linear-gradient(135deg, #f5d7ae, #db7093, #f5d7ae, #db7093);
  transition: all 0.4s ease;
  border-radius: 25PX;
`;

const BtnWrapper = styled.div`
  position: relative;
  height: 50px;
  width: 100%;
  border-radius: 25px;
  margin-top: 30px;
  overflow: hidden;
  cursor:pointer;


  &:hover ${BtnLayer} {
    left: 0;
  }
`;

const Btn = styled.button`
  position: relative;
  height: 100%;
  width: 100%;
  background: none;
  outline: none;
  border: none;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1px;
  color: #fff;
  cursor:pointer;

`;

const Button = ({ text, onClick }) => {
    return (
        <BtnWrapper>
            <BtnLayer/>
            <Btn onClick={onClick}>{text}</Btn>
        </BtnWrapper>
    )

};

export default Button;
