import React, {useContext, useEffect } from "react";
import Parser from "html-react-parser";
import { useQueries } from "@tanstack/react-query";
import HelmetComp from "../../baseComponent/helmet/HelmetComp";
import getAPIData from "../../services/APIService";
import { useLocation, useNavigate } from "react-router";
import APIEndPoints from "../../utils/APIEndPoints";
import Loader from "../../components/loader/Loader";
import "./ProductDetails.scss";
import { concat } from "lodash";
import { DataContext } from "../../context/DataContext";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import { Helmet } from "react-helmet-async";



const ProductDetails = () => {
  
  
  
  const businessDetails = useContext(DataContext);
  const whatsappNum = businessDetails?.whatsappUs;

  const location = useLocation();
  const navigate = useNavigate();
  const [apiProductDetails, apiRelatedProductsList] = useQueries({
    queries: [
      {
        queryKey: ["productDetails"],
        queryFn: () =>
          getAPIData(
            "get",
            `${
              APIEndPoints.GetAllProducts.url + location?.state.data?.productUrl
            }/`
          )
            .then((res) => res?.data)
            .catch((err) => err),
        refetchOnWindowFocus: false,
        enabled: false,
      },
      {
        queryKey: ["relatedProductsList"],
        queryFn: () =>
          getAPIData(
            "get",
            `${APIEndPoints.GetRelatedProducts.url}/${location?.state?.data?.productUrl}/${location?.state?.data?.categoryUrl}`
          )
            .then((res) => res?.data)
            .catch((err) => err),
        refetchOnWindowFocus: false,
        enabled: false,
      },
    ],
  });

  const change_image = (imageURL) => {
    let container = document.getElementById("main-image");
    container.src = imageURL;
  };

  const navLinkClickHandler = (productDetails) => {
    if (productDetails?.slug_url) {
      navigate(`/product/${productDetails?.slug_url}`, {
        state: {
          data: {
            categoryUrl: location?.state?.data?.categoryUrl,
            productUrl: productDetails.slug_url,
          },
        },
      });
    }
  };

  useEffect(() => {
    if (location?.state?.data?.productUrl && location?.state?.data?.categoryUrl) {
      apiProductDetails.refetch();
      apiRelatedProductsList.refetch();
    }
  }, [location?.state?.data]);


  const metaDescription = {
    'description': apiProductDetails?.data?.data?.description,
    'keywords': apiProductDetails?.data?.data?.title + ", " +apiProductDetails?.data?.data?.brand?.name + ", "+ apiProductDetails?.data?.data?.category?.name +", "+apiProductDetails?.data?.data?.subcategory?.name +", " +apiProductDetails?.data?.data?.tags,
    'imageUrl': apiProductDetails?.data?.data?.images?.[0]?.productImage
  }

  return (
    <>
      {/* <Helmet>
        <title>Learning React Helmet!</title>
        <meta name='description' content='Beginner friendly page for learning React Helmet.' />

      </Helmet> */}
      <HelmetComp title={apiProductDetails?.data?.data?.title} data={metaDescription}/>
      <section id="productDetails" className="sections-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-header productDetails-header">
            <h2>{location?.state?.data?.name && (location?.state?.data?.name + ' Detail') || 'Product Details'}</h2>
          </div>

          <div className="row d-flex justify-content-center">
            {!apiProductDetails?.isError &&
              apiProductDetails?.isSuccess &&
              //apiProductDetails?.data?.status ===200 &&
              apiProductDetails?.data?.data && (
                <div className="col-md-12">
                  <div className="card">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="images p-3">
                          <div className="text-center p-4">
                            <img
                              id="main-image"
                              src={apiProductDetails?.data?.data?.images?.[0]?.productImage}
                              width="250"
                            />
                          </div>

                          <div className="thumbnail text-center">
                            <img
                              onClick={() =>
                                change_image(apiProductDetails?.data?.data?.images?.[0]?.productImage)
                              }
                              src={apiProductDetails?.data?.data?.image}
                              width="70"
                              className="cursor"
                            />
                            &nbsp;
                            {apiProductDetails?.data?.data?.images?.map(
                              (item) => (
                                <>
                                  {" "}
                                  <img
                                    onClick={() =>
                                      change_image(item?.productImage)
                                    }
                                    src={item?.productImage}
                                    width="70"
                                    className="cursor"
                                  />{" "}
                                  &nbsp;
                                </>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="product p-4">
                          <div className="mt-4 mb-3">
                            <h1 style={{fontSize:'150%'}} className="text-uppercase">
                              {apiProductDetails?.data?.data?.title}
                            </h1>
                            <hr/>
                          </div>

                      
                          <Container>
                        
                            {apiProductDetails?.data?.data?.price && (
                              <Row xs="auto">
                                <Col><h6>Price: </h6></Col>
                                <Col><span style={{fontSize:'larage'}}>₹{apiProductDetails?.data?.data?.price}</span>{apiProductDetails?.data?.data?.per != null ? <span style={{fontSize:'small'}}> /{apiProductDetails?.data?.data?.per} </span> : null }</Col>
                              </Row>
                            )}

                            {apiProductDetails?.data?.data?.availablity && (
                              <Row xs="auto">
                                <Col><h6>Availablity: </h6></Col>
                                <Col><span style={{fontSize:'larage'}}>{apiProductDetails?.data?.data?.availablity}</span></Col>
                              </Row>
                            )}


                            {apiProductDetails?.data?.data?.brand?.name && (
                              <Row xs="auto">
                                <Col><h6>Brand:</h6></Col>
                                <Col>{apiProductDetails?.data?.data?.brand?.name}</Col>
                              </Row>
                            )}

                            {apiProductDetails?.data?.data?.category?.name && (
                              <Row xs="auto">
                                <Col><h6>Category:</h6></Col>
                                <Col>{apiProductDetails?.data?.data?.category?.name}</Col>
                              </Row>
                            )}

                            {apiProductDetails?.data?.data?.subcategory?.name && (
                              <Row xs="auto">
                                  <Col><h6>Sub Category:</h6></Col>
                                  <Col>{apiProductDetails?.data?.data?.subcategory?.name}</Col>
                              </Row>
                            )}
                          </Container>
                         

                          
                          
                        </div>
                       
                      </div>
                      
                    </div>
                    <Button className="rounded-0" style={{backgroundColor:"#075e54"}}  href={whatsappNum?.whatsappUrl +"I’m interested in the *" + apiProductDetails?.data?.data?.title + "* %0aCould you please provide more details?"} variant="success" size="lg" 
                          >
                            <i className="bi bi-whatsapp"></i> Whatsapp Inquiry
                          </Button>
                    
                    <hr className="hr_Center"/>
                    <div className="product p-4">
                      <div className="mt-2">
                        <h3 className="text-uppercase">Description</h3>
                        <hr/>
                      </div>
                      <div className="p-2">
                        {apiProductDetails?.data?.data?.description &&
                          Parser(apiProductDetails?.data?.data?.description)}
                      </div>
                    </div>
                  </div>
                  <Card>
                    <Card.Header>Tags</Card.Header>
                    <Card.Body>
                      <Card.Text>
                      { apiProductDetails?.data?.data?.tags &&
                           apiProductDetails?.data?.data?.tags?.map((item, i) => (
                            <Button key={i} variant="outline-secondary" size="sm" style={{marginRight: "5px", marginBottom: "5px"}}>{item}</Button>
                          ))        
                      }
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  
                </div>
              )}


            {apiProductDetails?.isError && <div>Failed to loaded</div>}
            {apiProductDetails?.isFetching && <Loader />}

           
          
          </div>
         
          <section id="product" className="portfolio sections-bg">
            <div className="container" data-aos="fade-up">
            {apiRelatedProductsList?.isSuccess && apiRelatedProductsList?.data?.data?.length !== 0 && ( 
              <div className="section-header-left  products-header">
                <h4>Related Products</h4>
              </div>
             
              )}
              {!apiRelatedProductsList?.isError &&
                apiRelatedProductsList?.isSuccess  && (
                  <div className="col-lg-12 blog">
                    <div
                      className="portfolio-isotope"
                      data-portfolio-filter="*"
                      data-portfolio-layout="masonry"
                      data-portfolio-sort="original-order"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <div className="row portfolio-container">
                        {apiRelatedProductsList?.data?.data?.length !== 0 
                          ? apiRelatedProductsList.data?.data?.map((item,index) => {
                            if(index<4){
                              return (
                                <div
                                  className="col-lg-3 col-md-6 mt-3 portfolio-item filter-batteries"
                                  key={item?.id + index}
                                >
                                  <div className="portfolio-wrap bg-white">
                                    <a
                                      // href={
                                      //   item?.image ||
                                      //   "https://source.unsplash.com/pWkk7iiCoDM/800x600"
                                      // }
                                      onClick={() => navLinkClickHandler(item)}
                                      data-gallery="portfolio-gallery-app"
                                      className="glightbox cursor"
                                    >
                                      <img
                                        src={
                                          item.images? item.images?.[0]?.productImage :
                                          "https://source.unsplash.com/pWkk7iiCoDM/400x300"
                                        }
                                        className="img-fluid"
                                        alt=""
                                      />
                                    </a>
                                    <div className="portfolio-info">
                                      <h4>
                                        <a
                                          onClick={() =>
                                            navLinkClickHandler(item)
                                          }
                                          title="More Details"
                                          className="cursor"
                                        >
                                          {item?.title}
                                        </a>
                                      </h4>
                                      {/* {item?.price !== null && (
                                        <p>
                                          <strong>Price:</strong> {item?.price}
                                        </p>
                                      )}
                                      {item?.quantity !== null && (
                                        <p>
                                          <strong>Quantity:</strong>{" "}
                                          {item?.quantity}
                                        </p>
                                      )} */}
                                        {item?.brand?.name && (
                                        <p>
                                          <strong>Brand :</strong>{" "}
                                          {item?.brand?.name}
                                        </p>
                                      )}
                                      {item?.category?.name && (
                                        <p>
                                          <strong>Category :</strong>{" "}
                                          {item?.category?.name}
                                        </p>
                                      )}
                                      {item?.subcategory?.name && (
                                        <p>
                                          <strong>Sub Category :</strong>{" "}
                                          {item?.subcategory?.name}
                                        </p>
                                      )}
                                    </div>
                                    
                                    <div className="portfolio-footer">
                                      <a
                                        href="javascript:void(0)"
                                        //href={`/productDetail?${item?.product_url}`}
                                        onClick={() =>
                                          navLinkClickHandler(item)
                                        }
                                        className="readmore stretched-link cursor"
                                        style={{color:'red', fontWeight:'bold'}}
                                      >
                                        View More{" "}
                                        <i className="bi bi-arrow-right"></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              );
                              }
                            })
                          : null}
                      </div>
                    </div>
                  </div>
                )}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
