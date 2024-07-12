import React from "react";
import Parser from "html-react-parser";
import HelmetComp from "../../baseComponent/helmet/HelmetComp";
import { useAPIGet } from "../../services/APIService";
import { useLocation } from "react-router";
import APIEndPoints from "../../utils/APIEndPoints";
import Loader from "../../components/loader/Loader";
import "./BrandDetails.scss";

const BrandDetails = () => {
  const location = useLocation();

  const apiBrandDetails = useAPIGet(
    "brandDetails",
    "brandDetails",
    `${APIEndPoints.GetAllBrands.url + location?.state.data}/`,
    {
      enabled: !!location?.state.data,
      refetchOnWindowFocus: false,
      staleTime: 0,
    }
  );

  const change_image = (imageURL) => {
    let container = document.getElementById("main-image");
    container.src = imageURL;
  };

  return (
    <>
      <HelmetComp title={'Brand Details'} />
      <section id="brandDetails" className="sections-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-header brandDetails-header">
            <h2>Brand Details</h2>
          </div>

          <div className="row d-flex justify-content-center">
            {!apiBrandDetails?.isError &&
              apiBrandDetails?.isSuccess &&(
                <div className="col-md-12">
                  <div className="card">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="images p-3">
                          <div className="text-center p-4">
                            <img
                              id="main-image"
                              src={apiBrandDetails?.data?.logo}
                              width="250"
                            />
                          </div>

                          <div className="thumbnail text-center">
                            <img
                              onClick={() =>
                                change_image(apiBrandDetails?.data?.logo)
                              }
                              src={apiBrandDetails?.data?.logo}
                              width="70"
                              className="cursor"
                            />
                            &nbsp;
                            {apiBrandDetails?.data?.productImages?.map(
                              (item) => (
                                <>
                                  {" "}
                                  <img
                                    onClick={() =>
                                      change_image(item?.product_Image)
                                    }
                                    src={item?.product_Image}
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
                              {apiBrandDetails?.data?.name}
                            </h2>
                          </div>
                          {/* <p className="about">
                            <div className="d-flex">
                              <h5>Price: &nbsp;</h5>
                              {apiBrandDetails?.data?.price}
                            </div>
                            <div className="d-flex">
                              <h5>Quantity: &nbsp;</h5>
                              {apiBrandDetails?.data?.quantity}
                            </div>
                            <div className="d-flex">
                              <h5>Availability Qty: &nbsp;</h5>
                              {apiBrandDetails?.data?.quantity}
                            </div>
                          </p> */}
                        </div>
                      </div>
                    </div>
                    <div className="product p-4">
                      <div className="mt-2">
                        <h2 className="text-uppercase">Description</h2>
                      </div>
                      <div className="p-2">
                        {apiBrandDetails?.data?.description &&
                          Parser(apiBrandDetails?.data?.description)}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            {apiBrandDetails?.isError && <div>Failed to loaded</div>}
            {apiBrandDetails?.isFetching && <Loader />}
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandDetails;
