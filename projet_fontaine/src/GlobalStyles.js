import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
    font-family: 'Roboto', sans-serif;
}

@media only screen and (max-width: 768px){
    
    span {
        font-size: 12px;
    }
    h1{
        font-size: 20px;
    }
    h2{
    font-size: 16px;
    }
    p{
        font-size:12px;
    }
}

.languageToggle {
    
    span{
        font-size: 12px;
        font-weight: bold;
    }

}
`;

export const Tag = styled.div`
  display: flex;
  justify-content: flex-start;
  border-radius: 15px;
  align-items: center;
  padding: 2.5px;
  margin: 5px 10px 5px 10px;
  box-shadow: 1.5px 1.5px 1.5px 1.5px rgba(0, 0, 0, 0.42);
  min-width: 200px;

  span {
    font-size: 12px;
  }

  @media only screen and (max-width: 768px) {
    padding: 2.5px;

    span {
      font-size: 12px;
    }
  }
`;

export const Icon = styled.img`
  height: 20px;
  width: auto;

  @media only screen and (max-width: 768px) {
    height: 15px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.15);
  padding: 8px;
  border-radius: 50%;
  margin: 0 10px 0 10px;

  @media only screen and (max-width: 768px) {
    padding: 5px;
    margin: 0 5px 0 5px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export default GlobalStyles;

