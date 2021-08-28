import styled from "styled-components";

export const MainContent = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  aside {
    display: none;
    width: 50%;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 60px;
  }

  @media (min-width: 800px) {
    aside {
      display: block;
      width: 50%;
    }
    section {
      width: 50%;
    }
  }
`;

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
    height: 380px;
  }
`;

export const ButtonContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: var(--orange-aux);
  }

  @media (min-width: 800px) {
    margin-top: 20px;
    a {
      font-size: 16px;
    }
  }
`;
