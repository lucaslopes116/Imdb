import styled from 'styled-components';

export const ContainerCards = styled.div`
  @media (max-width: 600px){
    margin-top: 150px;
  }

  .error {
    font-size: 25px;
    color: white;
    font-weight: bold;
  }
  
  margin-top: 80px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;


  .highScore {
    border:  1px solid #04d361;
  }

  .lowScore {
    border: 1px solid #c53030;
  }
  

  a {
    background: #fff;
    width: 200px;
    height: 350px;
    text-decoration: none;

    display: flex;
    align-items: center;
    flex-direction: column;
    transition: transform 0.2s;

    margin: 0px 20px 20px 0;

    

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 200px;
      height: 250px;
      
    }

    div {
      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      strong {
        font-size: 18px;
        color: #3d3d4d;
        padding: 0 10px;
      }

      p {
        font-size: 18px;
        color: #4242b3;
        margin-top: 4px;
      }

      .release_date {
        font-size: 18px;

      }


    .popularity-iconsScore svg {
      margin: 0;
        
    }

    .score-iconsScore svg {
      margin: 0;

    }

    .score-iconsScore, .popularity-iconsScore{
      display:flex;
      flex-direction: row;
      justify-content: space-evenly;
    }
    .score-iconsScore svg{
      color: #c7c73a;
    }

    .popularity-iconsScore svg{
      color: red;
    }

  }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
