import styled from "styled-components";

export const InputBox = styled.div`
  width: 280px;
  height: 40px;
  border-radius: 5px;
  max-width: 420px;

  input {
    border-radius: 2px;

    outline: none;
    width: 100%;
    height: 100%;
  }
`;

export const ResultBox = styled.div`
  width: 280px;
  max-width: 420px;
  z-index: 2;
  background-color: var(--beige-pastel);
  border: 2px solid gray;
  position: absolute;

  .tech-item {
    font-size: 16px;
    padding: 5px;
    margin: 2px 0;
    height: 40px;
    background-color: var(--black-pastel);
    color: white;
  }
`;
