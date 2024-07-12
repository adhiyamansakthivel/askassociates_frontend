import React, { useContext} from "react";
import APIEndPoints from "../../utils/APIEndPoints";
import { useAPIGet } from "../../services/APIService";
import { DataContext } from "../../context/DataContext";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Contact = () => {

  const businessDetails = useContext(DataContext);
  const businessDet = businessDetails?.businessContants;
  const whatsappNum = businessDetails?.whatsappUs;
  const apiContactUs = "";
  const phone_one = [businessDet?.phone_1?.slice(0, 5), " - ", businessDet?.phone_1?.slice(5)].join('');
  const phone_two = [businessDet?.phone_2?.slice(0, 5), " - ", businessDet?.phone_2?.slice(5)].join('');
  const whatsappNo = [whatsappNum?.whatsappnumber?.slice(0,5), " - ", whatsappNum?.whatsappnumber?.slice(5)].join('');

 
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Contact</h2>
        </div>

        <div className="row gx-lg-0 gy-4">
          <div className="col-lg-4">
            <div className="info-container d-flex flex-column align-items-center justify-content-center">

              {businessDet?.address?
              <div className="info-item d-flex">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h4>Location:</h4>
                  <p>{businessDet?.address}</p>
                </div>
              </div> : null
              }
              
              {businessDet?.email?
              <div className="info-item d-flex">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h4>Email:</h4>
                  <a style={{color:"white"}} href={`mailto:${businessDet?.email}`}> {businessDet?.email} </a>
                </div>
              </div>
              : null}


              {businessDet?.whatsapp?
              <div className="info-item d-flex">
                <i className="bi bi-whatsapp flex-shrink-0"></i>
                <div>
                  <h4>Whatsapp:</h4>
                  <a href={whatsappNum?.whatsappUrl} style={{color:'white'}}>+91 {whatsappNo}</a>
                </div>
              </div>
              : null}


              <div className="info-item d-flex">
                <i className="bi bi-phone flex-shrink-0"></i>
                <div>
                  <h4>Call:</h4>
                  <a href={`tel:${businessDet?.phone_1}`} style={{color:'white'}}>+91 {phone_one}</a><br/>
                  {businessDet?.phone_2? <a href={`tel:${businessDet?.phone_2}`} style={{color:'white'}}>+91 {phone_two}</a>: null }
                </div>
              </div>

              <div className="info-item d-flex">
                <i className="bi bi-clock flex-shrink-0"></i>
                <div>
                  <h4>Open Hours:</h4>
                  {businessDet?.business_time?.filter((item) => item.status === "open").map((item, i) => 
                    (
                      <Container key={i}>
                        <Row >
                          <Col >{item?.days}</Col>
                          <Col >{item?.open}-{item.close}</Col>
                        </Row>
                      </Container>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8 px-3">

            {businessDet?.location? 
            <div id="map" dangerouslySetInnerHTML={{__html: businessDet?.location}} style={{width: '100%', height:'100%'}}>
                

            </div> : null
            }
            {/* <form
              action="forms/contact.php"
              method="post"
              role="form"
              className="php-email-form"
            >
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows="7"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
