import styled from "styled-components";

export const ModalBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgb(0, 0, 0, 0.85);
  position: absolute;
  z-index: 1;

  .modal-main {
    overflow: scroll;

    padding: 10px;
    width: 300px;
    height: 420px;
    background-color: var(--black-pastel);

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;

    gap: 10px;

    .header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      h1 {
        color: var(--white-pastel);
        font-size: 24px;
      }
      button {
        background-color: transparent;
        width: 40px;
      }
    }
  }

  @media (min-width: 800px) {
    .modal-main {
      width: 600px;
      height: 480px;
    }
  }
`;
