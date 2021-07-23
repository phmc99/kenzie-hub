import Modal from "../Modal";
import { TechIcon } from "../TechIcon/TechIcon";
import { TechModalBox } from "./style";
import { useState } from "react";
import TechInputSelect from "../TechInputSelect";
import axios from "axios";
import toast from "react-hot-toast";

const TechModal = ({ setTechModalToggle, setUserTechs, userTechs }) => {
  const [newTech, setNewTech] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let body = {
      title: newTech,
      status: event.target[1].value,
    };
    const token = localStorage.getItem("@kenziehub:token");

    axios
      .post("https://kenziehub.me/users/techs", body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setUserTechs(newTech);
        toast.success("Tecnologia adicionada");
      })
      .catch(() =>
        toast.error("Essa tecnologia já foi adicionada", { duration: 2000 })
      );

    setTechModalToggle(false);
  };

  return (
    <Modal title="Tecnologias" setModalToggle={setTechModalToggle}>
      <TechModalBox>
        <div className="form-box">
          <form onSubmit={(event) => handleSubmit(event)}>
            <label>Escolha uma tecnologia</label>
            <TechInputSelect
              userTechs={userTechs}
              newTech={newTech}
              setNewTech={setNewTech}
            />

            <div className="my-techs">
              {newTech.trim() !== "" && (
                <>
                  <TechIcon tech={newTech} />
                  <div className="checkbox">
                    <select>
                      <option value="Iniciante">Estou aprendendo</option>
                      <option value="Avançado">Tenho experiência</option>
                    </select>
                  </div>
                </>
              )}
            </div>

            <button disabled={newTech.length === 0}>Enviar</button>
          </form>
        </div>
      </TechModalBox>
    </Modal>
  );
};

export default TechModal;
