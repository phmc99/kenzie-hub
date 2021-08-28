import styled from "styled-components";

export const TechBox = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  max-height: 90px;
  border-radius: 10px;

  ::-webkit-scrollbar {
    display: none;
  }

  span {
    color: gray;
    margin: 5px 0;
    text-align: center;
  }
  ul {
    display: flex;
    width: 100%;
    gap: 2px;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (min-width: 768px) {
    span {
      font-size: 14px;
      text-align: left;
    }

    ul {
      justify-content: flex-start;
      li {
        &:hover {
          cursor: pointer;
          filter: brightness(1.15);
        }
      }
    }
  }
`;
