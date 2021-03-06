import React, { useContext } from 'react';
import styled from 'styled-components';
import baloons from '../../images/baloons2.png';
import Logo from '../Elements/Logo/Logo';
import cart from '../../images/cart.png';
import Context from "../utils/Context";
import {rubCurrencyFormat, getTotalCartSum} from "../utils/utils";



const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  //height: 120px;
  width: 100vw;
  padding-top: 10px;
  background-color: #fae3d9;
  border-bottom: 6px solid palevioletred;
`;

const HeaderTop = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;

  color: black;
  margin-bottom: 10px;
  
  @media (max-width: 1340px) {
    justify-content: flex-start;
    padding-left: 120px;
  }
  
  @media (max-width: 690px) {
    padding-left: 20px;
  }
  
  @media (max-width: 380px) {
    padding-left: 10px;
  }
`;

const HeaderBottom = styled.div`
  display: flex;
  justify-content: center;
  
  @media (max-width: 1340px) {
    justify-content: flex-start;
  }
  
  @media (max-width: 850px) {
    width: 100%;
    overflow-x: auto;

  }
`;

const Menu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  //padding: 15px 0 10px;
  //background-color: #fff;
  border-radius: 4px 4px 0 0;
  background-color: palevioletred;
  //margin-left: auto;
  //margin-right: 40px;
  margin-bottom: -1px;
  height: 100%;
  color: white;
  z-index: 10;
  white-space: nowrap;


  @media (max-width: 1340px) {
    border-radius: 0 4px 0 0;
  }
  
  @media (max-width: 850px) {
    border-radius: 0;
    //width: 100%;
    justify-content: space-around;
    flex-wrap: nowrap;
  }
  
  @media (max-width: 650px) {
    justify-content: flex-start;
  }
`;

const NavLink = styled.a`
  position: relative;
  display: block;
  padding: 5px 15px;
  font-size: 16px;
  margin: 5px 5px 0;
  border-radius: 4px 4px 0 0;
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;
  color: #fae3d9;
  
  &:hover {
    //background-color: #7f6689;
    background-color: rgba(0, 0, 0, 0.15);
    //color: #A4687B;
    //color: #fff;
    &::before {
      transform: translateX(0);
    }
  }

  &.active {
    background-color: #fae3d9;
    color: #A4687B;
  }
  
  @media (max-width: 500px) {
    font-size: 14px;
  }
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
    position: absolute;
    content: '';
    width: 75px;
    height: 100px;
    background-image: url(${baloons});
    background-position: center;
    background-size: 135px;
    background-repeat: no-repeat;
    top: 90%;
    transform: translateY(-50%) rotate(-45deg);
    left: -30%;
    z-index: -1;
  }

  &::after {
    position: absolute;
    content: '';
    width: 75px;
    height: 100px;
    background-image: url(${baloons});
    background-position: center;
    background-size: 135px;
    background-repeat: no-repeat;
    top: 90%;
    transform: translateY(-50%) rotate(395deg) scaleX(-1);
    right: -28%;
    z-index: -1;
  }
  
  @media (max-width: 690px) {
    &::before,
    &::after {
      display: none;
    }
  }
  
  @media (max-width: 500px) {
    font-size: 30px;
  }
  
  @media (max-width: 380px) {
    font-size: 26px;
  }
`;

const LoginButton = styled.button`
  border: none;
  background-color: transparent;
  color: red;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  //transform: translateY(15px);

  & svg path {
    transition: all 0.3s ease;
    fill: palevioletred;
  }
`;

const Login = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  cursor: pointer;
  //height: 62px;

  p {
    margin-top: 5px;
    transform: translateY(-2px);
    //opacity: 0;
    //visibility: hidden;
    transition: all 0.3s ease-in-out;
    color: #000;
    
    @media (max-width: 850px) {
      display: none;
    }
  }
`;

const Logout = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  cursor: pointer;
  //height: 62px;

  p {
    transform: translateY(-2px);
    //opacity: 0;
    //visibility: hidden;
    transition: all 0.3s ease-in-out;
    color: #000;

    @media (max-width: 850px) {
      display: none;
    }
  }
  
  span {
    @media (max-width: 850px) {
      display: none;
    }
  }

`;

const Controls = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 10px;
  right: 40px;
  
  @media (max-width: 850px) {
    bottom: 45px;
  }
  
  @media (max-width: 500px) {
    bottom: 40px;
  }
  
  @media (max-width: 380px) {
    //bottom: 40px;
    right: 15px;
  }
`;


