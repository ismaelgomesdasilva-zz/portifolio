import AboutPerfil from "../../Assets/about.png";
import { Container, Description, ContainerIframe } from "./styles";

export default function About() {
  return (
      <>
    <Container id='#about'>
      <div>
        <img src={AboutPerfil} />
      </div>
      <Description>
        <h1>Sobre mim</h1>
        <p>
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum
        </p>
        <button>Quer me conhecer mais?</button>
      </Description>
    </Container>
    <ContainerIframe>
    <div>
    <Description>
        <h1>Video Apresentação</h1>
        <p>
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum
        </p>
        <button>Quer me conhecer mais?</button>
      </Description>
    </div>
    <div>
      <iframe width="600" height="315" src="https://www.youtube.com/embed/IU_gsbLqLpA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    </div>
    </ContainerIframe>
    </>
  );
}
