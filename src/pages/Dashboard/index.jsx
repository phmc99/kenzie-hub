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

const Dashboard = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({});
  const [techModalToggle, setTechModalToggle] = useState(false);
  const [infoModalToggle, setInfoModalToggle] = useState(false);

  useEffect(() => {
    axios
      .get(`https://kenziehub.me/users/${id}`)
      .then((response) => {
        setUserData(response.data);
      })
      .catch(() => toast.error("Ops, algo de errado aconteceu"));
  }, []);

  const openTechModal = () => setTechModalToggle(true);
  const openInfoModal = () => setInfoModalToggle(true);

  return (
    <>
      {techModalToggle && <TechModal setTechModalToggle={setTechModalToggle} />}
      {infoModalToggle && <InfoModal setInfoModalToggle={setInfoModalToggle} />}

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
                  techs={userData.techs}
                />
                <TechContainer
                  title="Tenho experiência"
                  techs={userData.techs}
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
