import Modal from "react-modal";
import {
  Container,
  TransactionTypeContainer,
  RadioButtonBox,
} from "./ModalTransaction.style";
import closeModalImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const ModalTransaction = ({ isOpen, onRequestClose }: ModalProps) => {
  const [type, setType] = useState("deposit");

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
          <RadioButtonBox
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            colorActive={"green"}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioButtonBox>

          <RadioButtonBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            colorActive={"red"}
          >
            <img src={outcomeImg} alt="Saida" />
            <span>Saida</span>
          </RadioButtonBox>
        </TransactionTypeContainer>

        <input type="text" placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};
