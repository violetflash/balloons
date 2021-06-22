import React from 'react';
import styled from 'styled-components';
import percents from '../../../../images/percents.png'
import point from '../../../../images/point.png'

const BannerSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: paleturquoise;
  padding-bottom: 20px;


`;

const BannerWrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 20px;
  max-width: 1200px;


`;

const PercentsImg = styled.img`
  max-width: 650px;
  
  @media (max-width: 1200px) {
    max-width: 400px;
  }
`;

const Discount = styled.h1`
  font-size: 48px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 10px;
  //color: darkgoldenrod;
`;

const Arrow = styled.p`
  position: relative;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  opacity: 0.7;

  &::after {
    position: absolute;
    content: '';
    right: -40px;
    width: 26px;
    height: 26px;
    background-image: url(${point});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const Banner = props => {
    return (
        <BannerSection>
            <BannerWrapper>
                <Discount>скидка</Discount>
                <PercentsImg src={percents}/>
                <Arrow>5% на вот такие шары</Arrow>

            </BannerWrapper>

        </BannerSection>
    )
};

export default Banner;
