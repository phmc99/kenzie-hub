import styled from "styled-components";

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  .cover {
    width: 100%;
    height: 30vh;
    background-color: var(--beige-pastel);
    text-align: right;

    button {
      margin: 10px;
      font-size: 10px;
      width: 65px;
      height: 35px;
      background-color: #73685952;
      color: var(--black-pastel);

      display: flex;
      align-items: center;
      justify-content: space-around;
      float: right;

      &:hover {
        filter: brightness(0.55);
      }

      @media (min-width: 768px) {
        width: 85px;
        font-size: 14px;
      }
    }
  }

  .content {
    position: absolute;
    top: 60%;
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
      width: 150px;
      max-height: 240px;
      overflow: hidden;
      text-align: center;
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
      .module {
        color: gray;
        word-wrap: break-word;
      }
    }

    .column {
      display: flex;
      flex-direction: column;

      .contact {
        color: gray;
        font-size: 12px;
      }
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
    }
  }
`;
