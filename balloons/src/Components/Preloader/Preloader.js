import React from 'react';
import styled from 'styled-components';

const loaderWidth = 250;
const loaderDotSize = 20;

const Container = styled.div`
  height: 100px;
  width: 100vw;
`;


const Loader = styled.div`
  height: ${loaderDotSize}px;
  width: ${loaderWidth}px;
  position: relative;
  //top: 0;
  //bottom: 0;
  //left: 0;
  //right: 0;
  margin: 100px auto 0;
`;


const LoaderDot = styled.div`
  animation: loader ease-in-out 3s infinite;
  height: ${loaderDotSize}px;
  width: ${loaderDotSize}px;
  border-radius: 100%;
  background-color: black;
  position: absolute;
  border: 2px solid white;

  &:first-child {
    background-color: #8cc759;
    animation-delay: 0.5s;
  }
  
  &:nth-child(2) {
    background-color: #8c6daf;
    animation-delay: 0.4s;
  }
  
  &:nth-child(3) {
    background-color: #ef5d74;
    animation-delay: 0.3s;
  }
  
  &:nth-child(4) {
    background-color: #f9a74b;
    animation-delay: 0.2s;
  }
  
  &:nth-child(5) {
    background-color: #60beeb;
    animation-delay: 0.1s;
  }
  
  &:nth-child(6) {
    background-color: #fbef5a;
    animation-delay: 0s;
  }

  @keyframes loader {
    15% {
      transform: translateX(0);
    }

    45% {
      transform: translateX(${loaderWidth - loaderDotSize}px);
    }

    65% {
      transform: translateX(${loaderWidth - loaderDotSize}px);
    }

    95% {
      transform: translateX(0);
    }
  }
  
`;

const LoaderText = styled.div`
  position: absolute;
  top: 200%;
  left: 0;
  right: 0;
  width: 4rem;
  margin: auto;

  &:after {
    content: "Загрузка";
    font-weight: 700;
    animation: loading-text 3s infinite;
  }

  @keyframes loading-text {
    0% {
      content: "Загрузка"
    }

    25% {
      content: "Загрузка."
    }

    50% {
      content: "Загрузка.."
    }

    75% {
      content: "Загрузка..."
    }
  }
`;







const Preloader = props => {
    return (
        <Container>
            <Loader>
                <LoaderDot />
                <LoaderDot />
                <LoaderDot />
                <LoaderDot />
                <LoaderDot />
                <LoaderDot />
                <LoaderText />
            </Loader>
        </Container>
);

};

export default Preloader;
