import { useState } from "react";
import toast from "react-hot-toast";
import Modal from "../Modal";
import { TechIcon } from "../TechIcon/TechIcon";
import { TechOtionsContent } from "./style";

import { HiTrash } from "react-icons/hi";
import { useUserData } from "../../providers/userData";
import { api } from "../../services/api";

interface TechOptionsProps {
  id: string | undefined;
  setTechOptionModalToggle: (toggle: boolean) => void;
}

const TechOptions = ({ id, setTechOptionModalToggle }: TechOptionsProps) => {
  const token = localStorage.getItem("@kenziehub:token");

  const { userTechs, setUserTechs, getUserData } = useUserData();
  const selectedTech = userTechs.find((item) => item.id === id);

  const [techStatus, setTechStatus] = useState<string>("");

  const handleDeleteTech = async () => {
    await api
      .delete(`users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setUserTechs(userTechs.filter((item) => item.id !== id));
      });
    setTechOptionModalToggle(false);
    toast(`Tecnologia ${selectedTech?.title} deletada`, {
      icon: "🗑",
    });

    setTechOptionModalToggle(false);
  };

  const handleUpdateTech = () => {
    const body = {
      status: techStatus,
    };

    api
      .put(`users/techs/${id}`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        getUserData();
        toast(`Tecnologia ${selectedTech?.title} atualizada`, {
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
          <TechIcon tech={selectedTech?.title} />
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
