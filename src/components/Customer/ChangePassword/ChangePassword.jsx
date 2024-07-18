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
                            <input
                                className='form-control form-input' 
                                type={!oldPassEye ? "password" : "text"} 
                                placeholder='Mật khẩu hiện tại' 
                                value={oldPass} 
                                onChange={e=>setOldPass(e.target.value)} 
                            />
                            <div className="input-suffix" onClick={()=>setOldPassEye(!oldPassEye)}>
                                {oldPassEye ? <FontAwesomeIcon icon={faEye} /> :
                                <FontAwesomeIcon icon={faEyeSlash} />}
                            </div>
                        </div>
                        <div className="cp-form__input">
                            <input 
                                className='form-control form-input' 
                                type={!newPassEye ? "password" : "text"} 
                                placeholder='Mật khẩu mới' 
                                value={newPass} 
                                onChange={e=>setNewPass(e.target.value)} 
                            />
                            {npValidate && <p className='input-validation'>Độ dài từ 6 đến 20 ký tự, không chứa khoảng trắng</p>}
                            <div className="input-suffix" onClick={()=>setNewPassEye(!newPassEye)}>
                                {newPassEye ? <FontAwesomeIcon icon={faEye} /> :
                                <FontAwesomeIcon icon={faEyeSlash} />}
                            </div>
                        </div>
                        <div className="cp-form__input">
                            <input
                                className='form-control form-input' 
                                type={!reNewPassEye ? "password" : "text"} 
                                placeholder='Xac nhận mật khẩu' 
                                value={reNewPass} 
                                onChange={e=>setReNewPass(e.target.value)} 
                            />
                            {rnpValidate && <p className='input-validation'>Mật khẩu mới không khớp</p>}
                            <div className="input-suffix" onClick={()=>setReNewPassEye(reNewPassEye)}>
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