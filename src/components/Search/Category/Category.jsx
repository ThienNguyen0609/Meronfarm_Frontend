import "./Category.scss";

import all from '../../../assets/images/category/all.png'
import vegetable from '../../../assets/images/category/raucu.jpeg'
import fruit from '../../../assets/images/category/fruit.jpeg'
import spice from '../../../assets/images/category/giavi.jpeg'
import egg from '../../../assets/images/category/trung.jpeg'
import drink from '../../../assets/images/category/douong.jpeg'
import dry from '../../../assets/images/category/dokho.png'
import fastFood from '../../../assets/images/category/doanuonglien.jpeg'
import nutritionFood from '../../../assets/images/category/anvatdinhduong.png'
import other from '../../../assets/images/category/sanphamconlai.jpeg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useRef, useState, useEffect } from "react";

const Category = () => {
  const innerRef = useRef();
  const [position, setPosition] = useState(0);
  const [arrowLeft, setArrowLeft] = useState(false);
  const [arrowRight, setArrowRight] = useState(false);
  const handleScrollToEnd = () => {
    const scrollWidth = innerRef.current.scrollWidth;
    const offsetWidth = innerRef.current.offsetWidth;
    innerRef.current.scrollLeft += 120;
    setPosition((position) =>
      position >= scrollWidth - offsetWidth ? position : position + 120
    );
  };
  const handleScrollToStart = () => {
    const offsetWidth = innerRef.current.offsetWidth;
    innerRef.current.scrollLeft -= 120;
    setPosition((position) =>
      position <= 0 ? 0 : position - 120 < 0 ? 0 : position - 120
    );
  };
  useEffect(() => {
    if (innerRef.current) {
      const scrollWidth = innerRef.current.scrollWidth;
      const offsetWidth = innerRef.current.offsetWidth;
      position >= scrollWidth - offsetWidth
        ? setArrowRight(false)
        : setArrowRight(true);
    }
    position <= 0 ? setArrowLeft(false) : setArrowLeft(true);
  }, [position]);
  return (
    <>
      <div className="category">
        {arrowLeft && (
          <div className="ar-icon ar-left" onClick={() => handleScrollToStart()}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
        )}
        <div className="inner" ref={innerRef}>
          <div className="item">
            <div className="item-inner">
              <img src={all} alt="picture" />
              <span>Tất cả</span>
            </div>
          </div>
          <div className="item">
            <div className="item-inner">
              <img src={fruit} alt="picture" />
              <span>Trái cây</span>
            </div>
          </div>
          <div className="item">
            <div className="item-inner">
              <img src={vegetable} alt="picture" />
              <span>Rau củ</span>
            </div>
          </div>
          <div className="item">
            <div className="item-inner">
              <img src={spice} alt="picture" />
              <span>Gia vị</span>
            </div>
          </div>
          <div className="item">
            <div className="item-inner">
              <img src={egg} alt="picture" />
              <span>Trứng</span>
            </div>
          </div>
          <div className="item">
            <div className="item-inner">
              <img src={drink} alt="picture" />
              <span>Đồ uống</span>
            </div>
          </div>
          <div className="item">
            <div className="item-inner">
              <img src={dry} alt="picture" />
              <span>Đồ khô</span>
            </div>
          </div>
          <div className="item">
            <div className="item-inner">
              <img src={fastFood} alt="picture" />
              <span>Đồ ăn - uống liền</span>
            </div>
          </div>
          <div className="item">
            <div className="item-inner">
              <img src={nutritionFood} alt="picture" />
              <span>Ăn vặt dinh dưỡng</span>
            </div>
          </div>
          <div className="item">
            <div className="item-inner">
              <img src={other} alt="picture" />
              <span>Sản phẩm còn lại</span>
            </div>
          </div>
        </div>
        {arrowRight && (
          <div className="ar-icon ar-right" onClick={() => handleScrollToEnd()}>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        )}
      </div>
    </>
  );
};

export default Category;
