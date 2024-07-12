import React, { useEffect } from "react";
import PureCounter from "@srexi/purecounterjs";
 import StatsCounterSvgComponent1 from "../../utils/svgUtils";

const StatsCounter = () => {
  useEffect(() => {
    /**
     * Initiate Pure Counter
     */
    new PureCounter();
  }, []);

  return (
    <section id="stats-counter" className="stats-counter">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-7">
            <StatsCounterSvgComponent1 className="img-fluid"/>
          </div>

          <div className="col-lg-5">
            <div className="stats-item d-flex align-items-center">
              <span
                data-purecounter-start="0"
                data-purecounter-end="232"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>
                <strong>Happy Clients</strong> 
              </p>
            </div>

            <div className="stats-item d-flex align-items-center">
              <span
                data-purecounter-start="0"
                data-purecounter-end="100"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>
                <strong>Products</strong> 
              </p>
            </div>

            <div className="stats-item d-flex align-items-center">
              <span
                data-purecounter-start="0"
                data-purecounter-end="453"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>
                <strong>Hours Of Support</strong> 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
