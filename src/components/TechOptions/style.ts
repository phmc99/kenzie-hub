import styled from "styled-components";

export const TechOtionsContent = styled.div`
  width: 280px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .icon-select {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px 0;
  }
  .button-container {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    button {
    }

    .update {
      background-color: var(--orange-aux);
      font-size: 14px;
      width: auto;
      max-height: 35px;
    }

    .delete {
      cursor: pointer;
      font-size: 24px;
      color: #ffa5a5;
      margin-left: 12px;
      &:hover {
        color: darkred;
      }
    }
  }
`;
