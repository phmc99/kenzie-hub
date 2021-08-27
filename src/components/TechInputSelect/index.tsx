import { useState, useEffect } from "react";
import { InputBox, ResultBox } from "./style";
import { HiChevronDown } from "react-icons/hi";
import { validTechs } from "../../services/validTechs";

interface TechInputSelectProps {
  setNewTech: (newTech: string) => void;
}

const TechInputSelect = ({ setNewTech }: TechInputSelectProps) => {
  const [toggle, setToggle] = useState(false);
  const [filteredTechs, setFilteredTechs] = useState<Array<string>>([]);
  const [userInput, setUserInput] = useState<string>("");

  useEffect(() => {
    let userSearch = validTechs.filter((item) => item.includes(userInput));
    setFilteredTechs(userSearch);
  }, [userInput]);

  const addTech = (value: string) => {
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
