import styled from "styled-components";

export const WorkBox = styled.div`
  width: 100%;
  max-height: 120px;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
`;

export const WorkItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  width: 100%;

  padding: 10px;
  border-radius: 10px;
  background-color: #1c1f21;
  text-align: center;

  .title {
    width: 150px;
    text-overflow: clip;
    overflow: hidden;
    white-space: nowrap;

    a {
      font-size: 18px;
      color: var(--white-pastel);
      width: 160px;
      cursor: pointer;
      text-decoration: none;
      &:hover {
        color: var(--pink-pastel);
        transition: all 0.5s;
      }
    }
  }

  .desc {
    height: 30px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
      display: none;
    }
    p {
      font-size: 14px;
      color: #616161;
      text-align: center;
    }
  }

  .see-more {
    display: flex;
    justify-content: center;
    gap: 20px;
    .open-modal {
      font-weight: 600;
      color: var(--orange-aux);
      cursor: pointer;
      font-size: 16px;
    }
    a {
      color: var(--orange-aux);
      font-size: 16px;
    }
  }

  @media (min-width: 800px) {
    width: 32%;
  }
`;
