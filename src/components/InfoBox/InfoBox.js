import styled from "styled-components";

export const InfoBox = styled.div`
  background-color: var(--black-pastel);
  margin: 5px 0;
  border-radius: 10px;
  padding: 10px;
  width: 300px;
  max-height: 220px;
  overflow: hidden;

  .title {
    outline: none;
    display: flex;
    align-items: center;
    h2 {
      color: var(--white-pastel);
      margin: 5px 0;
      font-size: 20px;
    }

    button {
      width: 40px;
      height: 40px;
      font-size: 16px;
      color: var(--pink-pastel);

      &:hover {
        filter: none;
        svg {
          transition: 0.2s;
          fill: var(--orange-aux);
        }
      }

      &:disabled {
        color: gray;
        filter: brightness(0.5);
        background-color: transparent;
      }
    }
  }

  p {
    color: var(--white-pastel);
  }

  .techs-box {
    display: flex;
    justify-content: space-around;
  }

  @media (min-width: 800px) {
    width: 600px;

    h2 {
      font-size: 24px;
    }

    p {
      font-size: 14px;
      text-align: justify;
    }
  }
`;
