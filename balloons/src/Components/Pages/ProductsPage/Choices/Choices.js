import React from 'react';
import styled from 'styled-components';

const SelectWrapper = styled.label`
  margin: 10px 0;
  width: 100%;
  text-align: center;
`;

const Select = styled.select`
  padding: 5px 15px;
  border: none;
  outline: transparent;
  background-color: #f1e7c3;
  font-size: 16px;
  margin-left: 10px;
`;

const Choices = ({ id, choices, changeChoice, choice }) => {
    return (
        <SelectWrapper>
            Выберите опцию:
            <Select onChange={changeChoice}>
                {choices.map((elem, index) => <option selected={choice === elem.option}
                    key={id + '' + index}
                    data-price={elem.price}>
                    {elem.option}
                </option>)}
            </Select>
        </SelectWrapper>
    );

};

export default Choices;
