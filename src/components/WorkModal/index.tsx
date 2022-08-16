import Modal from "../Modal";
import { ModalWorkBox } from "./style";

import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { useUserData } from "../../providers/userData";
import { api } from "../../services/api";

interface WorkModalProps {
  setWorkModalToggle: (toggle: boolean) => void;
}

interface WorkCreate {
  title: string;
  description: string;
  deploy_url: string;
}

const WorkModal = ({ setWorkModalToggle }: WorkModalProps) => {
  const { setUserWorks, getUserData, userWorks } = useUserData();

  const WorkCreateSchema = yup.object().shape({
    title: yup.string(),
    description: yup.string(),
    deploy_url: yup.string(),
  });

  const { register, handleSubmit } = useForm<WorkCreate>({
    resolver: yupResolver(WorkCreateSchema),
  });

  const onSubmit: SubmitHandler<WorkCreate> = (data) => {
    const token = localStorage.getItem("@kenziehub:token");

    api
      .post("users/works", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        setUserWorks([...userWorks, resp.data]);
        getUserData();
        toast.success("Projeto adicionado");
      })
      .catch(() =>
        toast.error("Ops, algo de errado aconteceu!", { duration: 2000 })
      );

    setWorkModalToggle(false);
  };

  return (
    <Modal title="Novo Projeto" setModalToggle={setWorkModalToggle}>
      <ModalWorkBox>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-box">
            <label>Titulo</label>
            <input type="text" required {...register("title")} placeholder="Digite o nome do projeto" />
          </div>
          <div className="input-box">
            <label>Descrição</label>
            <input type="text" required {...register("description")} placeholder="Digite uma breve descrição"/>
          </div>
          <div className="input-box">
            <label>URL do projeto</label>
            <input type="text" required {...register("deploy_url")} placeholder="Digite uma URL do projeto" />
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </ModalWorkBox>
    </Modal>
  );
};

export default WorkModal;
