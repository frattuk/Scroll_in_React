import { Parallax } from "react-parallax";
import Cap from "../img/cap.jpg";

const ImageThree = () => (
  <Parallax className="image" bgImage={Cap} strength={800}>
    <div className="content">
      <span className="img-txt">a trip for a coffee</span>
    </div>
  </Parallax>
);

export default ImageThree;
