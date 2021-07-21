import React from "react";
import { useState, useEffect } from "react";
import { InputBox, ResultBox } from "./style";

const TechInputSelect = ({ techs, setTechs }) => {
  const validTechs = ["reactjs", "python", "node"];

  const [toggle, setToggle] = useState(false);
  const [filteredTechs, setFilteredTechs] = useState([]);
  const [userInput, setUserInput] = useState("");

  const addTech = (value) => {
    setTechs([...techs, value]);
    console.log(techs);
  };
  return (
    <InputBox>
      <input
        onClick={() => setToggle(!toggle)}
        onChange={(event) => setUserInput(event.target.value)}
        value={userInput}
        type="text"
        placeholder="Busque uma tecnologia"
      />
      {toggle && (
        <ResultBox>
          {validTechs.length > 0 ? (
            validTechs.map((item, index) => (
              <div onClick={() => addTech("reactjs")} className="tech-item">
                {item}
              </div>
            ))
          ) : (
            <span>Digite alguma tech</span>
          )}
        </ResultBox>
      )}
    </InputBox>
  );
};

export default TechInputSelect;
