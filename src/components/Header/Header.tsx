import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./Header.style";

export const Header = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button">Nova Transação</button>
      </Content>
    </Container>
  );
};
