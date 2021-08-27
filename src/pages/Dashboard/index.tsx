import { useState } from "react";
import { useHistory } from "react-router-dom";

import { InfoBox } from "../../components/InfoBox/InfoBox";
import TechContainer from "../../components/TechContainer";
import { MainContent } from "./style";

import { HiLogout, HiPencilAlt } from "react-icons/hi";

import profileImg from "../../assets/profile.png";

import toast from "react-hot-toast";
import TechModal from "../../components/TechModal";
import TechOptions from "../../components/TechOptions";
import { useUserData } from "../../providers/userData";
import { TechProps } from "../../types";

const Dashboard = () => {
  const history = useHistory();

  const { userData, userTechs } = useUserData();

  const [techModalToggle, setTechModalToggle] = useState<boolean>(false);
  const [techOptionModalToggle, setTechOptionModalToggle] =
    useState<boolean>(false);

  const [selectedTech, setSelectedTech] = useState<TechProps>();

  const openTechModal = () => setTechModalToggle(true);

  const openTechOptionModal = (value: TechProps) => {
    setTechOptionModalToggle(true);
    setSelectedTech(value);
  };

  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
    toast(`Volte sempre ${userData?.name}`, {
      icon: "👋",
    });
  };

  return (
    <>
      {techModalToggle && <TechModal setTechModalToggle={setTechModalToggle} />}
      {techOptionModalToggle && (
        <TechOptions
          id={selectedTech?.id}
          setTechOptionModalToggle={setTechOptionModalToggle}
        />
      )}

      <MainContent>
        <section className="cover">
          <button onClick={handleLogout}>
            Logout <HiLogout />
          </button>
        </section>
        <section className="content">
          <div className="box-avatar">
            <div className="avatar-circle">
              <img src={profileImg} alt="" />
            </div>
            <h1>{userData?.name}</h1>
            <span>Modulo: {userData?.course_module}</span>
          </div>

          <div className="column">
            <InfoBox>
              <div className="title">
                <h2>Sobre mim</h2>
              </div>

              <p>{userData?.bio}</p>
              <span>
                <b>Contato</b> - {userData?.contact}
              </span>
            </InfoBox>

            <InfoBox>
              <div className="title">
                <h2>Tecnologias</h2>
                <button onClick={openTechModal}>
                  <HiPencilAlt />
                </button>
              </div>
              <div className="techs-box">
                <TechContainer
                  title="Estou aprendendo"
                  techs={userTechs.filter(
                    (item) => item.status === "Iniciante"
                  )}
                  openTechOptionModal={openTechOptionModal}
                />
                <TechContainer
                  title="Tenho experiência"
                  techs={
                    userTechs &&
                    userTechs.filter((item) => item.status === "Avançado")
                  }
                  openTechOptionModal={openTechOptionModal}
                />
              </div>
            </InfoBox>
          </div>
        </section>
      </MainContent>
    </>
  );
};

export default Dashboard;
