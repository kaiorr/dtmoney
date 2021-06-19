import Modal from "react-modal";
import { Container, TransactionTypeContainer } from "./ModalTransaction.style";
import closeModalImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

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
        <img src={closeModalImg} alt="Fechar Modal" />
      </button>
      <Container>
        <h2>Cadastrar Transação</h2>

        <input type="text" placeholder="Titulo" />

        <input type="number" placeholder="Valor" />

        <TransactionTypeContainer>
          <button type="button">
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>

          <button type="button">
            <img src={outcomeImg} alt="Saida" />
            <span>Saida</span>
          </button>
        </TransactionTypeContainer>

        <input type="text" placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};
