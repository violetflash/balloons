import React from 'react';
import styled from 'styled-components';
import {rubCurrencyFormat} from "../../../utils/utils";

const CheckBoxesWrapper = styled.div`
  padding-top: 10px;
  column-count: 2;
  column-gap: 15px;
  max-width: 500px;
`;

const Checkbox = styled.label`
  position: relative;
  display: block;
  margin-bottom: 10px;
`;

const Text = styled.span`
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 16px;
  width: 100%;
  color: #1a1a1a;
  letter-spacing: -0.3px;
  cursor: pointer;
  //max-width: 150px;
  
  
  &::before {
    content: "";
    align-items: flex-start;
    margin: 0 12px 0 0;
    flex: 0 0 15px;
    height: 15px;
    border: 2px solid #ccc;
    left: 0;
    top: 0;
    background: #fff;
  }

  &::after {
    position: absolute;
    content: '';
    width: 9px;
    height: 9px;
    left: 3px;
    background-color: palevioletred;
    opacity: 0;
    transition: all 0.15s cubic-bezier(0.47, 1.01, 0.75, 0.97);
  }
`;

const Input = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  visibility: hidden;

  &:checked + ${Text}::before {
    border: 2px solid #ccc;
  }

  &:checked + ${Text}::after {
    opacity: 1;
    transform: scale(1);
    transition: all 0.15s cubic-bezier(0.41, 1.13, 0.79, 1.33);
    transform-origin: center;
  }
`;

const Title = styled.span`
  //text-align:center;
  padding-top: 5px;
`;


const Additions = ({ additional, id, additionalItems, checkAdditions, price }) => {
    const cost = Math.round(price * 0.1);
    return (
        <>
            <Title>Дополнительно (+{rubCurrencyFormat(cost)}):</Title>
            <CheckBoxesWrapper>
                {additionalItems.map((item, index) => {
                    return (
                        <Checkbox key={index + '' + id}>
                            <Input type="checkbox" checked={item.checked} onChange={() => checkAdditions(index)} />
                            <Text>{item.name}</Text>
                        </Checkbox>
                    );
                })}

            </CheckBoxesWrapper>
        </>

    );
};

export default Additions;