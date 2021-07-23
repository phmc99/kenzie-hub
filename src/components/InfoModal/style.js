import styled from "styled-components";

export const InfoModalBox = styled.div`
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    label {
      color: var(--white-pastel);
    }

    input {
      background-color: #b4a79740;
    }

    button {
      margin-top: 10px;
      align-self: flex-end;
      background-color: var(--orange-aux);
    }
  }
`;
