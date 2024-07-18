import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const InitialForm = (props) => {
  return (
    <>
      <div className="login-register-controll">
        <div className="icon">
          <FontAwesomeIcon icon={faPhone} />
        </div>
        <input
          className="login-register-input"
          type="text"
          placeholder="SĐT"
          value={props.phoneNumber}
          onChange={(e) => props.setPhoneNumber(e.target.value)}
        />
        {props.valPhone.length > 0 && (
          <span className="login-register-validate">{props.valPhone}</span>
        )}
      </div>
      <div className="login-register-controll">
        <div className="icon">
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <input
          className="login-register-input"
          type="text"
          placeholder="Địa chỉ email"
          value={props.email}
          onChange={(e) => props.setEmail(e.target.value)}
        />
        {props.valEmail.length > 0 && (
          <span className="login-register-validate">{props.valEmail}</span>
        )}
      </div>
    </>
  );
};

export default InitialForm;
