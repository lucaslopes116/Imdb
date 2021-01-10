import styled from 'styled-components';

export const Repositories = styled.div`
  margin-top: 80px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  

  a {
    background: #fff;
    border-radius: 5px;
    width: 200px;
    padding: 24px;
    text-decoration: none;

    display: flex;
    align-items: center;
    flex-direction: column;
    transition: transform 0.2s;

    margin-right: 15px;

   

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 200px;
      height: 200px;
      
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 50px;

  background-color: green;

  border: 1px solid black;

  button {
    border: 1px solid black;

  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
