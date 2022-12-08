import { Parallax } from "react-parallax";
import Beans from "../img/beans.jpg";

const ImageTwo = () => (
  <Parallax className="image" bgImage={Beans} strength={800}>
    <div className="content">
      <span className="img-txt">a trip for a coffee</span>
    </div>
  </Parallax>
);

export default ImageTwo;
