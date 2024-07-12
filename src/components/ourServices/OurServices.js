import React from "react";

const OurServices = () => {

  return (
    <section id="services" className="services sections-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Our Products & Services</h2>
        </div>

        <div className="row gy-4" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-4 col-md-6">
            <div className="service-item  position-relative">
              <div className="icon">
                <i className="bi bi-activity"></i>
              </div>
              <h3>Batteries</h3>
              <p>
                UPS batteries are rechargeable batteries that provide backup power to a computer system in the event of a power outage 12. 
                They are used to protect hardware such as computers, servers, and network equipment from power surges, brownouts, and blackouts. 
              </p>
              <a href="javascript:void(0)" className="readmore stretched-link">
                Read more <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

           <div className="col-lg-4 col-md-6">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-broadcast"></i>
              </div>
              <h3>Inverters</h3>
              <p>
                An inverter is an electronic device that converts direct current (DC) into alternating current (AC) 123. 
                It is used to run AC loads through a battery or control AC loads via AC-DC conversion 3. Inverters are also available as single-phase inverters and three-phase inverters.
              </p>
              <a href="javascript:void(0)" className="readmore stretched-link">
                Read more <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div> 

          <div className="col-lg-4 col-md-6">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-easel"></i>
              </div>
              <h3>Solar Panels & Pumps</h3>
              <p>
                Solar panels are devices that convert sunlight into electricity 12. They are made up of photovoltaic cells that produce excited electrons when exposed to light 1. 
                The electrons flow through a circuit and produce direct current (DC) electricity, which can be used to power various devices or be stored in batteries
              </p>
              <a href="javascript:void(0)" className="readmore stretched-link">
                Read more <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-bounding-box-circles"></i>
              </div>
              <h3>Home Automation</h3>
              <p>
                Solar pumps are devices that use photovoltaic technology to convert solar energy into electricity to run the pumping system, 
                thereby replacing erratic grid supply and pollution-causing diesel-powered versions. They are used to provide water for irrigation and drinking purposes in remote areas where grid electricity is not available.
              </p>
              <a href="javascript:void(0)" className="readmore stretched-link">
                Read more <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-calendar4-week"></i>
              </div>
              <h3>Automatic Waterlevel Controller</h3>
              <p>
                An automatic water level controller is a device that helps to maintain the water level in a storage tank. 
                It automatically switches on the pump when the water level in the tank falls below a certain level and switches it off when the water level rises above a certain level. This helps to prevent the overflow of water and dry running of the pump.
              </p>
              <a href="javascript:void(0)" className="readmore stretched-link">
                Read more <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div> 

           <div className="col-lg-4 col-md-6">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-chat-square-text"></i>
              </div>
              <h3>EV Batteries</h3>
              <p>
                Electric vehicle batteries are rechargeable batteries used to power electric vehicles (EVs). 
                They differ from starting, lighting, and ignition (SLI) batteries, as they are typically lithium-ion batteries that are designed for high power-to-weight ratio energy density 1. 
                Lithium-ion batteries are the most efficient and preferred type of battery for EVs
              </p>
              <a href="javascript:void(0)" className="readmore stretched-link">
                Read more <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div> 

        </div>
      </div>
    </section>
  );
};

export default OurServices;
