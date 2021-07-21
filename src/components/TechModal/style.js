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
        width: 100%;
        margin-top: 10px;
        ul {
          li {
            margin: 5px 0;
            display: flex;
            align-items: center;
          }
        }
      }

      button {
        margin-top: 10px;
        background-color: var(--orange-aux);
      }
    }
  }
`;
