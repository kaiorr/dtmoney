import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
  }

  th {
    color: var(--v-text-body);
    font-weight: 400;
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5rem;
  }

  td {
    padding: 1rem 2rem;
    border: 0;
    background: var(--v-shape);
    font-weight: normal;
    color: var(--v-text-body);
    border-radius: 0.3rem;

    &:first-child {
      color: var(--v-text);
    }

    &.deposit {
      color: var(--v-green);
    }

    &.withdraw {
      color: var(--v-red);
    }
  }
`;
