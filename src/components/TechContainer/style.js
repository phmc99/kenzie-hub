import styled from "styled-components";

export const TechBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-height: 90px;

  span {
    color: var(--white-pastel);
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
    }
  }
`;
