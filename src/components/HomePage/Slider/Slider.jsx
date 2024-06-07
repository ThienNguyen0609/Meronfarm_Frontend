import "./Slider.scss";

import slider1 from "../../../assets/images/homepage/slider_image_1.png";
import slider2 from "../../../assets/images/homepage/slider_image_2.png";
import slider3 from "../../../assets/images/homepage/slider_image_3.png";
import { useEffect, useState } from "react";

const Slider = () => {
  const [numSlide, setNumSlide] = useState(1);
  useEffect(() => {
    const timer = setInterval(() => {
      setNumSlide((numSlide) => (numSlide === 3 ? 1 : numSlide + 1));
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <div className="slider-wrapper">
        <div className="slider">
          <div className={"slider-item slider-animation" + (numSlide === 1 ? " active" : "")}>
            <img src={slider1} alt="image" />
          </div>
          <div className={"slider-item slider-animation" + (numSlide === 2 ? " active" : "")}>
            <img src={slider2} alt="image" />
          </div>
          <div className={"slider-item slider-animation" + (numSlide === 3 ? " active" : "")}>
            <img src={slider3} alt="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
