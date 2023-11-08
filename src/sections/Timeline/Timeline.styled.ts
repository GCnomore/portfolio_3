import styled from 'styled-components';

export const Container = styled.div`
   color: white;
   z-index: 100;
   width: 100%;
   
   > div{
      border-right: 3px solid white;
      margin-right: 5rem;
      padding: 3rem 2rem 3rem 0;
      display: flex;
      flex-direction: column;
      align-items: end;
      
      @media screen and (max-width: 840px) {
         margin-right: 1rem;
      }
   }
   
   h3 {
      width: fit-content;
      font-weight: bold;
      font-size: 45px;
      border-bottom: 2px solid white;
      padding-left: 20rem;
      margin-bottom: 1rem;
      margin-top: 15rem;

      @media screen and (max-width: 840px) {
         font-size: 38px;
         padding-left: 50%;
      }
   }

   h3:first-child {
      margin-top: 0;
   }


   p {
      font-size: 24px;
      margin: 1rem 0;
      width: 600px;
      text-align: left;
      line-height: 26px;
      filter: drop-shadow(1px 1px 1px black);

      @media screen and (max-width: 840px) {
         font-size: 18px;
         width: 80%;
      }
   }
`;

export const Sky = styled.img`
   transform: rotateY(180deg);
   position: absolute;
   left: 0;
   /* top: 90%; */
   bottom: 10%;
   z-index: -100;

   @media screen and (max-width: 840px) {
      bottom: 5%;
   }
`;