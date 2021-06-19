import Modal from "react-modal";
import { Container } from "./ModalTransaction.style";
import closeModal from "../../assets/close.svg";

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
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeModal} alt="Fechar Modal" />
      </button>
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
