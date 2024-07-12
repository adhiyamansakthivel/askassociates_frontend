import React from "react";
import APIEndPoints from "../../utils/APIEndPoints";
import { useAPIGet } from "../../services/APIService";

const Testimonials = () => {

  const apiTestimonials = useAPIGet(
    "testimonialList",
    "testimonialList",
    `${APIEndPoints.GetTestimonials.url}`,
    {
      enabled: !!APIEndPoints?.GetTestimonials?.url,
      refetchOnWindowFocus: false,
      staleTime: 0,
    }
  );

  return (
    <section id="testimonials" className="testimonials">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Testimonials</h2>
        </div>

        <div
          className="slides-3 swiper"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="swiper-wrapper">

            {!apiTestimonials?.isError && apiTestimonials?.isSuccess && (
              apiTestimonials?.data?.data?.data?.length && apiTestimonials?.data?.data?.data?.map((item) => {
                return (
                  <div className="swiper-slide">
                    <div className="testimonial-wrap">
                      <div className="testimonial-item">
                        <div className="d-flex align-items-center">
                          <img
                            src={item?.avatar}
                            className="testimonial-img flex-shrink-0"
                            alt={item?.name}
                          />
                          <div>
                            <h3>{item?.name}</h3>
                            <h4>{item?.designation}</h4>
                            <div className="stars">
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                            </div>
                          </div>
                        </div>
                        <p>
                          <i className="bi bi-quote quote-icon-left"></i>
                          {item?.description}
                          <i className="bi bi-quote quote-icon-right"></i>
                        </p>
                      </div>
                    </div>
                  </div>)
              }
              ))}

          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
