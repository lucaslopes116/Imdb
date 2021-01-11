import styled from 'styled-components';

export const GoBackContainer = styled.div`
  width: 100px;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    margin-left: 15px;

    font-size: 20px;
    color: white;
  }

  .detail-data {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .detail-picture {
    width: 300px;
    height: 100px;
  }

  .btn-goback {
    cursor: pointer;
    color: white;
  }
`;

export const ContainerDetails = styled.div`
  @media (max-width: 600px){
    display: flex;
    flex-direction: column;
  }

  margin-top: 50px;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  .detail-data {
    padding: 0 20px;
    width: 100%;
    height: 300px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  .detail-title {
    font-size: 22px;
  }

  .detail-date {
    
  }

  img {
    width: 300px;
    height: 300px;

    border-radius: 20px;
  }
  
`;