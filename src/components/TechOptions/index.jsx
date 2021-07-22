import axios from "axios";
import { useState } from "react";
import Modal from "../Modal";
import { TechIcon } from "../TechIcon/TechIcon";
import { TechOtionsContent } from "./style";

const TechOptions = ({
  title,
  id,
  status,
  updateTechs,
  setUserTechs,
  setTechOptionModalToggle,
}) => {
  const token = localStorage.getItem("@kenziehub:token");
  const [techStatus, setTechStatus] = useState(status);

  const handleDeleteTech = () => {
    axios
      .delete(`https://kenziehub.me/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setUserTechs(updateTechs.find((item) => item.id === id));
      });
    setTechOptionModalToggle(false);
  };

  const handleUpdateTech = () => {
    const body = {
      status: techStatus,
    };

    axios
      .put(`https://kenziehub.me/users/techs/${id}`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setUserTechs(
          updateTechs.map((item) => {
            if (item.id === id) {
              return (item.status = techStatus);
            }
            return item;
          })
        );
      });

    setTechOptionModalToggle(false);
  };

  return (
    <Modal title="Atualize ou delete" setModalToggle={setTechOptionModalToggle}>
      <TechOtionsContent>
        <div className="icon-select">
          <TechIcon tech={title} />
          <select onChange={(event) => setTechStatus(event.target.value)}>
            <option value="Iniciante">Estou aprendendo</option>
            <option value="Avançado">Tenho experiência</option>
          </select>
        </div>
        <div className="button-container">
          <button className="update" onClick={handleUpdateTech}>
            Atualizar status
          </button>
          <button className="delete" onClick={handleDeleteTech}>
            Deletar
          </button>
        </div>
      </TechOtionsContent>
    </Modal>
  );
};

export default TechOptions;
