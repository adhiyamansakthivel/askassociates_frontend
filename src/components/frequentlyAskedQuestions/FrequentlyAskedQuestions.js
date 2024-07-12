import React from "react";

const FrequentlyAskedQuestions = () => {
  return (
    <section id="faq" className="faq">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="content px-xl-5">
              <h3>
                Frequently Asked <strong>Questions</strong>
              </h3>
              
            </div>
          </div>

          <div className="col-lg-8">
            <div
              className="accordion accordion-flush"
              id="faqlist"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="accordion-item">
                <h3 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-content-1"
                  >
                    <span className="num">1.</span>
                    What is Home Automation?
                  </button>
                </h3>
                <div
                  id="faq-content-1"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqlist"
                >
                  <div className="accordion-body">
                  Home automation or domotics is the process of automating the control of various home appliances and systems, such as lighting, heating, ventilation, air conditioning, and security systems 1234. 
                  It involves the use of a network of hardware, communication interfaces, and electronics that allow for seamless integration among various everyday devices through the internet 3. This enables users to control their home appliances remotely via a smartphone or tablet, irrespective of their location 
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h3 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-content-2"
                  >
                    <span className="num">2.</span>
                    What is the purpose of solar panels and why should choose?
                  </button>
                </h3>
                <div
                  id="faq-content-2"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqlist"
                >
                  <div className="accordion-body">
                  The primary purpose of solar panels is to convert sunlight into electricity, which can be used to power various devices or be stored in batteries 1234. 
                  Solar panels are a clean and renewable source of energy that can help reduce our dependence on nonrenewable fossil fuels and lessen the damage that energy use does to the environment
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h3 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-content-3"
                  >
                    <span className="num">3.</span>
                    Is Automatic water level controller helps to save water?
                  </button>
                </h3>
                <div
                  id="faq-content-3"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqlist"
                >
                  <div className="accordion-body">
                  Yes, an automatic water level controller can help save water by preventing the overflow of water from the storage tank 1234. 
                  It automatically switches off the pump when the water level rises above a certain level and switches it on when the water level falls below a certain level 1234. This helps to prevent the wastage of water and ensures that the water is used efficiently.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h3 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-content-4"
                  >
                    <span className="num">4.</span>
                    What type of batteries are safe to use in EV vehicles?
                  </button>
                </h3>
                <div
                  id="faq-content-4"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqlist"
                >
                  <div className="accordion-body">
                  There are several types of batteries used in electric vehicles, including lithium-ion, nickel-metal hydride, lead-acid, and ultracapacitors 123. Lithium-ion batteries are the most efficient and preferred type of battery for EVs 14. They are designed for high power-to-weight ratio energy density and can be discharged and recharged daily and at any state of charge 14. 
                  Other types of rechargeable batteries used in electric vehicles include lead–acid, nickel–cadmium, nickel–metal hydride, and other.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h3 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-content-5"
                  >
                    <span className="num">5.</span>
                    Which is best of option for Automotive Batteries?
                  </button>
                </h3>
                <div
                  id="faq-content-5"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqlist"
                >
                  <div className="accordion-body">
                    There are several types of automotive batteries available in the market, each with its own advantages and disadvantages:
                    DieHard Platinum AGM: This battery is environmentally friendly and has great specs and reputation.
                    Antigravity Lithium Batteries: This battery is high-tech and lightweight, but expensive.
                    Odyssey Extreme: This battery is best for hot weather.
                    Optima Red Top: This battery is best for cold weather.
                    EverStart: This battery is the best budget option.
                    It’s important to note that the best battery for your car depends on your specific needs and the type of vehicle you have. It’s recommended to consult with a professional mechanic or refer to your car’s manual to determine the best battery for your car.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
