import { ModalBackground } from "./style";
import { HiX } from "react-icons/hi";

const Modal = ({ title, setModalToggle, children }) => {
  const closeModal = () => setModalToggle(false);

  return (
    <ModalBackground>
      <div className="modal-main">
        <div className="header">
          <h1>{title}</h1>
          <span onClick={closeModal}>
            <HiX />
          </span>
        </div>
        <div className="content">{children}</div>
      </div>
    </ModalBackground>
  );
};

export default Modal;
