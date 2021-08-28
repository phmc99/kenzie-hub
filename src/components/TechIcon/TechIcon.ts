import styled from "styled-components";

interface TechIconProps {
  tech?: string;
}

export const TechIcon = styled.div<TechIconProps>`
  width: 50px;
  height: 50px;

  background-image: ${(props) =>
    `url(https://xesque.rocketseat.dev/platform/tech/${props.tech}.svg)`};
`;
