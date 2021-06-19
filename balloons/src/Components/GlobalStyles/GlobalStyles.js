import React from 'react';
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    height: 100%;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  body {
    background-color: #FFFBEC;
    //color: #fff;
    margin: 0;
    font-size: 20px;
    font-family: Roboto, sans-serif;
    height: calc(100% - 100px);
    overflow-x: hidden;

  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  h1, h2, h3 {
    font-family: 'Philosopher', sans-serif;
    padding: 0;
    margin: 0;
  }
  
  p {
    padding: 0;
    margin: 0;
  }
  
  #root {
    height: 100%;
  }
  
`;

const GlobalStyles = props => {
    return (
        <GlobalStyle />
    )

};

export default GlobalStyles;