const CartIconBox = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  background-color: palevioletred;
  height: 100%;
  border-radius: 4px 0 0 4px;
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
  
  @media (max-width: 1060px) {
    border-radius: 4px;
  }
  
  @media (max-width: 890px) {
    display: none;
  }
`;

const CartItemsCounter = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  width: 26px;
  height: 26px;
  padding: 0 5px;
  border-radius: 50%;
  border: 1px solid #CCCCCC;
  //background-color: palevioletred;
  background: rgb(219, 112, 147);
  background: linear-gradient(90deg, rgba(219, 112, 147, 1) 0%, rgba(121, 97, 131, 1) 100%);
  color: #fff;
  top: -13px;
  left: 36px;
  z-index: 1;
  font-family: Philosopher, sans-serif;
  
  @media (max-width: 890px) {
    top: -45px;
    left: 55px;
  }
  
  @media (max-width: 850px) {
    top: -30px;
  }
  
  @media (max-width: 500px) {
    top: -25px;
    left: 50px;
  }
`;

const Cart = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0;
  border-radius: 4px;
  //height: 32px;
  //background-color: rgba(144, 139, 140, 0.7);
  background-color: rgba(79, 42, 109, 0.6);

  border: none;
  min-width: 200px;
  cursor: pointer;
  font-family: Roboto, sans-serif;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

  &:hover ${CartIconBox} {
    &::before {
      transform: translateX(0);
    }
  }
  
  @media (max-width: 1060px) {
    min-width: 0;
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
  
  @media (max-width: 1060px) {
    display: none;
  }
`;

const CartTotal = styled.span`
  font-weight: 700;
  margin: 0 5px 0 5px;
  padding-right: 5px;
  
  @media (max-width: 1060px) {
    display: none;
  }
`;


// const UserAccount = styled.div`
//
// `;

const UserName = styled.span`
  font-weight: 700;
  font-size: 14px;
  color: #000;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  
  img {
    border-radius: 50%;
  }
  
`;

const links = ['???????? ?? ????????????', '?? ????????????????', '???????????????? ?? ????????????', '????????????????', '??????????????'];


//https://stackoverflow.com/questions/61377356/using-hooks-to-set-active-classname

const Navbar = () => {

    const {
        auth: { authentication, login, logout },
        orderItemsCounter: { orderItemsCounter },
        indexState: { activeIndex, setActiveIndex },
        orders: { orders }
    } = useContext(Context);

    const cartButtonHandler = () => {
        // setOpenOrder(true);
        setActiveIndex(4);
    };

    const linkHandler = (index) => {

        // setOpenOrder(null);
        setActiveIndex(index);
    };


    return (
        <Header>
            <Logo/>
            <HeaderTop>
                <H1>{window.innerWidth > 1340 ? '?????????????? ?????????????????? ??????????' : '???????????????? ????????????????????????????'}</H1>
            </HeaderTop>
            <HeaderBottom>
                <Menu>
                    {links.map((element, index) => {
                        return (
                            <NavLink
                                key={index}
                                onClick={() => linkHandler(index, element)}
                                className={activeIndex === index ? "active" : null}
                            >
                                {element}
                            </NavLink>
                        )
                    })}
                </Menu>
                <Controls>
                    <Cart onClick={cartButtonHandler}>
                        {orderItemsCounter && <CartItemsCounter>{orderItemsCounter}</CartItemsCounter>}
                        <CartIconBox>
                            <CartIcon src={cart}/>
                        </CartIconBox>
                        <CartInfo>
                            ??????????:
                            <CartTotal>{orders ? rubCurrencyFormat(getTotalCartSum(orders)) : rubCurrencyFormat(0)}</CartTotal>
                        </CartInfo>
                    </Cart>
                    {authentication ?
                        <Logout onClick={logout}>
                            <LoginButton>
                                <Avatar>
                                    <img src={authentication.photoURL} alt={authentication.displayName}/>
                                </Avatar>
                                <UserName>{authentication.displayName.split(' ')[0]}</UserName>
                                <p>??????????</p>
                            </LoginButton>
                        </Logout> :
                        <Login onClick={login}>
                            <LoginButton>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
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

                                <p>??????????</p>
                            </LoginButton>
                        </Login>}
                </Controls>
            </HeaderBottom>
        </Header>
    )

};

export default Navbar;
