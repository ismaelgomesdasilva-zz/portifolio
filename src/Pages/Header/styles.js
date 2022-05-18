import styled from "styled-components";

export const Container = styled.header`
  background-color: #292b2e;
  height: 66px;
  width: 80%;
  margin: auto;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 50px;
  button {
    width: 121px;
    height: 54px;

    background: #ffb742;
    border: 2px solid #ffb742;
    border-radius: 50px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;

    color: #212529;
    margin-right: 15px;
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(0.9);
        background-color: #fff;
        border: 2px solid #FFF;
    }
  }
  @media(max-width: 1100px) {
   width: 350px;
  }
`;
export const Navlink = styled.div`
  display: flex;
  gap: 50px;
  margin: auto;
  justify-items: center;
  a{text-decoration: none;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    text-transform: capitalize;
    transition: all 0.2s ease-in-out;

    color: #ffffff;
    &:hover{
        color:#ffb742;
        
    }
  }
  @media(max-width: 1100px) {
   a{display: none;}
  }
`;
