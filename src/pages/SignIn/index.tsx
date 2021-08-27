import { Link, useHistory } from "react-router-dom";

import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import AsideImg from "../../components/AsideImage";
import { FormBox } from "../../components/FormBox/style";
import { MainContent, InputBox, ButtonContent } from "./style";
import { SignIn } from "../../types";
import { useAuth } from "../../providers/auth";

const SignInPage = () => {
  const { handleLogin } = useAuth();

  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignIn>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit: SubmitHandler<SignIn> = async (data) => {
    await handleLogin(data);
    const userId = localStorage.getItem("@kenziehub:id");

    if (userId !== null) {
      history.push(`/dashboard/${userId}`);
    }
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

export default SignInPage;
