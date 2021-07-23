import React from "react";
import { Link, useHistory } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import axios from "axios";

import toast from "react-hot-toast";

import AsideImg from "../../components/AsideImage";
import { FormBox } from "../../components/FormBox/style";
import { MainContent, InputBox, ButtonContent } from "./style";

const SignIn = () => {
  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatório"),
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
      .post("https://kenziehub.me/sessions", data)
      .then((response) => {
        localStorage.setItem("@kenziehub:token", response.data.token);
        localStorage.setItem("@kenziehub:id", response.data.user.id);
        history.push(`/dashboard/${response.data.user.id}`);
        toast.success(`Bem-vindx de volta ${response.data.user.name}`, {
          duration: 2000,
        });
      })
      .catch(() => toast.error("Ops, algo de errado aconteceu"));
  };

  return (
    <>
      <MainContent>
        <aside>
          <AsideImg />
        </aside>

        <section>
          <FormBox login={true}>
            <h1>KenzieHub</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
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
              <ButtonContent>
                <Link to="/register">Cadastre-se aqui</Link>
                <button type="submit">Entrar</button>
              </ButtonContent>
            </form>
          </FormBox>
        </section>
      </MainContent>
    </>
  );
};

export default SignIn;
