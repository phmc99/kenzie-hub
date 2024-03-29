import toast from "react-hot-toast";
import Modal from "../Modal";
import { ModalWorkBox } from "../WorkModal/style";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUserData } from "../../providers/userData";
import { HiTrash } from "react-icons/hi";
import { api } from "../../services/api";

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
    api
      .put(`users/works/${id}`, data, {
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
    api
      .delete(`users/works/${id}`, {
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
            <input
              type="text"
              required
              {...register("title")}
              placeholder="Novo titulo ou deixe em branco para manter"
            />
          </div>
          <div className="input-box">
            <label>Descrição</label>
            <input
              type="text"
              required
              {...register("description")}
              placeholder="Nova descrição ou deixe em branco para manter"
            />
          </div>
          <div className="input-box">
            <label>URL do projeto</label>
            <input
              type="text"
              required
              {...register("deploy_url")}
              placeholder="Nova URL ou deixe em branco para manter"
            />
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
