import styled from 'styled-components';

export const Header = styled.header`

  @media (max-width: 600px){
    display: flex;
    flex-direction: column;
  }

  /* border: 1px solid black; */
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

      width: 200px;
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

  .choiseMovie{
    width: 210px;

    input[type=text] {
    width: 120px;
    height: 30px;
    padding: 10px 10px;
    box-sizing: border-box;  
    -webkit-transition: width 0.5s ease-in-out;
    transition: width 0.5s ease-in-out;
  }

    input[type=text]:focus {
      width: 100%;
    }

  }

  .choiseTrending select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    height: 30px;
    padding: 0 77px;

    background: url({ArrowDropDownIcon}) no-repeat #eeeeee;
    background-position: 218px center;

    border-radius: 5px;
    border:1px solid #ddd;

  }
  

  .choiseTrending {
    width: 210px;

    display: flex;
  }

  img {
    width: 200px;
    height: 52px;
    border-radius: 10px;
  }

  
`;