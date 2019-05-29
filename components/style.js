import styled,{ createGlobalStyle  } from "styled-components";


export const GlobalStyle = createGlobalStyle`
   body,html {
     height: 100%;
  }
`;

export const DetailWrapper = styled.div`
         width: 620px;
         margin: 0 auto;
         padding: 0 0 100px 0;
         background: red;
       `;
