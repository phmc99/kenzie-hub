import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { InfoBox } from "../../components/InfoBox/InfoBox";
import TechContainer from "../../components/TechContainer";
import { MainContent } from "./style";

import { HiPencilAlt } from "react-icons/hi";

import profileImg from "../../assets/profile.png";

import toast from "react-hot-toast";
import TechModal from "../../components/TechModal";
import InfoModal from "../../components/InfoModal";
import TechOptions from "../../components/TechOptions";

const Dashboard = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({});

  const [techModalToggle, setTechModalToggle] = useState(false);
  const [infoModalToggle, setInfoModalToggle] = useState(false);
  const [techOptionModalToggle, setTechOptionModalToggle] = useState(false);

  const [userTechs, setUserTechs] = useState([]);
  const [updateTechs, setUpdateTechs] = useState([]);
  const [selectedTech, setSelectedTech] = useState({});

  useEffect(() => {
    axios
      .get(`https://kenziehub.me/users/${id}`)
      .then((response) => {
        setUserData(response.data);
        setUserTechs(response.data.techs);
      })
      .catch(() => toast.error("Ops, algo de errado aconteceu"));
  }, []);

  useEffect(() => {
    axios
      .get(`https://kenziehub.me/users/${id}`)
      .then((response) => {
        setUpdateTechs(response.data.techs);
      })
      .catch(() => toast.error("Ops, algo de errado aconteceu"));
  }, [userTechs]);

  const openTechModal = () => setTechModalToggle(true);
  const openInfoModal = () => setInfoModalToggle(true);
  const openTechOptionModal = (value) => {
    setTechOptionModalToggle(true);
    setSelectedTech(value);
  };

  return (
    <>
      {techModalToggle && (
        <TechModal
          setTechModalToggle={setTechModalToggle}
          setUserTechs={setUserTechs}
          userTechs={userTechs}
        />
      )}
      {infoModalToggle && <InfoModal setInfoModalToggle={setInfoModalToggle} />}
      {techOptionModalToggle && (
        <TechOptions
          title={selectedTech.title}
          id={selectedTech.id}
          status={selectedTech.status}
          updateTechs={updateTechs}
          setUserTechs={setUserTechs}
          setTechOptionModalToggle={setTechOptionModalToggle}
        />
      )}

      <MainContent>
        <section className="cover"></section>
        <section className="content">
          <div className="box-avatar">
            <div className="avatar-circle">
              <img
                src={
                  userData["avatar_url"] !== null
                    ? userData["avatar_url"]
                    : profileImg
                }
                alt=""
              />
            </div>
            <h1>{userData.name}</h1>
          </div>

          <div className="column">
            <InfoBox>
              <div className="title">
                <h2>Sobre mim</h2>
                <button onClick={openInfoModal}>
                  <HiPencilAlt />
                </button>
              </div>

              <p>{userData.bio}</p>
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
                  techs={
                    updateTechs &&
                    updateTechs.filter((item) => item.status === "Iniciante")
                  }
                  openTechOptionModal={openTechOptionModal}
                />
                <TechContainer
                  title="Tenho experiência"
                  techs={
                    updateTechs &&
                    updateTechs.filter((item) => item.status === "Avançado")
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
