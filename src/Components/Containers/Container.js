import React from "react";
import Box from "../Box/Box";
import "./Container.css";
import Fade from "react-reveal/Fade";
import img1 from "../../Assets/1.jpeg";
import img2 from "../../Assets/2.jpeg";
import img3 from "../../Assets/3.jpeg";
import img4 from "../../Assets/4.jpeg";
import img5 from "../../Assets/5.jpeg";
import img6 from "../../Assets/6.jpeg";
import img7 from "../../Assets/7.jpeg";
import img8 from "../../Assets/8.jpeg";
import img9 from "../../Assets/9.jpeg";
import img10 from "../../Assets/10.jpeg";
import img11 from "../../Assets/11.jpeg";
import img12 from "../../Assets/12.jpeg";
import img13 from "../../Assets/13.jpeg";
import img14 from "../../Assets/14.jpeg";
import img15 from "../../Assets/15.jpeg";
import img16 from "../../Assets/16.jpeg";
import img17 from "../../Assets/17.jpeg";
import img18 from "../../Assets/18.jpeg";
import img19 from "../../Assets/19.jpeg";
import img20 from "../../Assets/20.jpeg";
import img21 from "../../Assets/21.jpeg";
import img22 from "../../Assets/22.jpeg";
import img23 from "../../Assets/23.jpeg";
import img24 from "../../Assets/24.JPG";
import img25 from "../../Assets/25.jpeg";
import img26 from "../../Assets/26.jpeg";
import img27 from "../../Assets/27.jpeg";
import footer from "../../Assets/loveyou.png";

function Container() {
  return (
    <div className="container">
      <Fade bottom delay={400} distance="10vh">
        <Box image={img1} />
      </Fade>

      <Fade bottom delay={600} distance="10vh">
        <Box image={img2} />
      </Fade>

      <Fade bottom delay={200} distance="10vh">
        <Box image={img3} />
      </Fade>

      <Fade bottom delay={200} distance="10vh">
        <Box image={img4} />
      </Fade>

      <Fade bottom delay={200} distance="10vh">
        <Box image={img5} />
      </Fade>

      <Fade bottom delay={200} distance="10vh">
        <Box image={img6} />
      </Fade>
      <Fade bottom delay={200} distance="10vh">
        <Box image={img7} />
      </Fade>
      <Fade bottom delay={200} distance="10vh">
        <Box image={img8} />
      </Fade>
      <Fade bottom delay={200} distance="10vh">
        <Box image={img9} />
      </Fade>
      <Fade bottom delay={200} distance="10vh">
        <Box image={img10} />
      </Fade>
      <Fade bottom delay={200} distance="10vh">
        <Box image={img11} />
      </Fade>
      <Fade bottom delay={200} distance="10vh">
        <Box image={img12} />
      </Fade>
      <Fade bottom delay={200} distance="10vh">
        <Box image={img13} />
      </Fade>
      <Fade bottom delay={200} distance="10vh">
        <Box image={img14} />
      </Fade>
      <Fade bottom delay={200} distance="10vh">
        <Box image={img15} />
      </Fade>
      <Fade bottom delay={200} distance="10vh">
        <Box image={img16} />
      </Fade>
      <Fade bottom delay={200} distance="10vh">
        <Box image={img17} />
      </Fade>
      <Fade bottom delay={200} distance="10vh">
        <Box image={img18} />
      </Fade>
      <Fade bottom delay={200} distance="10vh">
        <Box image={img19} />
      </Fade>
      <Fade bottom delay={200} distance="10vh">
        <Box image={img20} />
      </Fade>
      <Fade bottom delay={200} distance="10vh">
        <Box image={img21} />
      </Fade>
      <Fade bottom delay={200} distance="10vh">
        <Box image={img22} />
      </Fade>
      <Fade bottom delay={200} distance="10vh">
        <Box image={img23} />
      </Fade>
      <Fade bottom delay={200} distance="10vh">
        <Box image={img24} />
      </Fade>
      <Fade bottom delay={200} distance="10vh">
        <Box image={img25} />
      </Fade>
      <Fade bottom delay={200} distance="10vh">
        <Box image={img26} />
      </Fade>
      <Fade bottom delay={200} distance="10vh">
        <Box image={img27} />
      </Fade>

      <img src={footer} alt="footer" className="container__footer" />
    </div>
  );
}

export default Container;
