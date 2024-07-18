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
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPathName } from "../../../store/features/path/pathSlice";

const Category = ({categoryId}) => {
  const innerRef = useRef();
  const [position, setPosition] = useState(0);
  const [arrowLeft, setArrowLeft] = useState(false);
  const [arrowRight, setArrowRight] = useState(false);
  const dispatch = useDispatch();
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
            <Link to={"/search?CategoryId=all"} className={"item-inner"+(categoryId==="all" ? " active" : "")}
              onClick={() => dispatch(setPathName("Tất cả"))}
            >
              <img src={all} alt="picture" />
              <span>Tất cả</span>
            </Link>
          </div>
          <div className="item">
            <Link to={"/search?CategoryId=1"} className={"item-inner"+(categoryId==="1" ? " active" : "")}
              onClick={() => dispatch(setPathName("Trái cây"))}
            >
              <img src={fruit} alt="picture" />
              <span>Trái cây</span>
            </Link>
          </div>
          <div className="item">
            <Link to={"/search?CategoryId=2"} className={"item-inner"+(categoryId==="2" ? " active" : "")}
              onClick={() => dispatch(setPathName("Rau củ"))}
            >
              <img src={vegetable} alt="picture" />
              <span>Rau củ</span>
            </Link>
          </div>
          <div className="item">
            <Link to={"/search?CategoryId=3"} className={"item-inner"+(categoryId==="3" ? " active" : "")}
              onClick={() => dispatch(setPathName("Gia vị"))}
            >
              <img src={spice} alt="picture" />
              <span>Gia vị</span>
            </Link>
          </div>
          <div className="item">
            <Link to={"/search?CategoryId=4"} className={"item-inner"+(categoryId==="4" ? " active" : "")}
              onClick={() => dispatch(setPathName("Trứng"))}
            >
              <img src={egg} alt="picture" />
              <span>Trứng</span>
            </Link>
          </div>
          <div className="item">
            <Link to={"/search?CategoryId=5"} className={"item-inner"+(categoryId==="5" ? " active" : "")}
              onClick={() => dispatch(setPathName("Đồ uống"))}
            >
              <img src={drink} alt="picture" />
              <span>Đồ uống</span>
            </Link>
          </div>
          <div className="item">
            <Link to={"/search?CategoryId=6"} className={"item-inner"+(categoryId==="6" ? " active" : "")}
              onClick={() => dispatch(setPathName("Đồ khô"))}
            >
              <img src={dry} alt="picture" />
              <span>Đồ khô</span>
            </Link>
          </div>
          <div className="item">
            <Link to={"/search?CategoryId=7"} className={"item-inner"+(categoryId==="7" ? " active" : "")}
              onClick={() => dispatch(setPathName("Đồ ăn - uống liền"))}
            >
              <img src={fastFood} alt="picture" />
              <span>Đồ ăn - uống liền</span>
            </Link>
          </div>
          <div className="item">
            <Link to={"/search?CategoryId=8"} className={"item-inner"+(categoryId==="8" ? " active" : "")}
              onClick={() => dispatch(setPathName("Ăn vặt dinh dưỡng"))}
            >
              <img src={nutritionFood} alt="picture" />
              <span>Ăn vặt dinh dưỡng</span>
            </Link>
          </div>
          <div className="item">
            <Link to={"/search?CategoryId=9"} className={"item-inner"+(categoryId==="9" ? " active" : "")}
              onClick={() => dispatch(setPathName("Còn lại"))}
            >
              <img src={other} alt="picture" />
              <span>Sản phẩm còn lại</span>
            </Link>
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
