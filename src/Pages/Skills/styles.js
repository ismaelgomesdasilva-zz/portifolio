import styled from "styled-components";

export const SectionContainer = styled.section`
display: flex;
width: 1300px;
margin: 300px auto;
align-items: center;

`

export const Description = styled.div`
width: 600px;
margin-right: 150px;
h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 50px;
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
  .tag{
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

  }
  .button {
    width: 200px;
    height: 54px;
    left: 717px;
    top: 1470.04px;
    background: #ffb742;
    border-radius: 50px;
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    margin: auto;
    transition: all 0.5s ease-in-out;
    &:hover{
        transform: scale(0.9);
        background-color: #fff;
        border: 2px solid #FFF;
    }
  }
`
export const Skillss = styled.div`
display: flex;
flex-wrap: wrap;
gap: 10px;

`
export const Backgroundskills = styled.div`

width: 80px;
height: 80px;
display: flex;
align-items: center;
justify-content: center;

background: #383E45;
border-radius: 10px;
`
