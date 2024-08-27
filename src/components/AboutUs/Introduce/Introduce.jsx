import "./Introduce.scss";

import aboutus from '../../../assets/images/about_us/aboutus.jpeg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faFacebook, faFacebookMessenger, faPinterest } from "@fortawesome/free-brands-svg-icons"

const Introduce = () => {
  return (
    <div className="about-introduce b-width">
      <div className="intro-text">
        <div className="title">Meron Farm</div>
        <div className="text">
          <p>
            Meron Farm là một start-up agritech về phân phối thực phẩm bền vững
            từ nông trại, nhà sản xuất địa phương đến người tiêu dùng, trên nền
            tảng e-commerce.
          </p>
          <p>
            Meron Farm trong tiếng Do Thái có nghĩa là “chiến binh” , thể hiện
            tinh thần đổi mới và vượt qua khó khăn của người sáng lập. Chúng tôi
            trồng và cung cấp các loại cây dược liệu, rau củ quả và thực phẩm
            sạch, không sử dụng hóa chất, có nguồn gốc minh bạch và an toàn cho
            sức khỏe. Chúng tôi có các loại cây dược liệu như bạc hà, nghệ, sả,
            gừng, cúc la mã, húng quế…; các loại rau củ quả như cà chua, cà rốt,
            bắp cải, bí đỏ, dưa hấu…; và các loại thực phẩm sạch khác. Chúng tôi
            đảm bảo rằng các sản phẩm của chúng tôi đều được trồng và chăm sóc
            theo
          </p>
        </div>
        <div className="social-media">
          <div className="icon">
            <FontAwesomeIcon icon={faFacebook} color="#25479B" />
          </div>
          <div className="icon bg-gde">
            <FontAwesomeIcon icon={faFacebookMessenger} color="#168aff" />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faPinterest} color="#CC2127" />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faTelegram} color="#37AEE2" />
          </div>
        </div>
      </div>
      <div className="image">
        <img src={aboutus} alt="image" />
      </div>
    </div>
  );
};

export default Introduce
