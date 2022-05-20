import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript, SiFigma } from "react-icons/si";
import { FaGitAlt, FaYarn, FaReact } from "react-icons/fa";
import { ImNpm } from "react-icons/im";
import {
  SectionContainer,
  Description,
  Skillss,
  Backgroundskills,
} from "./styles";
export default function Skills() {
  return (
    <SectionContainer>
      <Description>
          <button className="tag">Skills</button>
        <h1>O que estão inclusas nas minhas habilidades?</h1>
        <p>
          Desenvolvo uma interface de usuário simples, intuitiva e responsiva
          que ajuda os usuários a fazer as coisas com menos esforço e tempo com
          essas tecnologias.
        </p>
        <button className="button">Veja meus projetos!!</button>
      </Description>
      <Skillss>
        <Backgroundskills>
          <AiFillHtml5 size={60} color="#F1662A" />
        </Backgroundskills>
        <Backgroundskills>
          <DiCss3 size={60} color="#1572B6" />
        </Backgroundskills>
        <Backgroundskills>
          <SiJavascript size={60} color="#F7DF1E" />
        </Backgroundskills>
        <Backgroundskills>
          <AiFillGithub size={60} />
        </Backgroundskills>
        <Backgroundskills>
          <FaGitAlt size={60} color="#F05033" />
        </Backgroundskills>
        <Backgroundskills>
          <SiFigma size={60} color="#FFF" />
        </Backgroundskills>
        <Backgroundskills>
          <ImNpm size={60} color="#BF3535" />
        </Backgroundskills>
        <Backgroundskills>
          <FaYarn size={60} color="#2188B6" />
        </Backgroundskills>
        <Backgroundskills>
          <FaReact size={60} color="#2188B6" />
        </Backgroundskills>
      </Skillss>
    </SectionContainer>
  );
}
