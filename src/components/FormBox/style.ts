import styled from "styled-components";
import { css } from "styled-components";

interface FormBoxProps {
  login?: boolean;
}

export const FormBox = styled.div<FormBoxProps>`
  background-color: #efd4cb80;
  width: 300px;
  padding: 20px;
  border-radius: 20px;
  ${(props) =>
    props.login
      ? css`
          height: 330px;
        `
      : css`
          height: 500px;
        `}

  h1 {
    font-size: 42px;
    text-align: center;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    button {
      font-size: 18px;
      ${(props) =>
        props.login
          ? css`
              width: 100%;
            `
          : css`
              width: 120px;
            `}
    }
  }

  span {
    font-size: 12px;
    height: 12px;
    color: #ff3939;
  }

  .showError {
    display: block;
  }

  @media (min-width: 800px) {
    width: 100%;
    max-width: 420px;

    ${(props) =>
      props.login
        ? css`
            height: 360px;
          `
        : css`
            height: 600px;
          `}

    form {
      height: 450px;
      button {
        width: 180px;
      }
    }
  }
`;
