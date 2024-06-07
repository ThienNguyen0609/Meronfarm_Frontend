import './Information.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Information = () => {
    const [name, setName] = useState("Nguyen Hoan Thien");
    const [usename, setUsername] = useState("ThienNguyen");
    const [phoneNumber, setPhoneNumber] = useState("0123456789");
    const [email, setEmail] = useState("sss@gmail.com")
    return (
        <>
        <div className='profile-inner'>
            <div className="profile-title">Thông tin tài khoản</div>
            <div className="information-wrapper">
                <div className="information-inner">
                    <div className="information-avatar">
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className="information-form">
                        <div className="form-group">
                            <div className="form-group__item">
                                <label className='form-label' htmlFor="name"><span>*</span> Họ và tên:</label>
                                <input onChange={(e)=>setName(e.target.value)} id='name' className='form-control form-input' type="text" value={name} />
                            </div>
                            <div className="form-group__item">
                                <label className='form-label' htmlFor="username"><span>*</span> Tên hiển thị:</label>
                                <input onChange={(e)=>setUsername(e.target.value)} id='username' className='form-control form-input' type="text" value={usename} />
                            </div>
                            <div className="form-group__item">
                                <label className='form-label' htmlFor="phonenumber">Số điện thoại:</label>
                                <input onChange={(e)=>setPhoneNumber(e.target.value)} id='phonenumber' className='form-control form-input' type="text" value={phoneNumber} />
                            </div>
                            <div className="form-group__item">
                                <label className='form-label' htmlFor="email">Email:</label>
                                <input onChange={(e)=>setEmail(e.target.value)} id='email' className='form-control form-input' type="email" value={email} />
                            </div>
                            <button className='form-btn'>Cập nhật</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Information