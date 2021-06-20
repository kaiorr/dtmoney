import { Container } from "./Summary.style";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useContext } from "react";
import { TransactionsContext } from "../../Contexto/Transactions.context";

export const Summary = () => {
  const { transactions } = useContext(TransactionsContext);
  console.log(transactions);
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="entradas" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="entradas" />
        </header>
        <strong>- R$ 500,00</strong>
      </div>

      <div className="total">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="entradas" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
    </Container>
  );
};
