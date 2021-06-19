import Modal from "react-modal";
import {
  Container,
  TransactionTypeContainer,
  RadioButtonBox,
} from "./ModalTransaction.style";
import closeModalImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { FormEvent, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const ModalTransaction = ({ isOpen, onRequestClose }: ModalProps) => {
  const [titleTransaction, setTitleTransaction] = useState("");
  const [valueTransaction, setValueTransaction] = useState(0);
  const [categoryTransaction, setCategoryTransaction] = useState("");
  const [type, setType] = useState("deposit");

  function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault();
    console.log({
      titleTransaction,
      valueTransaction,
      type,
      categoryTransaction,
    });
  }

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
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <input
          type="text"
          placeholder="Titulo"
          value={titleTransaction}
          onChange={({ target }) => setTitleTransaction(target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={valueTransaction}
          onChange={({ target }) => setValueTransaction(Number(target.value))}
        />

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

        <input
          type="text"
          placeholder="Categoria"
          value={categoryTransaction}
          onChange={({ target }) => setCategoryTransaction(target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};
