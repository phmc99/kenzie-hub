import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    --white-pastel: #FAF6F2;
    --black-pastel: #2B3034;
    --beige-pastel: #B4A797;
    --pink-pastel: #EFD4CB;
    --orange-aux: #EE5B30;
  }

  html, body, div, h1, h2, input, label, button, a, p , ul, li {
    margin: 0;
    padding: 0;
    border: 0;

    box-sizing: border-box;

    font-size: 14px;
    font-family: 'Heebo', sans-serif;
    
    list-style: none;

    
  }

  body {
    background-color: var(--white-pastel);
    color: var(--black-pastel);
  }

  h1, h2 {
    font-family: 'Archivo', sans-serif;
    color: var(--black-pastel);

  }

  input {
    padding: 8px;
    height: 50px;
    border-radius: 10px;
    outline: none;
  }

  select {
    outline: none;
    border-radius: 5px;
    border: 0;
    padding: 8px;
    background-color: var(--white-pastel);
  }

  button {
    background-color: var(--black-pastel);
    color: var(--white-pastel);
    cursor: pointer;
    padding: 8px;
    height: 50px;
    font-size: 24px;
    border-radius: 10px;
    width: 180px;
    outline: none;


    &:hover {
    transition: all 0.2s;
    filter: brightness(0.8);
  }
  }
`;
