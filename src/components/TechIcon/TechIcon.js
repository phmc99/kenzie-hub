import styled from "styled-components";

export const TechIcon = styled.div`
  width: 50px;
  height: 50px;

  background-image: ${(props) =>
    `url(https://xesque.rocketseat.dev/platform/tech/${props.tech}.svg)`};
`;
