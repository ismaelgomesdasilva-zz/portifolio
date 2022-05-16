import styled from "styled-components";

export const Container = styled.div`
  width: 60rem;
  height: 28rem;
  margin: 7rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto";
  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 3rem;
    text-transform: capitalize;

    color: #ffffff;
  }
  span {
    text-decoration-line: underline;
    color: #ffb742;
  }
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 3rem;
    line-height: 3rem;
    color: #ffffff;
  }
  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 100;
    font-size: 1.5rem;
    line-height: 3rem;
    color: #ffffff;
  }
  .hand-icon {
    animation: hi 1.5s ease-in-out infinite alternate;
    margin-left: 5px;
  }
  @keyframes hi {
    0% {
      transform: translate(-4%, -4%) rotate(-30deg);
    }
  }
`;
export const Award = styled.div`
  width: 416px;
  height: 120px;
  background: #292b2e;
  border-radius: 10px;
  text-align: center;
  display: flex;

  align-items: center;
  img{
      margin-left: 2rem;
  }
div{
    margin: auto;
}
  p {
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    font-family: "Roboto";
    color: #ffb742;
  }
  h2 {
    font-size: 16px;
    line-height: 31px;
    color: #ffffff;
    font-family: "Poppins";
    color: #ffffff;
  }
`;
export const AwardDiv = styled.div`
  display: flex;
  width: 1440px;
  margin-top: 150px;
  justify-content: space-around;
  
`;
