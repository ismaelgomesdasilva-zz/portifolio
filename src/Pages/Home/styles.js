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
  @media(max-width: 900px) {
   width: auto;
  }
  @media(max-width: 800px) {
   >P{
       width: 500px;
       text-align: center;
   }
   @media(max-width: 800px) {
   h3{
       width: 350px;
       text-align: center;
   }
   h1{
       text-align: center;
   }
   >P{
       width: 350px;
       margin-top: 10px;
   }
  > div{
    width: 350px;
   }
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
  padding: 20px;
  flex-wrap: wrap;
  align-items: center;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: #70663a;
    transform: scale(1.1);
  }
  img {
    margin-left: 2rem;
  }
  div {
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
  @media(max-width: 800px) {
   width: 350px;
  }
`;
export const AwardDiv = styled.div`
  display: flex;
  width: 1290px;
  margin-top: 150px;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  @media(max-width: 1290px) {
   width: 1000px;
    flex-wrap:wrap;
  }
  @media(max-width: 900px) {
   flex-direction: column;
   width: 500px;
   align-items: center;
  }
  
`;
