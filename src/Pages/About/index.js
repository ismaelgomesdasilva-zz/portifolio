import AboutPerfil from "../../Assets/about.png";
import { Container, Description, ContainerIframe, Tag,ContainerPrincipal } from "./styles";

export default function About() {
  return (
    <ContainerPrincipal>
      <Container id="#about">
        <div className="image">
          <img src={AboutPerfil} />
        </div>
        <Description>
          <Tag>Sobre Mim</Tag>
          <h1>Resumo</h1>
          <p>
            Olá, bem-vindos! Me chamo Ismael tenho 21 anos, sou natural de
            Recife e estou em São Paulo a mais ou menos 1 ano. Atualmente atuo
            como desenvolvedor Freelancer, desenvolvedo sites para fins
            didaticos ou para pequenos clientes. Tenho como objetivo ingressar
            em uma empresa e adquirir e aplicar conhecimentos no dia a dia como
            um desenvolvedor Front end.
            <br /> <strong>Abaixo deixarei um video detalhado sobre mim</strong>
          </p>
          <button className="button">Saiba mais!</button>
        </Description>
      </Container>
      <ContainerIframe>
        <div className="description">
          <Description>
            <Tag>Sobre Mim</Tag>
            <h1>Vídeo apresentação</h1>
            <p>
              Essa apresentação é um pouco mais detalhada, aqui eu conto um
              pouco mais sobre minha jornada na área de TI e como eu conheci a
              parte de desenvolvimento. Pensei em trazer isso como algo novo em
              um portifolio.
            </p>
            <button className="button">Quer me conhecer mais?</button>
          </Description>
        </div>
        <div>
          <iframe
            width="600"
            height="315"
            src="https://www.youtube.com/embed/IU_gsbLqLpA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </ContainerIframe>
    </ContainerPrincipal>
  );
}
