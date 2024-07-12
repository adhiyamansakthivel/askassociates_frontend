import React, { useEffect, useState } from "react";
import HelmetComp from "../../baseComponent/helmet/HelmetComp";
import ReactPaginate from "react-paginate";
import { useQueries } from "@tanstack/react-query";
import { toast } from "react-toastify";
import _ from "lodash";

import APIEndPoints from "../../utils/APIEndPoints";
import Loader from "../../components/loader/Loader";
import { useLocation, useNavigate } from "react-router";
import getAPIData, { useAPIGet } from "../../services/APIService";

import "./Products.scss";
import { data } from "isotope-layout";

const Products = () => {
  const itemsPerPage = 15;
  const navigate = useNavigate();
  const location = useLocation();
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const [viewList, setViewList] = useState([]);
  const [activeBrand, setActiveBrand] = useState(null);
  const [searchInputData, setSearchInputData] = useState(null);

  const apiProductList = useAPIGet(
    "productsList",
    "productsList",
    `${location?.state?.data?.itemURL === "all" ? APIEndPoints.GetAllProducts.url : APIEndPoints.GetProductList_Category?.url + location?.state?.data?.itemURL
    }`,
    {
      // enabled: !!location?.state?.data,
      refetchOnWindowFocus: false,
      enabled: false,
      onSuccess: (res) => {
        if (location?.state?.data?.itemURL === "all") {
          if (res.status == 200) {
            if (res.data?.data?.length !== 0) {
              setViewList(res?.data?.data);
            }
          } else {
            setViewList([]);
          }
        } else {
          if (res.status == 200) {
            if (res?.data?.data?.[0]?.products?.length !== 0) {
              setViewList(res.data?.data?.[0]?.products);
            }
          }
          else {
            setViewList([]);
          }
        }
      },
      //staleTime: 0,
    }
  );

  const [apiBrandList] = useQueries({
    queries: [
      {
        queryKey: ["brandsList"],
        queryFn: () =>
          getAPIData("get", APIEndPoints.GetAllBrands_Products.url)
            .then((res) => res?.data?.data)
            .catch((err) => err),
      },
    ],
  });

  const currentItems =
    apiProductList.isSuccess && viewList?.length !== 0
      ? viewList?.slice(itemOffset, endOffset)
      : [];

  const pageCount =
    apiProductList.isSuccess && apiProductList?.data?.data?.length !== 0
      ? Math.ceil(viewList?.length / itemsPerPage)
      : 1;

  const navLinkClickHandler = (productDetails) => {
    if (productDetails?.slug_url) {
      navigate(`/product/${productDetails?.slug_url}`, {
        state: {
          data: {
            categoryUrl: location.state.data.slug_url,
            productUrl: productDetails.slug_url,
          },
        },
      });
    }
  };

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % viewList?.length;
    setItemOffset(newOffset);
  };

  const sidBarBrandClickHandler = (brandProductList, brandName) => {
    setActiveBrand(brandName)
    if (brandProductList?.length !== 0) {
      setViewList(brandProductList);
    }
    else {
      setViewList([])
    }
  };

  const onSearchHandler = () => {
    if (
      searchInputData?.length >= 1 &&
      apiProductList?.data?.data?.length !== 0
    ) {
      const filteredData = _.filter(
        apiProductList?.data?.data?.data,
        function (o) {
          return o.title.toLowerCase().includes(searchInputData.toLowerCase());
        }
      );
      if (filteredData.length !== 0) {
        setViewList(filteredData);
      } else {
        toast("Product not found..!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

  useEffect(() => {
    if (location?.state?.data?.itemURL) {
      apiProductList.refetch();
    }
  }, [location?.state?.data]);

  return (
    <>
      <HelmetComp title={location?.state?.meta_title || 'Product List'} data={location?.state?.data} />
      <section id="product" className="portfolio sections-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-header products-header">
            <h2>{location?.state?.data?.name} List</h2>
          </div>

          <div className="sidebar-item search-form mb-5">
            <input
              type="text"
              placeholder="Search Product"
              onChange={(event) => setSearchInputData(event.target.value)}
            />
            <button onClick={() => onSearchHandler()}>
              <i className="bi bi-search"></i>
            </button>
          </div>

          <div className="row g-5">
            <div className="col-lg-4">
              <div className="sidebar bg-white">
                <div className="sidebar-item categories">
                  <h3 className="sidebar-title">Brand</h3>
                  <ul className="mt-3">
                    <>
                      {apiBrandList.isSuccess &&
                        !apiBrandList.isError &&
                        apiBrandList?.data?.length !== 0
                        ? apiBrandList?.data?.map((item, index) => (
                          <li className={`cursor`} key={item?.name + index}>
                            <a
                              onClick={() =>
                                sidBarBrandClickHandler(item?.products, item?.name)
                              }
                              className={activeBrand === item.name ? 'activeCls' : ''}
                            >
                              {item.name}{" "}
                              <span>({item?.products?.length || 0})</span>
                            </a>
                          </li>
                        ))
                        : null}
                    </>
                  </ul>
                </div>
              </div>
            </div>

            {!apiProductList?.isError && apiProductList?.isSuccess && (
              <div className="col-lg-8 blog">
                <div
                  className="portfolio-isotope"
                  data-portfolio-filter="*"
                  data-portfolio-layout="masonry"
                  data-portfolio-sort="original-order"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="row gy-4 portfolio-container">
                    {viewList?.length !== 0
                      ? currentItems?.map((item, index) => {
                        return (
                          <div
                            className="col-xl-4 col-md-6 portfolio-item filter-batteries"
                            key={item?.title + index}
                          >
                            <div className="portfolio-wrap bg-white">
                              <a
                                onClick={() => navLinkClickHandler(item)}
                                data-gallery="portfolio-gallery-app"
                                className="glightbox cursor"
                              >
                                <img
                                  src={
                                    item?.images?.[0]?.productImage ||
                                    "https://source.unsplash.com/pWkk7iiCoDM/400x300"
                                  }
                                  className="img-fluid"
                                  alt=""
                                />
                              </a>
                              <div className="portfolio-info">
                                <h4>
                                  <a
                                    onClick={() => navLinkClickHandler(item)}
                                    title="More Details"
                                    className="cursor"
                                  >
                                    {item?.title}
                                  </a>
                                </h4>
                                {item?.brand?.name && <p><strong>Brand :</strong> {item?.brand?.name}</p>}
                                {item?.category?.name && <p><strong>Category :</strong> {item?.category?.name}</p>}
                                {item?.subcategory
                                  ?.name && <p><strong>Sub Category :</strong> {item?.subcategory
                                    ?.name}</p>}
                              </div>
                              <div className="portfolio-footer">
                                <a
                                  onClick={() => navLinkClickHandler(item)}
                                  className="readmore stretched-link cursor"
                                >
                                  View More{" "}
                                  <i className="bi bi-arrow-right"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        );
                      })
                      : null}
                  </div>
                </div>

                {viewList?.length !== 0 ? (
                  <div className="blog-pagination">
                    <ul className="justify-content-center">
                      <ReactPaginate
                        breakLabel="..."
                        nextLabel=">"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="<"
                        renderOnZeroPageCount={null}
                        activeClassName="active"
                      />
                    </ul>
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </div>
      </section>
      {apiProductList?.isError && <div>Failed to loaded</div>}
      {apiProductList?.isFetching && <Loader />}
    </>
  );
};

export default Products;
