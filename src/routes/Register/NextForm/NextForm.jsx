import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faEye, faEyeSlash, faUser } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const NextForm = (props) => {
  const [showPassword1, setShowPassword1] = useState(false)
  const [showPassword2, setShowPassword2] = useState(false)
  return (
    <>
      <div className="login-register-controll">
        <div className="icon">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <input
          className="login-register-input"
          type="text"
          placeholder="Họ và tên"
          value={props.name}
          onChange={(e) => props.setName(e.target.value)}
        />
        {props.valName.length > 0 && (
          <span className="login-register-validate">{props.valName}</span>
        )}
      </div>
      <div className="login-register-controll">
        <div className="icon">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <input
          className="login-register-input"
          type="text"
          placeholder="Username"
          value={props.username}
          onChange={(e) => props.setUsername(e.target.value)}
        />
        {props.valUsername.length > 0 && (
          <span className="login-register-validate">{props.valUsername}</span>
        )}
      </div>
      <div className="login-register-controll">
        <div className="icon">
          <FontAwesomeIcon icon={faLock} />
        </div>
        <input
          className="login-register-input"
          type={!showPassword1 ? "password" : "text"}
          placeholder="Mật khẩu"
          value={props.password}
          onChange={(e) => props.setPassword(e.target.value)}
        />
        <div className="icon" style={{cursor: "pointer"}} onClick={() => setShowPassword1(!showPassword1)}>
          {showPassword1 ? <FontAwesomeIcon icon={faEye} /> :
          <FontAwesomeIcon icon={faEyeSlash} />}
        </div>
        {props.valPassword.length > 0 && (
          <span className="login-register-validate">{props.valPassword}</span>
        )}
      </div>
      <div className="login-register-controll">
        <div className="icon">
          <FontAwesomeIcon icon={faLock} />
        </div>
        <input
          className="login-register-input"
          type={!showPassword2 ? "password" : "text"}
          placeholder="Nhập lại mật khẩu"
          value={props.confirmPassword}
          onChange={(e) => props.setConfirmPassword(e.target.value)}
        />
        <div className="icon" style={{cursor: "pointer"}} onClick={() => setShowPassword2(!showPassword2)}>
          {showPassword2 ? <FontAwesomeIcon icon={faEye} /> :
          <FontAwesomeIcon icon={faEyeSlash} />}
        </div>
        {props.valConfPassword.length > 0 && (
          <span className="login-register-validate">{props.valConfPassword}</span>
        )}
      </div>
    </>
  );
};

export default NextForm;
