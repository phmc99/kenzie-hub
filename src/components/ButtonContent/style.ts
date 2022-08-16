import styled from "styled-components";

interface IButtonContent {
  column?: boolean
}

export const ButtonContent = styled.div<IButtonContent>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${(props) => props.column ? "column" : "row"};

  a {
    color: var(--orange-aux);
  }

  @media (min-width: 800px) {
    margin-top: 10px;
    a {
      font-size: 16px;
    }
  }
`;