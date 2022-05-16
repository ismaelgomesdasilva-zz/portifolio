import { MdWavingHand } from "react-icons/md";
import avatar from "../../Assets/avatar.svg";
import card1 from "../../Assets/card1.png";
import card2 from "../../Assets/card2.png";
import card3 from "../../Assets/card3.png";
import { Container, Award, AwardDiv } from "./styles";
export default function Home() {
  return (
    <Container>
      <h3>
        Olá, Eu sou <span>Ismael Gomes </span>
        <MdWavingHand className="hand-icon" color="#FFCF4D" />
      </h3>
      <h1>Desenvolvedor Front-end</h1>
      <p>Eu projeto e codifico coisas lindamente simples e amo o que faço.</p>
      <img src={avatar} />
      <AwardDiv>
        <Award>
          <img src={card1} />

          <div className="description">
            <p>5+</p> <h2>Meses de experiencia</h2>
          </div>
        </Award>
        <Award>
          <img src={card2} />

          <div className="description">
            <p>5+</p> <h2>Meses de experiencia</h2>
          </div>
        </Award>
        <Award>
          <img src={card3} />

          <div className="description">
            <p>5+</p> <h2>Meses de experiencia</h2>
          </div>
        </Award>
      </AwardDiv>
    </Container>
  );
}
