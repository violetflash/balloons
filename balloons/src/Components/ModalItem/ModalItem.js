import React from 'react';
import Button from '../Button/Button';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.div`
  position:relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: Cornsilk;
  width: 600px;
  padding-bottom: 20px;
  //height: 600px;
  min-height: 500px;
  border-radius: 10px;
  z-index: 100;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

  @media (max-width: 1200px) {
    width: 500px;
    height: 500px;
  }

`;

const BannerWrapper = styled.div`
  height: 400px;
  width: 100%;
  background-color:#fff;
  border-radius: 10px;
  
  
  @media (max-width: 1200px) {
    //height: 200px;
  }

`;

const Banner = styled.div`
  width: 70%;
  height: 100%;
  background-color: #fff;
  background-image: url(${( ({ img }) => img)});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 auto 20px;
`;

const ModalInfo = styled.div`
  padding: 10px 40px;
  font-size: 16px;
  
`;

const Name = styled.h3`
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  color: palevioletred;
`;

const InfoLine = styled.p`
  max-width: 50%;
  width: 100%;
  font-weight: 700;
  margin-bottom: 5px;
  padding: 5px;
  
  span {
    font-weight: 400;
    margin-left: 15px;
  }
`;

const InfoLines = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 10px 0;
`;

const Close = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before,
  &::after {
    position: absolute;
    content: '';
    width: 40px;
    height: 4px;
    background-color: #f1dbaf;
    border-radius: 10px;
    transform: rotate(45deg);
    transition: all 0.2s;
  }

  &::before {
    transform: rotate(-45deg);
  }

  &:hover {
    &::before,
    &::after {
      background-color: rgba(0, 0, 0, 0.7);

    }

  }
`;

const Description = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
  text-indent: 1.5rem;
  line-height: 1.3;
  text-align: justify;
`;

const Footer = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 40px;
  
  div {
    margin: 0;
  }
`;

const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

    const closeModal = e => {
        if (e.target.id === 'overlay' || e.target.id === 'closeBtn') {
            setOpenItem(null);
        }
    };

    const newOrder = {
        ...openItem,
    };

    const addToOrder = () => {
        console.log(orders);
        setOrders([...orders, newOrder]); //обновляем стейт заказов, деструктурируя уже имеющиеся заказы и добавляя
        // новый
        setOpenItem(null);  //закрываем окно товара, обновляя стейт на null
    };


    return (
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <Close id="closeBtn"/>
                <BannerWrapper>
                    <Banner img={openItem.img}/>
                </BannerWrapper>
                <ModalInfo>
                    <Name>{openItem.name}</Name>
                    <Description>{openItem.description}</Description>
                    <InfoLines>
                        <InfoLine>Артикул: <span>{'000' + openItem.id}</span></InfoLine>
                        <InfoLine>Размер: <span>{openItem.size}</span></InfoLine>
                        <InfoLine>Страна: <span>{openItem.country}</span></InfoLine>
                        <InfoLine>Цена:
                            <span>
                                {openItem.price.toLocaleString('ru-RU', {
                                    style: 'currency',
                                    currency: 'RUB'
                                })}
                            </span>
                        </InfoLine>
                    </InfoLines>
                </ModalInfo>
                <Footer>
                    <Button text="Добавить в корзину" onClick={addToOrder} />
                </Footer>
            </Modal>
        </Overlay>
    );

};

export default ModalItem;
