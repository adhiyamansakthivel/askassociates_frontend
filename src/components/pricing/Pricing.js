import React from "react";

const Pricing=()=>{
    return(
        <section id="pricing" className="pricing sections-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-header">
          <h2>Pricing</h2>
          <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p>
        </div>

        <div className="row g-4 py-lg-5" data-aos="zoom-out" data-aos-delay="100">

          <div className="col-lg-4">
            <div className="pricing-item">
              <h3>Free Plan</h3>
              <div className="icon">
                <i className="bi bi-box"></i>
              </div>
              <h4><sup>$</sup>0<span> / month</span></h4>
              <ul>
                <li><i className="bi bi-check"></i> Quam adipiscing vitae proin</li>
                <li><i className="bi bi-check"></i> Nec feugiat nisl pretium</li>
                <li><i className="bi bi-check"></i> Nulla at volutpat diam uteera</li>
                <li className="na"><i className="bi bi-x"></i> <span>Pharetra massa massa ultricies</span></li>
                <li className="na"><i className="bi bi-x"></i> <span>Massa ultricies mi quis hendrerit</span></li>
              </ul>
              <div className="text-center"><a href="javascript:void(0)" className="buy-btn">Buy Now</a></div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="pricing-item featured">
              <h3>Business Plan</h3>
              <div className="icon">
                <i className="bi bi-airplane"></i>
              </div>

              <h4><sup>$</sup>29<span> / month</span></h4>
              <ul>
                <li><i className="bi bi-check"></i> Quam adipiscing vitae proin</li>
                <li><i className="bi bi-check"></i> Nec feugiat nisl pretium</li>
                <li><i className="bi bi-check"></i> Nulla at volutpat diam uteera</li>
                <li><i className="bi bi-check"></i> Pharetra massa massa ultricies</li>
                <li><i className="bi bi-check"></i> Massa ultricies mi quis hendrerit</li>
              </ul>
              <div className="text-center"><a href="javascript:void(0)" className="buy-btn">Buy Now</a></div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="pricing-item">
              <h3>Developer Plan</h3>
              <div className="icon">
                <i className="bi bi-send"></i>
              </div>
              <h4><sup>$</sup>49<span> / month</span></h4>
              <ul>
                <li><i className="bi bi-check"></i> Quam adipiscing vitae proin</li>
                <li><i className="bi bi-check"></i> Nec feugiat nisl pretium</li>
                <li><i className="bi bi-check"></i> Nulla at volutpat diam uteera</li>
                <li><i className="bi bi-check"></i> Pharetra massa massa ultricies</li>
                <li><i className="bi bi-check"></i> Massa ultricies mi quis hendrerit</li>
              </ul>
              <div className="text-center"><a href="javascript:void(0)" className="buy-btn">Buy Now</a></div>
            </div>
          </div>

        </div>

      </div>
    </section>
    )
}

export default Pricing;