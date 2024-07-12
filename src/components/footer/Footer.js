import React, { useContext} from "react";
import APIEndPoints from "../../utils/APIEndPoints";
import { useAPIGet } from "../../services/APIService";
import { DataContext } from "../../context/DataContext";


const Footer = () => {

  const businessDetails = useContext(DataContext);
  const businessDet = businessDetails?.businessContants;
  const whatsappNum = businessDetails?.whatsappUs;

  

  const apiheaderProductList = useAPIGet(
    "headerProductList",
    "headerProductList",
    `${APIEndPoints.GetCategory.url}`,
    {
      enabled: !!APIEndPoints?.GetCategory?.url,
      refetchOnWindowFocus: false,
      staleTime: 0,
    }
  );


  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-5 col-md-12 footer-info">
            <a href="/" className="logo d-flex align-items-center">
              <img
                  src={businessDet?.logo}
                  style={{width:'60px', height:'60px'}}          
                  className="cursor"
                />
                <span style={{color:"#CD0000"}}>Ask</span>&nbsp;<label style={{color:"white"}}>Associates</label>
            </a>
           <span> Manufacturer | Wholesaler | Trader | Retailer | Distributor</span><br/><br/>
            
             
              <span>
                <strong>GST: </strong> {businessDet?.gst_number}
              </span>
          
            <div className="social-links d-flex mt-4">
              <a href="/" className="twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="/" className="facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="/" className="instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="/" className="linkedin">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About us</a>
              </li>
              <li>
                <a href="/">Services</a>
              </li>
              <li>
                <a href="/">Terms of service</a>
              </li>
              <li>
                <a href="/">Privacy policy</a>
              </li>
            </ul>
            <br />
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Our Services</h4>
            <ul>
            {!apiheaderProductList?.isError && apiheaderProductList?.isSuccess &&
              apiheaderProductList?.data?.data?.data?.slice(0, 10).map((item) => (
                <li key={item?.id}>
                  <a href={item?.slug_url}>{item?.name}</a>
                </li>
              ))}
            </ul>
              
          </div>

          <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>
              {businessDet?.address}
              <br /><br />
              <strong>Phone:</strong><br/>
              <a href={`tel:${businessDet?.phone_1}`} style={{color:'white'}}>+91 {businessDet?.phone_1}</a><br/>
                  {businessDet?.phone_2? <a href={`tel:${businessDet?.phone_2}`} style={{color:'white'}}>+91 {businessDet?.phone_2}</a>: null }
                  <br />
              <br />
              <strong>Whatsapp:</strong><br/>
              <a href={whatsappNum?.whatsappUrl} style={{color:'white'}}>+91 {whatsappNum?.whatsappnumber}</a>
                 
                  <br />
              <br />
              <strong>Email:</strong> <br/>
              {businessDet?.email?
                <a href={`mailto:${businessDet?.email}`}> {businessDet?.email} </a>
              : null}
              <br />
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="copyright">
          &copy; Copyright 2024
          <strong>
            <span> Ask Associates</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="/">Adhiinc</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
