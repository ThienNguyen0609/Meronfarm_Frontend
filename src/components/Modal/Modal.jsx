import "./Modal.scss";

import { useClickOutside } from "../../services/useHooks";

const Modal = ({ children, show, setIsShow }) => {
  useClickOutside(setIsShow);
  return (
    <>
      {show && (
        <div className="meron-modal-wrapper">
          <div className="meron-modal-inner">
            <div className="meron-modal-content">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
