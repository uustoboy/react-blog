import styled,{ createGlobalStyle  } from "styled-components";


export const GlobalStyle = createGlobalStyle`
   body,html {
     height: 100%;
  }
  .main{
    padding: 0 30px 0 280px;
    width: 1000px;
  }
`;

export const DetailWrapper = styled.div`
         width: 620px;
         margin: 0 auto;
         padding: 0 0 100px 0;
         background: red;
       `;

export const CenterMain = styled.div`
  padding: 0 30px 0 280px;
  width: 1000px;
`;