import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -5rem;

  div {
    background: var(--v-white);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--v-white);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.total {
      background: var(--v-green);
      color: var(--v-white);
    }

    &.top-deposit-background {
      background: ${darken(0.25, "#33cc95")};
    }

    &.top-withdraw-background {
      background: ${darken(0.25, "#e52e4d")};
    }
  }
`;
