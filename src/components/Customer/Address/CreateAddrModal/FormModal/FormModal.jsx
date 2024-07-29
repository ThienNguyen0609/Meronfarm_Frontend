import "./FormModal.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const FormModal = (props) => {
  return (
    <>
      <div className="row align-items-center">
        <label htmlFor={props.idFor} className="col-3">
          {props.labelTitle}
        </label>
        <div className="meron-form-controll col-9">
          <input
            placeholder={props.placeHolder}
            className="meron-form-input"
            type="text"
            name={props.idFor}
            id={props.idFor}
            value={props.value}
            onChange={(e) => props.setValue(e.target.value)}
          />
          <div
            className="meron-form-icon"
            onClick={() => props.setShowOption(!props.showOption)}
          >
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
          {props.children}
        </div>
      </div>
    </>
  );
};

export default FormModal;
