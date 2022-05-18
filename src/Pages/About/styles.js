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
  @media(max-width: 400px) {
   display: flex;
   width:350px;
   
   img{
     width: 500px;
    
   }
  }
  @media(max-width: 1070px) {
    display: flex;
    flex-direction: column;
    width:350px;
    .image{
      width: 70%;
      margin: auto;
    }
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
  @media(max-width: 1200px) {
   width: 400px;
   }
   @media(max-width: 1070px) {
     width: 350px;
     text-align: center;
   }

   
     
`;
export const ContainerIframe = styled.div`
  display: flex;
  align-items: center;
  width: 1300px;
  margin: auto;
  gap: 100px;
  .button{
    width: 240px;
  }
  @media(max-width: 1050px) {
    display: flex;
    flex-direction: column;
    width: 350px;
    iframe{
      width: 320px;
    }
     }
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

export const ContainerPrincipal = styled.div`

margin: auto;
display: flex;
flex-wrap: wrap;
margin: auto;
@media(max-width: 750px) {
     
width: 350px;
   
.image{
  width: 350px;
  margin: auto;
  margin-top: 250px;
}
img{
  width: 350px;
  margin: auto;
}
}
`