import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
// import ClientImg1 from '../../assets/images/clients/client-1.jpg'
// import ClientImg2 from '../../assets/images/clients/client-2.jpg'
// import ClientImg3 from '../../assets/images/clients/client-3.jpg'
// import ClientImg4 from '../../assets/images/clients/client-4.jpg'
// import ClientImg5 from '../../assets/images/clients/client-5.jpg'
// import ClientImg6 from '../../assets/images/clients/client-6.jpg'
// import ClientImg7 from '../../assets/images/clients/client-7.jpg'
// import ClientImg8 from '../../assets/images/clients/client-8.jpg'


const Clients = ({BrandList}) => {
 

  useEffect(()=>{
     /**
     * Clients Slider
     */
     new Swiper(".clients-slider", {
      speed: 400,
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
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 60,
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 80,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 120,
        },
      },
    });


  },[])
  return (
    <>
      <section id="clients" className="clients">
        <div className="container" data-aos="zoom-out">
          <div className="section-header">
            <h2>Our Clients</h2>
          </div>
          <div className="clients-slider swiper">
            <div className="swiper-wrapper align-items-center">

            {BrandList?.length !==0 &&
              BrandList?.map((item) => {
                return (
                <div className="swiper-slide" key={item?.id}>
                  <img
                    src={item.logo}
                    className="img-fluid"
                    alt={item.name}
                    style={{width:"100%", height:"120px"}}

                  />

                </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;
