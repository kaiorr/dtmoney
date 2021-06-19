import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    --v-background: #f0f2f5;
    --v-white: #ffffff;
    --v-green: #33cc95;
    --v-red: #e52e4d;
    --v-blue: #5429cc;
    --v-blue-light: #6933ff;
    --v-text-title: #363f5f;
    --v-text-body: #969cb3;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, textarea, button {
    font-family: -apple-system, Poppins, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
