import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import Modal from "../Modal";
import { TechIcon } from "../TechIcon/TechIcon";
import { TechOtionsContent } from "./style";

import { HiTrash } from "react-icons/hi";

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
    toast(`Tecnologia ${title} deletada`, {
      icon: "🗑",
    });
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
        toast(`Tecnologia ${title} atualizada`, {
          icon: "🔃",
        });
      })
      .catch(() => toast.error("Altere o status da tecnologia"));

    setTechOptionModalToggle(false);
  };

  return (
    <Modal title="Atualize ou delete" setModalToggle={setTechOptionModalToggle}>
      <TechOtionsContent>
        <div className="icon-select">
          <TechIcon tech={title} />
          <select onChange={(event) => setTechStatus(event.target.value)}>
            <option value="Selecione" disabled selected>
              Seleciona o status
            </option>
            <option value="Iniciante">Estou aprendendo</option>
            <option value="Avançado">Tenho experiência</option>
          </select>
        </div>
        <div className="button-container">
          <span className="delete" onClick={handleDeleteTech}>
            <HiTrash />
          </span>
          <button className="update" onClick={handleUpdateTech}>
            Atualizar status
          </button>
        </div>
      </TechOtionsContent>
    </Modal>
  );
};

export default TechOptions;
