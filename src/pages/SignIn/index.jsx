import React from "react";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import axios from "axios";

import { Link, useHistory } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";

import AsideImg from "../../components/AsideImage";
import { FormBox } from "../../components/FormBox/style";
import { MainContent, InputBox, ButtonContent } from "./style";

const SignUp = () => {
  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/,
        "Nome deve conter apenas letras."
      )
      .max(50, "Nome deve conter no máximo 50 caracteres."),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Senha obrigatório")
      .min(6, "Senha com no mínimo 6 caracteres"),
    bio: yup.string().required("Bio obrigatório"),
    course_module: yup.string().required("Módulo obrigatório"),
    contact: yup.string().required("Contato obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    axios
      .post("https://kenziehub.me/users", data)
      .then(() => {
        toast.success("Bem-vindx ao Kenzie Hub!");
        history.push("/dashboard");
      })
      .catch(() => toast.error("Ops, algo de errado aconteceu"));
  };

  return (
    <>
      <Toaster />
      <MainContent>
        <aside>
          <AsideImg />
        </aside>

        <section>
          <FormBox>
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputBox>
                <label>Nome</label>
                <input
                  {...register("name")}
                  className={errors.name && "input-error"}
                  type="text"
                />
                <span className={errors.name && "showError"}>
                  {errors.name?.message}
                </span>
              </InputBox>
              <InputBox>
                <label>E-mail</label>
                <input
                  {...register("email")}
                  className={errors.email && "input-error"}
                  type="email"
                />
                <span className={errors.email && "showError"}>
                  {errors.email?.message}
                </span>
              </InputBox>
              <InputBox>
                <label>Senha</label>
                <input
                  {...register("password")}
                  className={errors.password && "input-error"}
                  type="password"
                />
                <span className={errors.password && "showError"}>
                  {errors.password?.message}
                </span>
              </InputBox>
              <InputBox>
                <label>Contato</label>
                <input
                  {...register("contact")}
                  className={errors.contact && "input-error"}
                  type="text"
                />
                <span className={errors.contact && "showError"}>
                  {errors.contact?.message}
                </span>
              </InputBox>
              <InputBox>
                <label>Bio</label>
                <input
                  {...register("bio")}
                  className={errors.bio && "input-error"}
                  type="text"
                />
                <span className={errors.bio && "showError"}>
                  {errors.bio?.message}
                </span>
              </InputBox>
              <InputBox>
                <label>Modulo do Curso</label>
                <input
                  {...register("course_module")}
                  className={errors.course_module && "input-error"}
                  type="text"
                />
                <span className={errors.course_module && "showError"}>
                  {errors.course_module?.message}
                </span>
              </InputBox>
              <ButtonContent>
                <Link to="/login">Já possuo uma conta</Link>
                <button type="submit">Cadastre-se</button>
              </ButtonContent>
            </form>
          </FormBox>
        </section>
      </MainContent>
    </>
  );
};

export default SignUp;
