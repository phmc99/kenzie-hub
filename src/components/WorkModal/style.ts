import styled from "styled-components";

export const ModalWorkBox = styled.div`
  padding: 20px;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--white-pastel);
    gap: 15px;

    .input-box {
      width: 100%;
      label {
        align-self: flex-start;
      }
      input {
        width: 100%;
      }
    }

    button {
      background-color: var(--orange-aux);
    }
  }
  .delete {
    cursor: pointer;
    font-size: 24px;
    color: #ffa5a5;
    margin-left: 12px;
    &:hover {
      color: darkred;
    }
  }
`;
