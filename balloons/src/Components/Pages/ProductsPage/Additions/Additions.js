import React from 'react';
import styled from 'styled-components';
import db from '../Products/db';


const CheckBoxesWrapper = styled.div`
  padding: 5px 0;
  column-count: 2;
`;

const Checkbox = styled.label`
  position: relative;
  display: block;
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
    //top: 3px;
    background-color: palevioletred;
    //transform: scale(0.5);
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


const Additions = () => {
    return (
        <CheckBoxesWrapper>
            {db.child.additional && db.child.additional.map(add => {
                return (
                    <Checkbox>
                        <Input type="checkbox"/>
                        <Text>{add}</Text>
                    </Checkbox>
                );
            })}

        </CheckBoxesWrapper>
    );

};

export default Additions;
