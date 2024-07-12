import React, { useEffect } from "react";
import Parser from "html-react-parser";
import { useQueries } from "@tanstack/react-query";
import HelmetComp from "../../baseComponent/helmet/HelmetComp";
import getAPIData from "../../services/APIService";
import { useLocation, useNavigate } from "react-router";
import APIEndPoints from "../../utils/APIEndPoints";
import Loader from "../../components/loader/Loader";
import "./ProductDetails.scss";

const ProductDetails = () => {
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
              APIEndPoints.GetAllOwnProducts.url + location?.state.data?.productUrl
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
            `${APIEndPoints.GetOwnRelatedProducts.url}/${location?.state?.data?.productUrl}/${location?.state?.data?.categoryUrl}`
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

  return (
    <>
      <HelmetComp title={location?.state?.meta_title || 'Product Details'} data={location?.state?.data}/>
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
                            <h2 className="text-uppercase">
                              {apiProductDetails?.data?.data?.title}
                            </h2>
                          </div>
                          <p className="about">
                            {apiProductDetails?.data?.data?.brand?.name && (
                              <div className="d-flex">
                                {" "}
                                <h5>Brand : &nbsp;</h5>{" "}
                                {apiProductDetails?.data?.data?.brand?.name}{" "}
                              </div>
                            )}
                            {apiProductDetails?.data?.data?.category?.name && (
                              <div className="d-flex">
                                {" "}
                                <h5>Category : &nbsp;</h5>{" "}
                                {apiProductDetails?.data?.data?.category?.name}{" "}
                              </div>
                            )}
                             {apiProductDetails?.data?.data?.subcategory?.name && (
                              <div className="d-flex">
                                <h5>SubCategory : &nbsp;</h5>{" "}
                                {apiProductDetails?.data?.data?.subcategory?.name}{" "}
                              </div>
                            )}
                            {/* {apiProductDetails?.data?.data?.price !== null && (
                              <div className="d-flex">
                                <h5>Price: &nbsp;</h5>
                                {apiProductDetails?.data?.data?.price}
                              </div>
                            )}
                            {apiProductDetails?.data?.data?.quantity !== null && (
                              <div className="d-flex">
                                <h5>Quantity: &nbsp;</h5>
                                {apiProductDetails?.data?.data?.quantity}
                              </div>
                            )} */}

                            {apiProductDetails?.data?.quantity && (
                              <div className="d-flex">
                                <h5>Availability Qty: &nbsp;</h5>
                                {apiProductDetails?.data?.data?.quantity}
                              </div>
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr className="hr_Center"/>
                    <div className="product p-4">
                      <div className="mt-2">
                        <h2 className="text-uppercase">Description</h2>
                      </div>
                      <div className="p-2">
                        {apiProductDetails?.data?.data?.description &&
                          Parser(apiProductDetails?.data?.data?.description)}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            {apiProductDetails?.isError && <div>Failed to loaded</div>}
            {apiProductDetails?.isFetching && <Loader />}
          
          </div>
          <section id="product" className="portfolio sections-bg">
            <div className="container" data-aos="fade-up">
            {apiRelatedProductsList?.isSuccess && apiRelatedProductsList?.data?.data?.length !== 0 && ( <div className="section-header-left  products-header">
                <h2>Related Products</h2>
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
                                  key={item?.id}
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
