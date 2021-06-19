import { useState } from "react";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Header } from "./components/Header/Header";
import { GlobalStyle } from "./globalStyle/global.style";
import Modal from "react-modal";
import { ModalTransaction } from "./components/NewTransactionModal/ModalTransaction";
import { TransactionsProvider } from "./Contexto/Transactions.context";

Modal.setAppElement("#root");

export const App = () => {
  const [isNewTransctionModalOpen, setIsNewTransctionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransctionModalOpen(true);
  }

  function handleClosenNewTransactionModal() {
    setIsNewTransctionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header openNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <ModalTransaction
        isOpen={isNewTransctionModalOpen}
        onRequestClose={handleClosenNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
};
