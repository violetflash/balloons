import React from 'react';
import styled from 'styled-components';

const OrderSection = styled.section`
  position: fixed;
  top: 100px;
  left: 0;
  background-color: #fff;
  min-width: 380px;
  height: calc(100% - 80px);
  z-index: 10;
`;

const Order = ({ openOrder, setOpenOrder }) => {

    if (!openOrder) {
        return null;
    }

    return (
        <>
            <OrderSection id="OrderSection">

            </OrderSection>
        </>
    );

};

export default Order;
