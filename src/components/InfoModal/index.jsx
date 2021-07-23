import Modal from "../Modal";
import { InfoModalBox } from "./style";
import toast from "react-hot-toast";
import axios from "axios";

const InfoModal = ({ userData, setInfoModalToggle }) => {
  const token = localStorage.getItem("@kenziehub:token");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = e.target;
    const bio = data[0].value;
    const contact = data[1].value;
    const courseModule = data[2].value;
    const avatarUrl = data[3].value;

    userData.bio = bio.trim() !== "" ? bio : userData.bio;

    userData.contact = contact.trim() !== "" ? contact : userData.contact;

    userData["course_module"] =
      courseModule.trim() !== "" ? courseModule : userData["course_module"];

    userData["avatar_url"] =
      avatarUrl.trim() !== "" ? avatarUrl : userData["avatar_url"];

    axios
      .put(`https://kenziehub.me/users/profile/`, userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast(`Informações atualizadas`, {
          icon: "🔃",
        });
      })
      .catch(() => toast.error("Algum erro aconteceu"));

    setInfoModalToggle(false);
  };

  return (
    <Modal title="Altere suas informações" setModalToggle={setInfoModalToggle}>
      <InfoModalBox>
        <form onSubmit={handleSubmit}>
          <label>Bio</label>
          <input type="text" />

          <label>Contato</label>
          <input type="text" />

          <label>Módulo do curso</label>
          <input type="text" />

          <label>URL da foto de perfil</label>
          <input type="text" />

          <button type="submit">Enviar</button>
        </form>
      </InfoModalBox>
    </Modal>
  );
};

export default InfoModal;
