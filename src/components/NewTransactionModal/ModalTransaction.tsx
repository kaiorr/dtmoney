import Modal from "react-modal";
import { Container } from "./ModalTransaction.style";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const ModalTransaction = ({ isOpen, onRequestClose }: ModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <h3>Cadastrar transação</h3>

      <Container>
        <h2>Cadastrar Transação</h2>

        <input type="text" placeholder="Titulo" />

        <input type="number" placeholder="Valor" />

        <input type="text" placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};
