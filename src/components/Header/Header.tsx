import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./Header.style";

interface HeaderProps {
  openNewTransactionModal: () => void;
}

export const Header = ({ openNewTransactionModal }: HeaderProps) => (
  <Container>
    <Content>
      <img src={logoImg} alt="dt money" />
      <button type="button" onClick={openNewTransactionModal}>
        Nova Transação
      </button>
    </Content>
  </Container>
);
