import "./AboutUs.scss";
import CoreValue from "./CoreValue/CoreValue";

import Introduce from "./Introduce/Introduce";
import SecondPart from "./SecondPart/SecondPart";
import ThirtPart from "./ThirdPart/ThirtPart";

const AboutUs = () => {
  return (
    <>
      <div className="aboutus-wrapper">
        <div className="aboutus-inner">
          <Introduce />
          <SecondPart />
          <ThirtPart />
          <CoreValue />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
