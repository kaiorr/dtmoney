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
    color: var(--v-text-title);

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
  }
`;
