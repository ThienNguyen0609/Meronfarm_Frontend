import "./RegisterForm.scss";

import { useState } from 'react'
import { handleProceed, checkValidateRegister } from "../../../services/validateService";
import InitialForm from "../InitialForm/InitialForm";
import NextForm from "../NextForm/NextForm";
import { useNavigate } from "react-router-dom";
import { userCheckEmailOrPhoneNumber, userRegister } from "../../../services/authenticationService";

const RegisterForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [valPhone, setValPhone] = useState("")
  const [email, setEmail] = useState("");
  const [valEmail, setValEmail] = useState("")

  const [name, setName] = useState("");
  const [valName, setValName] = useState("")
  const [username, setUsername] = useState("");
  const [valUsername, setValUsername] = useState("")
  const [password, setPassword] = useState("");
  const [valPassword, setValPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("");
  const [valConfPassword, setValConfPassword] = useState("");

  const [proceed, setProceed] = useState(false)
  const navigate = useNavigate();

  const handleCheckUserEmailOrPhoneNumer = async () => {
    if(handleProceed(email, phoneNumber, setValPhone, setValEmail)) {
      const request = {
        phoneNumber: phoneNumber,
        email: email
      }
      const response = await userCheckEmailOrPhoneNumber(JSON.stringify(request))
      console.log(response)
      if(response.status === 1) setProceed(true)
      else if(response.status === 2) {
        setValPhone("SĐT đã tồn tại")
        setValEmail("Email đã tồn tại")
      }
      else if(response.status === 3) {
        setValEmail(response.message)
        setValPhone("")
      }
      else {
        setValPhone(response.message)
        setValEmail("")
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(checkValidateRegister(name, username, password, confirmPassword, setValName, setValUsername, setValPassword, setValConfPassword)) {
      const request = {
        name: name,
        userName: username,
        password: password,
        phoneNumber: phoneNumber,
        email: email
      }
      const response = await userRegister(JSON.stringify(request));
      if(response.status) navigate("/login")
    }
  }
  return (
    <>
      <div className="login-register-form">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="login-register-form-group">
            {!proceed && <InitialForm 
              phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} valPhone={valPhone}
              email={email} setEmail={setEmail} valEmail={valEmail}
            />}
            {proceed && <NextForm 
              name={name} setName={setName} valName={valName}
              username={username} setUsername={setUsername} valUsername={valUsername}
              password={password} setPassword={setPassword} valPassword={valPassword}
              confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword} valConfPassword={valConfPassword}
            />}
            {proceed && <button className="login-register-btn" type="submit">
              Đăng ký
            </button>}
            {!proceed && 
              <button 
                className="login-register-btn" type="button" 
                onClick={() => handleCheckUserEmailOrPhoneNumer()}
              >
              Tiếp tục
              </button>
            }
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
