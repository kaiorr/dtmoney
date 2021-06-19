import { useEffect } from "react";
import { Container } from "./Transactions.style";
import { api } from "../../services/api";

export const Transactions = () => {
  useEffect(() => {
    api.get("transactions").then((response) => console.log(response.data));
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
          <tr>
            <td> Desenvolvimento Site</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>

          <tr>
            <td> Desenvolvimento Site</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>

          <tr>
            <td> Aluguel</td>
            <td className="withdraw">- R$ 700</td>
            <td>Despesa</td>
            <td>05/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
