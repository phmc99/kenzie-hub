import { ModalBackground } from "./style";

const Modal = ({ title, setModalToggle, children }) => {
  const closeModal = () => setModalToggle(false);

  return (
    <ModalBackground>
      <div className="modal-main">
        <div className="header">
          <h1>{title}</h1>
          <button onClick={closeModal}>x</button>
        </div>
        <div className="content">{children}</div>
      </div>
    </ModalBackground>
  );
};

export default Modal;
