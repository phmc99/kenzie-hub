import { Link, useHistory } from "react-router-dom";

import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import AsideImg from "../../components/AsideImage";
import { FormBox } from "../../components/FormBox/style";
import { SignIn } from "../../types";
import { useAuth } from "../../providers/auth";
import { InputBox } from "../../components/InputBox/style";
import { ButtonContent } from "../../components/ButtonContent/style";
import { MainContent } from "../../components/MainContent/style";

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
                  placeholder="Digite seu e-mail"
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
                  placeholder="Digite sua senha"
                />
                <span className={errors.password && "showError"}>
                  {errors.password?.message}
                </span>
              </InputBox>
              <ButtonContent column={true}>
                <button type="submit">Entrar</button>
                <p>
                  <Link to="/register">Cadastre-se aqui</Link>
                </p>
              </ButtonContent>
            </form>
          </FormBox>
        </section>
      </MainContent>
    </>
  );
};

export default SignInPage;
