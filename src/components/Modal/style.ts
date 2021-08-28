import styled from "styled-components";

export const ModalBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgb(0, 0, 0, 0.85);
  position: fixed;
  z-index: 1;

  .modal-main {
    border-radius: 5px;
    overflow: hidden;

    padding: 10px;
    min-height: 270px;
    width: 300px;
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
      span {
        color: var(--pink-pastel);
        height: 20px;
        width: 20px;
        cursor: pointer;
        text-align: center;
        font-size: 20px;
      }
    }

    .content {
      min-height: 120px;
      max-height: 480px;
    }
  }

  @media (min-width: 800px) {
    .modal-main {
      min-width: 360px;
      min-height: 220px;
    }
  }
`;
