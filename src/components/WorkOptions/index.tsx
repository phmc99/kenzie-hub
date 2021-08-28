import axios from "axios";
import toast from "react-hot-toast";
import Modal from "../Modal";
import { ModalWorkBox } from "../WorkModal/style";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUserData } from "../../providers/userData";
import { HiTrash } from "react-icons/hi";

interface WorkModalOptionsProps {
  setWorkModalOptionsToggle: (toggle: boolean) => void;
  id?: string;
}

interface WorkUpdate {
  title?: string;
  description?: string;
  deploy_url?: string;
}

const WorkOptions = ({
  setWorkModalOptionsToggle,
  id,
}: WorkModalOptionsProps) => {
  const { setUserWorks, getUserData, userWorks } = useUserData();
  const token = localStorage.getItem("@kenziehub:token");

  const WorkUpdateSchema = yup.object().shape({
    title: yup.string(),
    description: yup.string(),
    deploy_url: yup.string(),
  });

  const { register, handleSubmit } = useForm<WorkUpdate>({
    resolver: yupResolver(WorkUpdateSchema),
  });

  const onSubmit: SubmitHandler<WorkUpdate> = (data) => {
    axios
      .put(`https://kenziehub.me/users/works/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        setUserWorks([...userWorks, resp.data]);
        getUserData();
        toast(`Projeto atualizado`, {
          icon: "🔃",
        });
      })
      .catch(() =>
        toast.error("Ops, algo de errado aconteceu!", { duration: 2000 })
      );

    setWorkModalOptionsToggle(false);
  };

  const deleteWork = () => {
    axios
      .delete(`https://kenziehub.me/users/works/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        getUserData();
        toast(`Projeto deletado`, {
          icon: "🗑",
        });
      })
      .catch(() =>
        toast.error("Ops, algo de errado aconteceu!", { duration: 2000 })
      );
    setWorkModalOptionsToggle(false);
  };

  return (
    <Modal
      title="Atualize o projeto"
      setModalToggle={setWorkModalOptionsToggle}
    >
      <ModalWorkBox>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-box">
            <label>Titulo</label>
            <input type="text" {...register("title")} />
          </div>
          <div className="input-box">
            <label>Descrição</label>
            <input type="text" {...register("description")} />
          </div>
          <div className="input-box">
            <label>URL do projeto</label>
            <input type="text" {...register("deploy_url")} />
          </div>
          <button type="submit">Atualizar</button>
        </form>
        <span className="delete" onClick={deleteWork}>
          <HiTrash />
        </span>
      </ModalWorkBox>
    </Modal>
  );
};

export default WorkOptions;
