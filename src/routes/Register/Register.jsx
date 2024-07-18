// import './Register.scss'

import logo from '../../assets/images/homepage/logopage.jpg'
import { Link } from 'react-router-dom'
import RegisterForm from './RegisterForm/RegisterForm'

const Register = () => {
    return (
        <>
        <div className="login-register-wrapper">
            <div className='login-register-inner'>
                <Link to={"/"} className="logo">
                    <img src={logo} alt="page logo" />
                </Link>
                <div className="login-register-title">Đăng ký</div>
                <RegisterForm />
                <div className="rules">
                    Qua việc đăng nhập hoặc tạo tài khoản, bạn đồng ý với các 
                    <Link className="meronfarm-link" to={""}> Điều khoản dịch vụ</Link> & 
                    <Link className="meronfarm-link" to={""}> Chính sách bảo mật</Link> của chúng tôi
                </div>
                <div className="login-register-link">
                    Bạn đã có tài khoản? <Link className="meronfarm-link" to={"/login"}>Đăng nhập</Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Register