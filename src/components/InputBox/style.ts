import styled from "styled-components";

export const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 60px;

  input {
    background-color: #b4a79740;
    outline: none;
    height: 40px;

    &:focus {
      border-bottom: 2px solid var(--beige-pastel);
    }
  }

  .input-error {
    border-bottom: 2px solid #ff3939;
  }

  @media (min-width: 800px) {
    height: 80px;
  }
`;