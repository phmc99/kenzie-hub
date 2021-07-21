import styled from "styled-components";

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  .cover {
    display: none;
    width: 100%;
    height: 30vh;
    background-color: var(--beige-pastel);
  }

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    align-items: center;

    .box-avatar {
      background-color: var(--black-pastel);
      border-radius: 10px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .avatar-circle {
        padding: 5px;
        background-color: var(--pink-pastel);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        img {
          width: 120px;
          border-radius: 50%;
        }
      }
      h1 {
        margin-top: 15px;
        color: var(--white-pastel);
        font-size: 18px;
      }
    }

    .column {
      display: flex;
      flex-direction: column;
    }
  }

  @media (min-width: 800px) {
    .cover {
      display: block;
    }
    .content {
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-evenly;
      width: 100%;
      top: 40%;

      .column {
      }
    }
  }
`;
