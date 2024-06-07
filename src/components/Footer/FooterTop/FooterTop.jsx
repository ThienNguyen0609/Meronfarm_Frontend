import "./FooterTop.scss";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const FooterTop = () => {
  return (
    <>
      <div className="ft-wrapper">
        <div className="ft-inner">
          <div className="ft-content my-container">
            <div className="introduce pe-5">
              <div className="title">Giới thiệu</div>
              <div className="list">
                <div className="item">
                  Tên công ty: CÔNG TY CỔ PHẦN THƯƠNG MẠI VÀ CÔNG NGHỆ MERON
                  VIETNAM
                </div>
                <div className="item">
                  Địa chỉ: Phường 15, Quận Tân Bình, Thành phố Hồ Chí Minh
                </div>
                <div className="item">Hotline: 0347 377 250</div>
                <div className="item">Email: info.meronfarm@gmail.com</div>
                <div className="item">
                  MERON FARM - Nền tảng thương mại điện tử về nông sản tươi,
                  thực phẩm an toàn, minh bạch, có nguồn gốc từ thực vật, kết
                  nối trực tiếp từ nông trại và nhà sản xuất địa phương đến
                  người tiêu dùng.
                </div>
              </div>
            </div>
            <div className="support">
              <div className="title">Hỗ trợ</div>
              <div className="list">
                <div className="item">Hotline: 0347 377 250</div>
                <Link to={"/policy"} className="item link">Chính sách</Link>
                <Link className="item link">Hình thức thanh toán</Link>
                <Link className="item link">Vận chuyển và giao nhận</Link>
                <Link className="item link">Đổi trả và hoàn tiền</Link>
              </div>
            </div>
            <div className="connect">
              <div className="title">Kết nối với chúng tôi</div>
              <div className="style-connect">
                <Link to={'#'} className="link"><FontAwesomeIcon icon={faFacebook} /></Link>
                <Link to={'#'} className="link"><FontAwesomeIcon icon={faPhone} /></Link>
                <Link to={'#'} className="link"><FontAwesomeIcon icon={faEnvelope} /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterTop;
