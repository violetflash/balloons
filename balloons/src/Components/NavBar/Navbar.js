import React from 'react';
import styled from 'styled-components';
import baloons from '../../images/baloons2.png';
import Logo from '../Logo/Logo';
import cart from '../../images/cart.png';

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  height: 100px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  padding-right: 30px;
  background-color: #fae3d9;
  //background-color: #f5d7ae;

  border-bottom: 10px solid palevioletred;
  color: black;
`;

const H1 = styled.h1`
  position: relative;
  font-size: 40px;
  letter-spacing: 1.7px;
  color: #A4687B;
  //font-family: 'Philosopher', sans-serif;
  font-family: 'Amatic SC', cursive;

  z-index: 5;
  
  &::before {
    position:absolute;
    content: '';
    width: 75px;
    height: 100px;
    background-image:url(${baloons});
    background-position: center;
    background-size: 135px;
    background-repeat: no-repeat;
    top: 55%;
    transform: translateY(-50%) rotate(-45deg);
    left: -20%;
    z-index: -1;
  }
  
  @media (max-width: 992px) {
    display:none;
    font-size: 34px;

    &::before {
      position:absolute;
      content: '';
      width: 75px;
      height: 100px;
      background-image:url(${baloons});
      background-position: center;
      background-size: 100px;
      background-repeat: no-repeat;
      top: 55%;
      transform: translateY(-50%) rotate(-45deg);
      left: -50px;
      z-index: -1;
    }
  }
`;

const Login = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  cursor:pointer;
  //height: 62px;

  p {
    transform: translateY(-2px);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
    color: #000;
  };
  
  &:hover {
    p {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
    
    button {
      transform: translate(0);
      & svg path {
        //fill: sandybrown;
      }
    }
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;



const CartIconBox = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  background-color: palevioletred;
  height: 100%;
  overflow: hidden;
  
  &::before {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    transition: all 0.3s ease 0s;
    background-color: rgba(0, 0, 0, 0.06);
    transform: translateX(-100%);
  }
`;

const CartItemsCounter = styled.span`
  position: absolute;
  content: '';
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  min-width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;
  top: 0;
  
`;

const Cart = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  //height: 32px;
  //background-color: rgba(144, 139, 140, 0.7);
  background-color: rgba(79, 42, 109, 0.6);

  border: 1px solid #eee;
  min-width: 200px;
  cursor: pointer;
  font-family: Roboto, sans-serif;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

  &:hover ${CartIconBox} {
    &::before {
      transform: translateX(0);
    }
  }
`;

const CartIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const CartInfo = styled.span`
  margin-left: 10px;
  font-size: 16px;
  //font-weight: 700;
  color: white;
`;

const CartTotal = styled.span`
  font-weight: 700;
  margin: 0 5px 0 5px;
  padding-right: 5px;
  
  &::after {
    content: 'руб.';
    padding-left: 5px;
    font-weight: 400;
  }
`;


const LoginButton = styled.button`
  border: none;
  background-color: transparent;
  color: red;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  //transform: translateY(15px);

  & svg path {
    transition: all 0.3s ease;
    fill: palevioletred;
  }
`;

const Navbar = ({ setOpenOrder, openOrder }) => {
    return (
        <NavBarStyled>
            <Logo />
            <H1>Магазин воздушных шаров</H1>
            <Controls>
                <Cart onClick={() => setOpenOrder('Order')}>
                    <CartIconBox>
                        <CartIcon src={cart}/>
                        <CartItemsCounter>4</CartItemsCounter>
                    </CartIconBox>
                    <CartInfo>
                        Итого:
                        <CartTotal>0</CartTotal>
                    </CartInfo>
                </Cart>
                <Login>
                    <LoginButton>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0)">
                                <path
                                    d="M15.772 15.4145C17.8896 15.4145 19.7234 14.655 21.2217 13.1564C22.72 11.6582 23.4795 9.82491 23.4795 7.707C23.4795 5.58982 22.72 3.75633 21.2214 2.25756C19.7229 0.759519 17.8894 0 15.772 0C13.6541 0 11.8208 0.759519 10.3225 2.2578C8.82422 3.75609 8.06445 5.58958 8.06445 7.707C8.06445 9.82491 8.82422 11.6584 10.3228 13.1567C11.8213 14.6547 13.6548 15.4145 15.772 15.4145Z"
                                    fill="white"/>
                                <path
                                    d="M29.2581 24.6063C29.2148 23.9828 29.1274 23.3026 28.9988 22.5843C28.8689 21.8607 28.7017 21.1766 28.5015 20.5514C28.2947 19.9051 28.0134 19.267 27.6658 18.6554C27.3049 18.0206 26.8811 17.4679 26.4055 17.0131C25.9082 16.5372 25.2993 16.1547 24.5952 15.8756C23.8936 15.598 23.116 15.4574 22.2842 15.4574C21.9575 15.4574 21.6416 15.5914 21.0315 15.9886C20.656 16.2335 20.2168 16.5167 19.7266 16.83C19.3074 17.097 18.7395 17.3473 18.0381 17.5738C17.3538 17.7953 16.6589 17.9076 15.9731 17.9076C15.2874 17.9076 14.5928 17.7953 13.9077 17.5738C13.207 17.3475 12.6392 17.0973 12.2205 16.8302C11.7349 16.5199 11.2954 16.2367 10.9143 15.9884C10.3049 15.5912 9.98877 15.4572 9.66211 15.4572C8.83008 15.4572 8.05273 15.598 7.35132 15.8759C6.64771 16.1544 6.03857 16.537 5.54077 17.0133C5.06543 17.4684 4.64136 18.0209 4.28101 18.6554C3.93359 19.267 3.65234 19.9049 3.44531 20.5516C3.24536 21.1769 3.07812 21.8607 2.94824 22.5843C2.81958 23.3016 2.73218 23.982 2.68896 24.607C2.64648 25.2193 2.625 25.8548 2.625 26.4967C2.625 28.1671 3.15601 29.5194 4.20312 30.5167C5.2373 31.5008 6.60571 32.0001 8.26978 32.0001H23.678C25.342 32.0001 26.71 31.501 27.7444 30.5167C28.7917 29.5201 29.3228 28.1676 29.3228 26.4964C29.3225 25.8516 29.3008 25.2157 29.2581 24.6063Z"
                                    fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect width="32" height="32" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </LoginButton>

                </Login>
            </Controls>


        </NavBarStyled>
    )

};

export default Navbar;
