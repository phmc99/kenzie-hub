import React from "react";
import Modal from "../Modal";
import { TechIcon } from "../TechIcon/TechIcon";
import { TechModalBox } from "./style";
import { useState, useEffect } from "react";
import TechInputSelect from "../TechInputSelect";

const TechModal = ({ setTechModalToggle }) => {
  const [techs, setTechs] = useState([]);

  return (
    <Modal title="Tecnologias" setModalToggle={setTechModalToggle}>
      <TechModalBox>
        <div className="form-box">
          <form>
            <label>Escolha uma tecnologia</label>
            <TechInputSelect techs={techs} setTechs={setTechs} />

            <div className="my-techs">
              <h2>Suas Tecnologias</h2>
              <ul>
                {techs.map((item, index) => (
                  <li key={index}>
                    <TechIcon tech={item} />
                    <label htmlFor="avançado">Avançado</label>
                    <input type="radio" name="avançado" value="avançado" />

                    <label htmlFor="aprendendo">Aprendendo</label>
                    <input type="radio" name="aprendendo" value="aprendendo" />
                  </li>
                ))}
              </ul>
            </div>

            <button>Enviar</button>
          </form>
        </div>
      </TechModalBox>
    </Modal>
  );
};

export default TechModal;
