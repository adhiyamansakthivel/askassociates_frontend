import React from "react";
import HelmetComp from "../../baseComponent/helmet/HelmetComp";
import About from "../../components/about/About";

const AboutUs = () => {
  return (
    <>
     <HelmetComp title={'About Us'} />
      <main id="main">
        <About />
      </main>
    </>
  );
};

export default AboutUs;
