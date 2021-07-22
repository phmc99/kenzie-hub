import styled from "styled-components";

export const TechOtionsContent = styled.div`
  width: 280px;

  .icon-select {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 5px 0;
  }
  .button-container {
    display: flex;
    justify-content: space-between;
    button {
      font-size: 14px;
      width: auto;
    }
    .update {
      background-color: var(--orange-aux);
    }
    .delete {
      background-color: transparent;
      color: darkred;
      font-weight: 18px;
    }
  }
`;
