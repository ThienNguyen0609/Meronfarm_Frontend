import './AuthenticateTag.scss'

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const AuthenticateTag = () => {
    return (
        <>
        <div className="tag-wrapper">
            <div className="tag-inner">
                <Link to={"/login"} className="tag-text">Đăng nhập</Link>
                <Link to={"/register"} className="tag-text">Đăng ký</Link>
                <div className="tag-line"></div>
            </div>
            <Link className='login-icon' to={"/login"}><FontAwesomeIcon icon={faSignInAlt} /></Link>
        </div>
        </>
    )
}

export default AuthenticateTag;