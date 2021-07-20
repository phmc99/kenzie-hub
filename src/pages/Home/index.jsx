import React from "react";
import { useHistory } from "react-router-dom";
import AsideImg from "../../components/AsideImage";
import { MainContent } from "./style";

const Home = () => {
  const history = useHistory();

  return (
    <>
      <MainContent>
        <aside>
          <AsideImg />
        </aside>

        <section>
          <h1>KenzieHub</h1>
          <div className="button-container">
            <button
              className="register-button"
              onClick={() => history.push("/register")}
            >
              Cadastre-se
            </button>

            <span>ou</span>

            <button onClick={() => history.push("/login")}>Entrar</button>
          </div>

          <p>
            Faça parte do nosso hub portfólios de programadores e Mostre para
            todos quais tecnologias voce sabe e está aprendendo.
          </p>
        </section>
      </MainContent>
    </>
  );
};

export default Home;
