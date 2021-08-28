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

    h1 {
      font-size: 58px;
    }

    .button-container {
      width: 300px;

      display: flex;
      justify-content: space-around;
      align-items: center;

      span {
        color: var(--black-pastel);
      }

      button {
        width: 120px;
        font-size: 14px;
      }
      .register-button {
        background-color: var(--orange-aux);
      }
    }

    p {
      width: 300px;
      text-align: center;
      font-size: 14px;
    }
  }

  @media (min-width: 768px) {
    aside {
      display: block;
      width: 50%;
    }
    section {
      width: 50%;
      .button-container {
        width: 480px;

        span {
          color: var(--black-pastel);
        }

        button {
          width: 180px;
          font-size: 22px;
        }
      }
      p {
        width: 480px;
        font-size: 20px;
      }
    }
  }
`;
