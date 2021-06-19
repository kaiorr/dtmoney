import { Container } from "./Dashboard.style";
import { Summary } from "../Summary/Summary";
import { Transactions } from "../Trasactions/Transactions";

export const Dashboard = () => {
  return (
    <Container>
      <Summary />
      <Transactions />
    </Container>
  );
};
