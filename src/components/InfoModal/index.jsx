import React from "react";
import Modal from "../Modal";

const InfoModal = ({ setInfoModalToggle }) => {
  return (
    <Modal title="Altere suas informações" setModalToggle={setInfoModalToggle}>
      <h1>teste</h1>
    </Modal>
  );
};

export default InfoModal;
