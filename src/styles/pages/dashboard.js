import styled from 'styled-components';


export const ContainerCards = styled.div`
  @media (max-width: 600px){
    margin-top: 150px;
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
      height: 200px;
      
    }

    div {
      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #4242b3;
        margin-top: 4px;
      }

      .release-date{
        margin-top: 20px;
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

export const Form = styled.form`

  @media (max-width: 600px){
    display: flex;
    flex-direction: column;
  }


  width: 100%;
  height: 50px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  color: white;

  .logo{
      @media (max-width: 600px){
      margin-bottom: 20px;
      }
  }

  .choiseMovie, .choiseTrending {
      @media (max-width: 600px){
      margin-bottom: 20px;
    }
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .choiseMovie label{
    font-weight: bold;
    margin-right: 10px;
  }

  .choiseMovie{
    input[type=text] {
    width: 150px;
    height: 30px;
    padding: 10px 10px;
    box-sizing: border-box;  
    -webkit-transition: width 0.5s ease-in-out;
    transition: width 0.5s ease-in-out;
  }

    input[type=text]:focus {
      width: 80%;
    }

  }

  .choiseTrending span {
    font-weight: bold;
    margin-right: 10px;
  }

  .choiseTrending select {
    width: 100px;
    height: 30px;
  }

  .choiseTrending select option {
    width: 100px;
  }

  .choiseTrending{
    

    display: flex;
  }

  

  img {
    width: 200px;
    height: 52px;
    border-radius: 10px;
  }

  
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
