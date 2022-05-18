import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
  width: 1300px;
  margin: 150px auto;
  margin-top: 300px;

  img {
    margin-bottom: 100px;
  }
`;
export const Description = styled.div`
  width: 600px;

  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 30px;
    color: #ffffff;
    margin-bottom: 40px;
  }
  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    color: #d5d5d5;
    margin-bottom: 25px;
  }
  .button {
    width: 150px;
    height: 54px;
    left: 717px;
    top: 1470.04px;
    background: #ffb742;
    border-radius: 50px;
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    margin: auto;
  }
`;
export const ContainerIframe = styled.div`
  display: flex;
  align-items: center;
  width: 1300px;
  margin: auto;
  gap: 100px;
`;
export const Tag = styled.button`
background-color: #32363A;
border: none;
border-radius: 30px;
margin-bottom:20px ;
margin-left: -5px;
width: 150px;
height: 42px;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 30px;
text-transform: uppercase;
color: #FFB742;

`