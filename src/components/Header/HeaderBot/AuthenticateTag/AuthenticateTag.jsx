import { Link } from 'react-router-dom';
import './AuthenticateTag.scss'

const AuthenticateTag = () => {
    return (
        <>
        <div className="tag-wrapper">
            <div className="tag-inner">
                <Link to={"/login"} className="tag-text">Đăng nhập</Link>
                <Link to={"/register"} className="tag-text">Đăng ký</Link>
                <div className="tag-line"></div>
            </div>
        </div>
        </>
    )
}

export default AuthenticateTag;