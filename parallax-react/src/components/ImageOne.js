import { Parallax } from "react-parallax";
import Coffee from "../img/coffee.jpg";

const ImageOne = () => (
  <Parallax className="image" bgImage={Coffee} strength={800}>
    <div className="content">
      <span className="img-txt">a trip for a coffee</span>
    </div>
  </Parallax>
);

export default ImageOne;
