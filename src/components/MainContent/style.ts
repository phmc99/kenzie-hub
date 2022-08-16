import styled from "styled-components";

export const MainContent = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  aside {
    display: none;
    width: 50%;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 60px;
  }

  @media (min-width: 800px) {
    aside {
      display: block;
      width: 50%;
    }
    section {
      width: 50%;
    }
  }
`;