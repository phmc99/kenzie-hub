import React from "react";
import { Aside } from "./style";
import imgLocation from "../../assets/illustration.png";

const AsideImg = () => {
  return (
    <Aside>
      <img src={imgLocation} alt="Illustration" />
    </Aside>
  );
};

export default AsideImg;
