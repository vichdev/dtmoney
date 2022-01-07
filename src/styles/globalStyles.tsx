import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --background: #f0f2f5;
  --red: #E52E4D;
  --blue-light: #6933FF;
  --green: #33CC95;
  --blue: #5429CC;
  --text-title: #363F5F;
  --text-body: #969CB3;
  --background: #F0F2F5;
  --shape: #FFFFFF;
}

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body{
  font: 400 14px Roboto, sans-serif;
  background: var(--background);
  @media (max-width: 1080px) {
      font-size: 93.75%;
  }
  @media (max-width: 720px) {
      font-size: 87.5%;
  }

}
html {
  @media (max-width: 1080px) {
      font-size: 93.75%;
  }
  @media (max-width: 720px) {
      font-size: 87.5%;
  }
}

input,
button,
textarea {
  font: 400 18px Roboto, sans-serif;
}

button, svg {
  cursor: pointer;
}
`;
