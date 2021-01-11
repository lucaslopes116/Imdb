import styled from 'styled-components';

export const NotFoundPage = styled.div`
  @media (max-width: 600px){
    img {
      width: 100%;
    }
  }

  .notFound-getOut {
      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;
      margin-top: 20px;

      span {
        font-size: 23px;
        color: white;

        margin-left: 10px;
      }
    }

`;