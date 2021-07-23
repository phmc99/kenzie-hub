import React from "react";
import { useState, useEffect } from "react";
import { InputBox, ResultBox } from "./style";
import { HiChevronDown } from "react-icons/hi";

const TechInputSelect = ({ setNewTech }) => {
  const validTechs = [
    "reactjs",
    "python",
    "node",
    "angularjs",
    "laravel",
    "django",
    "flutter",
    "dart",
    "php",
    "flask",
    "react-native",
    "kotlin",
    "java",
    "c",
    "go",
    "javascript",
    "swift",
    "ruby",
    "vuejs",
    "nextjs",
    "css3",
    "html5",
    "docker",
    "mongodb",
    "mysql",
    "typescript",
    "jquery",
    "jest",
  ];

  const [toggle, setToggle] = useState(false);
  const [filteredTechs, setFilteredTechs] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    let userSearch = validTechs.filter((item) => item.includes(userInput));
    setFilteredTechs(userSearch);
  }, [userInput]);

  const addTech = (value) => {
    setNewTech(value);
    setUserInput("");
    setToggle(!toggle);
  };

  return (
    <InputBox>
      <div className="input-content">
        <input
          onClick={() => setToggle(!toggle)}
          onChange={(event) => {
            setUserInput(event.target.value);
          }}
          value={userInput}
          type="text"
          placeholder="Busque uma tecnologia"
        />
        <HiChevronDown onClick={() => setToggle(!toggle)} />
      </div>
      {toggle && (
        <ResultBox>
          {filteredTechs.length > 0 ? (
            filteredTechs.map((item, index) => (
              <div
                key={index}
                onClick={() => addTech(item)}
                className="tech-item"
              >
                {item}
              </div>
            ))
          ) : (
            <span>Tecnologia invalida</span>
          )}
        </ResultBox>
      )}
    </InputBox>
  );
};

export default TechInputSelect;
