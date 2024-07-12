import React from "react";
import aboutImage1 from '../../assets/images/ask_about_us.jpeg'


const About = () => {
  return (
    <section id="aboutus" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>About Us</h2>
        </div>

        <div className="row gy-4">
          <div className="col-lg-6">
            
            <img
              src={aboutImage1}
              className="img-fluid rounded-4 mb-4"
              alt="about us"
            />
          
          </div>
          <div className="col-lg-6">
            <div className="content ps-0 ps-lg-5">

            <h3>Welcome to Ask Associates</h3>
              <p className="fst-italic">
                At Ask Associates, we are passionate about providing high-quality construction materials to meet your project needs. 
                With years of industry experience, we take pride in our commitment to excellence, reliability, and customer satisfaction.
              </p>

              <h4>What Sets Us Apart?</h4>
              <ul>
                <li>
                  <i className="bi bi-check-circle-fill"></i> 
                  <h6>Quality Assurance:</h6>Our materials undergo rigorous testing to ensure durability and performance.
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i> 
                  <h6>Wide Selection:</h6>From concrete to steel, we offer a comprehensive range of construction materials.
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i> 
                  <h6>Expert Team:</h6>Our knowledgeable staff is here to assist you every step of the way.
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i> 
                  <h6>Timely Delivery:</h6>We understand project deadlines and strive to deliver on time, every time.
                </li>
                
              </ul>

             
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
