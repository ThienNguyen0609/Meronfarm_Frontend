import "./LoginForm.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { setSession, userLogin } from "../../../services/authenticationService";
import { checkValidateLogin } from "../../../services/validateService";
import { useNavigate } from "react-router-dom";
import { toastify } from "../../../services/toastify"
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const [emailOrPhoneNumber, setEmailOrPhoneNumber] = useState("");
  const [valEmailOrPhoneNumber, setValEmailOrPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [valPassword, setValPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(checkValidateLogin(emailOrPhoneNumber, password, setValEmailOrPhoneNumber, setValPassword)) {
      const request = {
        emailOrPhoneNumber: emailOrPhoneNumber,
        password: password
      }
      const response = await userLogin(JSON.stringify(request));
      if(response.status) {
        setSession(true, response.accessToken, response.user)
        toastify(true, "success", response.message, dispatch)
        navigate("/");
      }
      else {
        toastify(true, "error", response.message, dispatch)
      }
    }
  }
  return (
    <>
      <div className="login-register-form">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="login-register-form-group">
            <div className="login-register-controll">
              <div className="icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <input
                className="login-register-input"
                type="text"
                placeholder="Địa chỉ email/SĐT"
                value={emailOrPhoneNumber}
                onChange={(e) => setEmailOrPhoneNumber(e.target.value)}
              />
              {valEmailOrPhoneNumber.length > 0 && (
                <span className="login-register-validate">{valEmailOrPhoneNumber}</span>
              )}
            </div>
            <div className="login-register-controll">
              <div className="icon">
                <FontAwesomeIcon icon={faLock} />
              </div>
              <input
                className="login-register-input"
                type={!showPassword ? "password" : "text"}
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="icon" style={{cursor: "pointer"}} onClick={() => setShowPassword(!showPassword)}>
                {!showPassword ? <FontAwesomeIcon icon={faEye} /> :
                <FontAwesomeIcon icon={faEyeSlash} />}
              </div>
              {valPassword.length > 0 && (
                <span className="login-register-validate">{valPassword}</span>
              )}
            </div>
            <span className="forget-text">Quên mật khẩu?</span>
            <button className="login-register-btn" type="submit">
              Đăng nhập
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
