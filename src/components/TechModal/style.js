import styled from "styled-components";

export const TechModalBox = styled.div`
  width: 100%;
  height: 300px;

  h2 {
    color: var(--white-pastel);
    font-size: 16px;
    margin: 5px 0;
  }
  label {
    color: var(--white-pastel);
  }
  .form-box {
    padding: 10px;
    form {
      display: flex;
      flex-direction: column;
      align-items: center;

      .my-techs {
        margin: 10px 0;
        display: flex;
        gap: 20px;
        align-items: center;
      }

      button {
        margin-top: 10px;
        background-color: var(--orange-aux);

        &:disabled {
          filter: brightness(0.55);
          cursor: not-allowed;
        }
      }
    }
  }
`;
