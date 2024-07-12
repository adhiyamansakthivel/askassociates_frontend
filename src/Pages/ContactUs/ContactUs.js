import React from "react";
import HelmetComp from "../../baseComponent/helmet/HelmetComp";
import Contact from "../../components/contact/Contact";

const ContactUs = () => {
  return (
    <>
      <HelmetComp title={'Contact Us'} />
      <main id="main">
        <Contact />
      </main>
    </>
  );
};

export default ContactUs;
