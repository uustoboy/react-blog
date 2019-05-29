import styled,{ createGlobalStyle  } from "styled-components";

export const NavMain = styled.nav`
         position: fixed;
         top: 0;
         left: 0;
         width: 240px;
         height: 100%;
         background: #222;
         box-shadow: 2px 0 5px rgba(0, 0, 0, 0.4);
       `;

export const AvatarInfo = styled.div`
         padding: 40px 0 10px;
         a {
           display: block;
           width: 120px;
           height: 120px;
           border-radius: 50%;
           border: 1px solid #fff;
           overflow: hidden;
           margin:0 auto;
         }
         img {
           width: 120px;
           height: 120px;
           border-radius: 50%;
         }
       `;
export const AuthorName = styled.div`
         color: #999;
         display: block;
         text-align: center;
         padding: 10px 0 0;
         font-size: 18px;
       `;

export const MottoTxt = styled.div`
         font-size: 12px;
         line-height: 24px;
         color: #888;
         text-align: center;
`;

export const NavUl = styled.ul`
         padding: 0;
`;

export const NavList = styled.li`
         height: 45px;
         .nav-link{
            display: flex;
            align-items: center;
            width: 100%;
            height: 45px;
            padding: 0 0 0 45px;
            transition: all 0.2s;
            color: #999;
            .nav-icon {
              font-size: 16px;
              color: #999;
              margin-right:
              transition: all 0.2s;
            }
            &.active{
              color: #e87c7e;
              &:hover{
                  color: #e87c7e;
                  .nav-icon {
                    color: #e87c7e;
                  }
              }
              .nav-icon {
                color: #e87c7e;
              }
            }
            &:hover {
              color: #fff;
              background-color: #3c3c3c;
               .nav-icon {
                 color: #fff;
               }
            }
         }
`;

export const NavTxt = styled.span`
         transition: all 0.2s;
         padding-left: 1.8em;
       `;
