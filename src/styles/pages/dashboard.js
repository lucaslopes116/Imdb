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
    box-shadow: inset 0 0 1em gold;
    
  }

  .lowScore {
    box-shadow: inset 0 0 1em #c53030;

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
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    margin: 0px 20px 20px 0;

    

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 200px;
      height: 250px;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      
    }

    div {
      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      strong {
        font-size: 16px;
        color: #3d3d4d;
        padding: 5px 5px 0 5px;
        word-break: break-all;
      }

      p {
        margin-top: 5px;
        font-size: 16px;
        color: #4242b3;
        word-break: break-all;
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

    .score-iconsScore  {
      padding-bottom: 5px 0;

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
