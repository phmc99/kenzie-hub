import { ModalBackground } from "./style";
import { HiX } from "react-icons/hi";
import { ReactNode } from "react";

interface ModalProps {
  title: string;
  setModalToggle: (toggle: boolean) => void;
  children: ReactNode;
}

const Modal = ({ title, setModalToggle, children }: ModalProps) => {
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
