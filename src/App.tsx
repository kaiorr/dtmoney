import { useState } from "react";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Header } from "./components/Header/Header";
import { GlobalStyle } from "./globalStyle/global.style";
import Modal from "react-modal";
import { ModalTransaction } from "./components/NewTransactionModal/ModalTransaction";
import { TransactionsContext } from "./Contexto/Transactions.context";

export const App = () => {
  Modal.setAppElement("#root");

  const [isNewTransctionModalOpen, setIsNewTransctionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransctionModalOpen(true);
  }

  function handleClosenNewTransactionModal() {
    setIsNewTransctionModalOpen(false);
  }

  return (
    <TransactionsContext.Provider value={[]}>
      <Header openNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <ModalTransaction
        isOpen={isNewTransctionModalOpen}
        onRequestClose={handleClosenNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsContext.Provider>
  );
};
