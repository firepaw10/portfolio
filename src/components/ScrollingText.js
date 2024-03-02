import React from "react";
import Marquee from "react-fast-marquee";

const ScrollingText = () => (
  <Marquee className="paddedBuffer">
    <img src="https://static.displate.com/280x392/displate/2023-02-08/c29649c1c0acedd933b7e330e0e5f92b_9938d2c23d24d4c66093f235b9e3d677.jpg" height="35%" width="45%"/>
    <img src="https://media.gettyimages.com/id/512225676/vector/ninja.jpg?s=612x612&w=gi&k=20&c=ariuCu_6bhc1Hpz_wsvKAHeqjoplkfBRryz2aETEwas=" height="35%" width="45%"/>
    <img src="https://realbrockville.files.wordpress.com/2018/07/ronin.jpg" height="35%" width="45%"/>
  </Marquee>
);

export default ScrollingText;