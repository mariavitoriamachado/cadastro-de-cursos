import {
  Container,
  Title,
  Button,
  Image,
  LeftContainer,
  RightContainer,
  SubTitle,
  ButtonBox,
} from "./styles";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container>
      <LeftContainer>
        <Title>Cursos online</Title>
        <SubTitle>Cadastre e pesquise por cursos!</SubTitle>

        <Link to="/new">
          <Button>
            <ButtonBox>{">"}</ButtonBox>
            Cadastre curso
          </Button>
        </Link>
      </LeftContainer>

      <RightContainer>
        <Image />
      </RightContainer>
    </Container>
  );
}