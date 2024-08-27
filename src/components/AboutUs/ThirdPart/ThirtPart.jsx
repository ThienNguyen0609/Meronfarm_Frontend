import "./ThirtPart.scss";

import vegetable from '../../../assets/images/category/raucu.jpeg'
import fruit from '../../../assets/images/category/fruit.jpeg'
import spice from '../../../assets/images/category/giavi.jpeg'
import egg from '../../../assets/images/category/trung.jpeg'
import drink from '../../../assets/images/category/douong.jpeg'
import dry from '../../../assets/images/category/dokho.png'
import fastFood from '../../../assets/images/category/doanuonglien.jpeg'
import nutritionFood from '../../../assets/images/category/anvatdinhduong.png'
import other from '../../../assets/images/category/sanphamconlai.jpeg'
import { Link } from "react-router-dom";

const ThirtPart = () => {
  return (
    <div className="third-part">
      <div className="inner b-width">
        <div>
          <p className="title">
            HƠN <span>178</span> SẢN PHẨM ĐA DẠNG
          </p>
          <p className="text">
            Gồm TRÁI CÂY, RAU CỦ, GIA VỊ, TRỨNG,… và nhiều sản phẩm khác để đáp
            ứng nhu cầu mua hàng cơ bản của bạn
          </p>
        </div>
        <div className="category">
          <div className="item">
            <Link to={"/search?CategoryId=1"} className="item-inner">
              <img src={fruit} alt="picture" />
              <span>Trái cây</span>
            </Link>
          </div>
          <div className="item">
            <Link to={"/search?CategoryId=2"} className="item-inner">
              <img src={vegetable} alt="picture" />
              <span>Rau củ</span>
            </Link>
          </div>
          <div className="item">
            <Link to={"/search?CategoryId=3"} className="item-inner">
              <img src={spice} alt="picture" />
              <span>Gia vị</span>
            </Link>
          </div>
          <div className="item">
            <Link to={"/search?CategoryId=4"} className="item-inner">
              <img src={egg} alt="picture" />
              <span>Trứng</span>
            </Link>
          </div>
          <div className="item">
            <Link to={"/search?CategoryId=5"} className="item-inner">
              <img src={drink} alt="picture" />
              <span>Đồ uống</span>
            </Link>
          </div>
          <div className="item">
            <Link to={"/search?CategoryId=6"} className="item-inner">
              <img src={dry} alt="picture" />
              <span>Đồ khô</span>
            </Link>
          </div>
          <div className="item">
            <Link to={"/search?CategoryId=7"} className="item-inner">
              <img src={fastFood} alt="picture" />
              <span>Đồ ăn - uống liền</span>
            </Link>
          </div>
          <div className="item">
            <Link to={"/search?CategoryId=8"} className="item-inner">
              <img src={nutritionFood} alt="picture" />
              <span>Ăn vặt dinh dưỡng</span>
            </Link>
          </div>
          <div className="item">
            <Link to={"/search?CategoryId=9"} className="item-inner">
              <img src={other} alt="picture" />
              <span>Sản phẩm còn lại</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirtPart
