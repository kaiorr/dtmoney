import { useEffect, useState } from "react";
import { Container } from "./Transactions.style";
import { api } from "../../services/api";

interface TransactionItems {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export const Transactions = () => {
  const [transactions, setTransactions] = useState<TransactionItems[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((item) => (
            <tr key={item.id}>
              <td> {item.title} </td>
              <td className={item.type}> {item.amount} </td>
              <td> {item.category} </td>
              <td> {item.createdAt} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
