import styled from "styled-components";

const Wrapper = styled.div`
  min-height: calc(100% - 106px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Content = styled.div`
  width: 100%;
  flex: 1 0 auto;
  padding: 0 40px;
  //max-height: 60vh;
  font-size: 16px;
`;

const MainFooter = styled.div`
  flex: 0 0 auto;
  width: 100%;
`;

export {
    Wrapper,
    Content,
    MainFooter
}