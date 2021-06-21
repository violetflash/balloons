import React from 'react';
import styled from "styled-components";

const CountWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
`;


const CountInput = styled.input`
  max-width: 80px;
  padding: 6px 10px 5px;
  text-align: center;
  margin: 0 15px;
  border: 2px solid #e5e5e5;
  //color: #999999;
  font-size: 20px;
  //font-weight: 900;
`;

const ButtonCount = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid #ccc;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  
  &:hover {
    background-color: palevioletred;
    border-color: palevioletred;
    color: white;
  }
`;

const CountProduct = ({ count, setCount, onChange }) => {

    return (
        <CountWrapper>
            {/*<span>Количество:</span>*/}
            <Counter>
                <ButtonCount disabled={count <= 1} onClick={() => setCount(count - 1)} val={count}>-</ButtonCount>
                <CountInput value={count < 1 ? 1 : count} onChange={onChange}/>
                <ButtonCount onClick={() => setCount(count + 1)}>+</ButtonCount>
            </Counter>

        </CountWrapper>
    );

};

export default CountProduct;
