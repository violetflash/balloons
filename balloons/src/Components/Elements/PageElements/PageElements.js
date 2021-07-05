import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Content = styled.div`
  width: 100%;
  flex: 1 0 auto;
  padding: 110px 0 0;
  //max-height: 60vh;
  font-size: 16px;
  
  @media (max-width: 500px) {
    padding: 85px 0 0;
  }
`;

const MainFooter = styled.div`
  flex: 0 0 auto;
  width: 100%;
`;

const MainTitle = styled.h1`
  width: 100%;
  padding: 20px 40px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 26px;
`;

const Main = styled.main`
  background-color: #FFFBEC;
  padding: 0 15px 20px;
  text-align:center;

  h3 {
    padding-bottom: 5px;
  }
`;

export {
    Wrapper,
    Content,
    MainFooter,
    MainTitle,
    Main
}
