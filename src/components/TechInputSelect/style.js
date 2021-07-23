import styled from "styled-components";

export const InputBox = styled.div`
  width: 280px;
  height: 40px;
  border-radius: 5px;
  max-width: 420px;

  .input-content {
    display: flex;
    input {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      background-color: #1c1f2194;
      outline: none;
      width: 250px;
      height: 100%;
      color: var(--white-pastel);
    }

    svg {
      fill: var(--white-pastel);
      background-color: #1c1f21db;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      font-size: 37px;
      cursor: pointer;
    }
  }
`;

export const ResultBox = styled.div`
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;

  width: 280px;
  max-width: 420px;
  max-height: 150px;
  z-index: 2;
  background-color: var(--beige-pastel);
  border: 2px solid var(--beige-pastel);
  position: absolute;

  text-align: center;

  overflow: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none;
  }

  .tech-item {
    font-size: 16px;
    padding: 5px;
    margin: 2px 0;
    height: 40px;
    background-color: #1f2225;
    color: white;
    cursor: pointer;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
