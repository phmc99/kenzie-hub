import React from "react";
import { TechIcon } from "../TechIcon/TechIcon";
import { TechBox } from "./style";

const TechContainer = ({ title, techs }) => {
  return (
    <TechBox>
      <span>{title}</span>
      <ul>
        <li>
          <TechIcon tech="c" />
        </li>
        <li>
          <TechIcon tech="reactjs" />
        </li>
        <li>
          <TechIcon tech="python" />
        </li>
        <li>
          <TechIcon tech="node" />
        </li>
        <li>
          <TechIcon tech="django" />
        </li>
        <li>
          <TechIcon tech="flask" />
        </li>
      </ul>
    </TechBox>
  );
};

export default TechContainer;
