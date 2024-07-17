import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import about1 from '../../assets/images/img_1.jpg'


const Causal = ({ id, CarouselList }) => {
  useEffect(() => {
    /**
     * Init swiper slider with 1 slide at once in desktop view
     */
    new Swiper(".slides-1", {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    /**
     * Init swiper slider with 3 slides at once in desktop view
     */
    new Swiper(".slides-3", {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 40,
        },

        1200: {
          slidesPerView: 3,
        },
      },
    });
  }, []);

    return (
      <div id={id}>
        <section id="portfolio-details" className="portfolio-details">
          <div
            className={id !== "top-portfolio-details" ? "pt-2 container" : "pt-2"}
            data-aos="fade-up"
          >
            <div className="position-relative h-100">
              <div className="slides-1 portfolio-details-slider swiper">
                <div className="swiper-wrapper align-items-center">
                   {/* <div className="swiper-slide" key={'1-2'}>
                          <img src={about1} alt="askassociates image" />
                        </div>*/}
                  {CarouselList?.length !==0 && CarouselList?.map((item, index) => (
                    <div className="swiper-slide" key={item?.image + index}>
                      <img src={item?.image} alt="Carsoual" />
                    </div>
                  ))}
                </div>
                <div className="swiper-pagination"></div>
              </div>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
          </div>
        </section>
      </div>
    );
  

  return <div></div>;
};

export default Causal;
