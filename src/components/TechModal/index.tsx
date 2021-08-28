import Modal from "../Modal";
import { TechIcon } from "../TechIcon/TechIcon";
import { TechModalBox } from "./style";
import { useState } from "react";
import TechInputSelect from "../TechInputSelect";
import axios from "axios";
import toast from "react-hot-toast";
import { useUserData } from "../../providers/userData";

interface TechModalProps {
  setTechModalToggle: (toggle: boolean) => void;
}

const TechModal = ({ setTechModalToggle }: TechModalProps) => {
  const { userTechs, setUserTechs, getUserData } = useUserData();

  const [newTech, setNewTech] = useState<string>();

  const handleSubmit = (event: any) => {
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
        setUserTechs([...userTechs, newTech]);
        getUserData();
        toast.success("Tecnologia adicionada");
      })
      .catch(() =>
        toast.error("Ops, algo de errado aconteceu!", { duration: 2000 })
      );

    setTechModalToggle(false);
  };

  return (
    <Modal title="Tecnologias" setModalToggle={setTechModalToggle}>
      <TechModalBox>
        <div className="form-box">
          <form onSubmit={(event) => handleSubmit(event)}>
            <label>Escolha uma tecnologia</label>
            <TechInputSelect setNewTech={setNewTech} />

            <div className="my-techs">
              {newTech?.trim() !== "" && (
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

            <button disabled={newTech?.length === 0}>Cadastrar</button>
          </form>
        </div>
      </TechModalBox>
    </Modal>
  );
};

export default TechModal;
