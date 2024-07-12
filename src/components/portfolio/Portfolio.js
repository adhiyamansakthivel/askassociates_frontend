import React, { useContext} from "react";
import Isotope from "isotope-layout";
import { useNavigate } from "react-router-dom";

import Loader from "../loader/Loader";
import { homeProfolioFilterMenu } from "../../utils/utils";
import "./Portfolio.scss";
import { DataContext } from "../../context/DataContext";


const Portfolio = ({ DataList }) => {

  const businessDetails = useContext(DataContext);
  const whatsappNum = businessDetails?.whatsappUs;

  const [filterKey, setFilterKey] = React.useState("*");
  const [profolioFilterMenu, setProfolioFilterMenu] = React.useState(
    homeProfolioFilterMenu
  );
  const isotope = React.useRef();
  const navigate = useNavigate();
  // initialize an Isotope object with configs
  React.useEffect(() => {
    if (DataList?.isSuccess) {
      let tempProfolioFilterMenu;
      if (DataList?.data?.data?.length !== 0) {
        tempProfolioFilterMenu = DataList?.data?.data?.map((item) => {
          return {
            id: item?.id,
            name: item?.name,
            title: item?.name,
            dataFilter: "filter-" + item?.slug_url,
          };
        });

        setProfolioFilterMenu([...homeProfolioFilterMenu, ...tempProfolioFilterMenu]);
      }

      isotope.current = new Isotope(".filter-container", {
        itemSelector: ".filter-item",
        layoutMode: "fitRows",
      });
      // cleanup
      return () => isotope.current.destroy();
    }
  }, [DataList?.isSuccess]);

  React.useEffect(() => {
    if (DataList?.isSuccess) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);




  const cardLinkClickHandler = (urlKey, item_key) => {
    navigate(`/${urlKey}/${item_key?.slug_url}`, {
      state: {
        data: {
          categoryUrl: item_key.category.slug_url,
          productUrl: item_key.slug_url
        }
      }
    });
  };

  return (
    <section id="portfolio" className="portfolio sections-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Our Products</h2>

        </div>

        <div className="portfolio-isotope">
          <div>
            <ul className="portfolio-flters">
              {
                //profolioFilterMenu.length > 1 &&
                profolioFilterMenu?.map((item, index) => (
                  <li
                    key={item?.id}
                    className={
                      filterKey === item.dataFilter ? "filter-active" : ""
                    }
                    onClick={handleFilterKeyChange(item.dataFilter)}
                  >
                    {item.title}
                  </li>
                ))}
            </ul>
          </div>

          <div className="row gy-4 portfolio-container filter-container">
            {DataList?.isLoading && <Loader />}
            {DataList?.error && "Fetching Failed..!"}

            {!DataList?.isError &&
              DataList?.isSuccess &&
              DataList?.data?.data?.length !== 0 &&
              DataList?.data?.data?.length !== 0
              ?
              DataList?.data?.data?.map((item) => {

                if (item?.products?.length !== 0) {
                  return item?.products?.slice(0, 4).map((item2) => {
                    return (
                      <div
                        className={"col-xl-3 col-md-6 filter-item filter-" + item?.slug_url}
                        key={item2?.id}
                      >
                        <div className="portfolio-wrap">
                          <a
                            onClick={() =>
                              cardLinkClickHandler(
                                "product",
                                item2
                              )
                            }
                            data-gallery="portfolio-gallery-app"
                            className="glightbox"
                          >
                            <img
                              src={
                                item2?.images[0].productImage ||
                                "https://source.unsplash.com/pWkk7iiCoDM/400x300"
                              }
                              className="img-fluid"
                              alt="products"
                            />
                          </a>
                          <div className="portfolio-info">
                            <h4>
                              <a
                                onClick={() =>
                                  cardLinkClickHandler(
                                    "product",
                                    item2
                                  )
                                }
                                title="More Details"
                              >
                                {item2?.title}
                              </a>
                            </h4>
                            {item2?.brand?.name && (
                              <p><strong>Brand :</strong> {item2?.brand?.name}</p>
                            )}
                            {item2?.category?.name && (
                              <p><strong>Category :</strong> {item?.name}</p>
                            )}
                            {item2?.subcategory?.name && (
                              <p><strong>SubCategory:</strong> {item2?.subcategory?.name}</p>
                            )}
                          </div>
                          {whatsappNum?.whatsappnumber &&
                          <div className="portfolio-footer" style={{backgroundColor:"#075e54"}}>
                            <a                              
                              href={whatsappNum?.whatsappUrl +"I’m interested in the *" + item2?.title + "* %0aCould you please provide more details?"}
                              className="readmore stretched-link cursor"
                              style={{color:'white'}}
                            >
                             <i className="bi bi-whatsapp"></i> Whatsapp Inquiry 
                            </a>
                          </div>
                          }

                          <div className="portfolio-footer" >
                            <a
                              onClick={() =>
                                cardLinkClickHandler(
                                  "product",
                                  item2
                                )
                              }

                              className="readmore stretched-link cursor"
                              style={{color:'red', fontWeight:'bold'}}
                            >
                             View More <i className="bi bi-arrow-right"></i>
                            </a>
                           
                          </div>
                        </div>
                      </div>
                    );
                  })
                }
              })
              : null}
          </div>
          <div className="col-xl-12 col-md-12 mt-3">
            <div className="portfolio-wrap filter-container">
              <div className="portfolio-footer filter-item">
                <a href="javascript:void(0)"  
                className="readmore stretched-link" style={{color:'red', fontWeight:'bold'}}> 
                  View All<i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
