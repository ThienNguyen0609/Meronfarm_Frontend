import './ChangePassword.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from 'react'

const ChangePassword = () => {
    const [oldPass, setOldPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [reNewPass, setReNewPass] = useState("");
    const [oldPassEye, setOldPassEye] = useState(false);
    const [newPassEye, setNewPassEye] = useState(false);
    const [reNewPassEye, setReNewPassEye] = useState(false);
    const [npValidate, setNpValidate] = useState(false);
    const [rnpValidate, setRnpValidate] = useState(false);
    const oldPassRef = useRef();
    const newPassRef = useRef();
    const reNewPassRef = useRef();

    const handleChangeTypeInput = (s) => {
        if(s === "old") {
            setOldPassEye(!oldPassEye);
            if(oldPassRef.current.type === "password") oldPassRef.current.type = "text"
            else oldPassRef.current.type = "password"
        }
        else if(s === "new") {
            setNewPassEye(!newPassEye);
            if(newPassRef.current.type === "password") newPassRef.current.type = "text"
            else newPassRef.current.type = "password"
        }
        else {
            setReNewPassEye(!reNewPassEye)
            if(reNewPassRef.current.type === "password") reNewPassRef.current.type = "text"
            else reNewPassRef.current.type = "password"
        }
    }

    useEffect(() => {
        const len = newPass.length
        if((len < 6 && len > 0) || newPass.includes(" ")) setNpValidate(true)
        else setNpValidate(false)

        if(reNewPass.length > 0 && reNewPass !== newPass) setRnpValidate(true)
        else setRnpValidate(false)
    }, [newPass, reNewPass])
    return (
        <>
        <div className='profile-inner'>
            <div className="profile-title">Cập nhật mật khẩu</div>
            <div className="cp-wrapper">
                <div className="cp-inner">
                    <div className="cp-form">
                        <div className="cp-form__input">
                            <input ref={oldPassRef} className='form-control form-input' type="password" placeholder='Mật khẩu hiện tại' value={oldPass} onChange={e=>setOldPass(e.target.value)} />
                            <div className="input-suffix" onClick={()=>handleChangeTypeInput("old")}>
                                {oldPassEye ? <FontAwesomeIcon icon={faEye} /> :
                                <FontAwesomeIcon icon={faEyeSlash} />}
                            </div>
                        </div>
                        <div className="cp-form__input">
                            <input ref={newPassRef} className='form-control form-input' type="password" placeholder='Mật khẩu mới' value={newPass} onChange={e=>setNewPass(e.target.value)} />
                            {npValidate && <p className='input-validation'>Độ dài từ 6 đến 20 ký tự, không chứa khoảng trắng</p>}
                            <div className="input-suffix" onClick={()=>handleChangeTypeInput("new")}>
                                {newPassEye ? <FontAwesomeIcon icon={faEye} /> :
                                <FontAwesomeIcon icon={faEyeSlash} />}
                            </div>
                        </div>
                        <div className="cp-form__input">
                            <input ref={reNewPassRef} className='form-control form-input' type="password" placeholder='Xac nhận mật khẩu' value={reNewPass} onChange={e=>setReNewPass(e.target.value)} />
                            {rnpValidate && <p className='input-validation'>Mật khẩu mới không khớp</p>}
                            <div className="input-suffix" onClick={()=>handleChangeTypeInput("reNew")}>
                                {reNewPassEye ? <FontAwesomeIcon icon={faEye} /> :
                                <FontAwesomeIcon icon={faEyeSlash} />}
                            </div>
                        </div>
                        <button className='cp-form__btn'>Thay đổi</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ChangePassword