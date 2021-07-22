import React from "react";
import { useState, useEffect } from "react";
import { InputBox, ResultBox } from "./style";

const TechInputSelect = ({ userTechs, newTech, setNewTech }) => {
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
  ];

  const [toggle, setToggle] = useState(false);
  const [filteredTechs, setFilteredTechs] = useState([]);
  const [userInput, setUserInput] = useState("");

  // const userCurrentTechs = userTechs.map((item) => item.title);

  useEffect(() => {
    let userSearch = validTechs.filter((item) => item.includes(userInput));
    // setFilteredTechs(
    //   userSearch.filter((item) => !userCurrentTechs.includes(item))
    // );
    setFilteredTechs(userSearch);
  }, [userInput]);

  const addTech = (value) => {
    if (newTech.trim() === "") {
      setNewTech(value);
    } else {
      alert("Já escolheu tech");
    }
    setUserInput("");
    setToggle(!toggle);
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
          {filteredTechs.length > 0 ? (
            filteredTechs.map((item) => (
              <div onClick={() => addTech(item)} className="tech-item">
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
