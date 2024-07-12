import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import HelmetComp from "../../baseComponent/helmet/HelmetComp";

import { useAPIGet } from "../../services/APIService";
import APIEndPoints from "../../utils/APIEndPoints";
import Loader from "../../components/loader/Loader";
import { useNavigate } from "react-router";

import "./Brand.scss";

const Brand = () => {
  const itemsPerPage = 3;
  const navigate = useNavigate();
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;

  const apiBrandList = useAPIGet(
    "allBrands",
    "allBrands",
    `${APIEndPoints.GetAllBrands.url}`,
    {
      enabled: !!APIEndPoints?.GetAllBrands?.url,
      refetchOnWindowFocus: false,
      staleTime: 0,
    }
  );
  const currentItems = apiBrandList?.isSuccess && apiBrandList?.data?.data?.data?.length !== 0 ? apiBrandList?.data?.data?.data
  //?.slice(itemOffset, endOffset)
  :[];

  const pageCount =
    apiBrandList.isSuccess && apiBrandList?.data?.data?.data?.length !== 0
      ? Math.ceil(apiBrandList?.data?.data?.data?.length /itemsPerPage )
      : 1;


  const navLinkClickHandler = (slug_url) => {
    navigate(`/brand/${slug_url}`, { state: { data: slug_url } });
  };

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % apiBrandList?.data?.data?.data?.length;
    setItemOffset(newOffset);
  };

  return (
    <>
     <HelmetComp title={'Brand List'} />
      <section id="brand" className="portfolio sections-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-header brand-header">
            <h2>Brand List</h2>
          </div>

          <div className="sidebar-item search-form mb-5">
            {/* <h3 className="sidebar-title">Search</h3> */}
            <form action="" className="mt-3">
              <input type="text" placeholder="Search Brand" />
              <button type="submit">
                <i className="bi bi-search"></i>
              </button>
            </form>
          </div>

          <div className="row g-5">
            <div className="col-lg-12">
              <div className="sidebar bg-white">
                <div className="sidebar-item categories">
                  <div className="mt-3 d-flex" style={{gap:'1rem'}}>
                    <>
                      {apiBrandList.isSuccess &&
                      !apiBrandList.isError &&
                      apiBrandList?.data?.data?.data?.length !== 0
                        ? apiBrandList?.data?.data?.data?.map((item, index) => (
                            <div className={` m-2 cursor`} key={item?.name + index}>
                              <img
                              src={item?.logo}
                              width={"100%"}
                              height={'60'}
                              style={{paddingRight: '0.5rem'}}
                              className="cursor"/>
                              <a
                                // onClick={() =>
                                //   sidBarBrandClickHandler(item?.products,item?.name)
                                // }
                               // className={ activeBrand ===item.name?'activeCls':''}
                              >
                                <br/>
                                {item.name}{" "}<br/>
                                <span>products({item?.products_count || 0})</span>
                              </a>
                            </div>
                          ))
                        : null}
                    </>
                  </div>
                  
                </div>


                {/* <div className="sidebar-item tags">
                  <h3 className="sidebar-title">Tags</h3>
                  <ul className="mt-3">
                    <li>
                      <a href="javascript:void(0)">App</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">IT</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Business</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Mac</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Design</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Office</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Creative</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Studio</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Smart</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Tips</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Marketing</a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>

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
                  {!apiBrandList?.isError &&
                    apiBrandList?.isSuccess &&
                    apiBrandList?.data?.data?.data?.length &&
                    currentItems?.map((item) => {
                      return (
                        <div
                          className="col-xl-4 col-md-4 portfolio-item filter-batteries"
                          key={item?.id}
                        >
                          <div className="portfolio-wrap bg-white">
                            <a
                              href={
                                item?.logo ||
                                "https://source.unsplash.com/pWkk7iiCoDM/800x600"
                              }
                              data-gallery="portfolio-gallery-app"
                              className="glightbox"
                            >
                              <img
                                src={
                                  item?.logo ||
                                  "https://source.unsplash.com/pWkk7iiCoDM/400x300"
                                }
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                            <div className="portfolio-info">
                              <h4>
                                <a
                                  href="portfolio-details.html"
                                  title="More Details"
                                >
                                  {item?.name}
                                </a>
                              </h4>
                              {/* <p>Price: {item?.price}</p>
                              <p>Quantity: {item?.quantity}</p> */}
                            </div>
                            <div className="portfolio-footer">
                              <a
                                onClick={() =>
                                  navLinkClickHandler(item?.slug_url)
                                }
                                className="readmore stretched-link cursor"
                              >
                                View More <i className="bi bi-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>

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
            </div>
          </div>
        </div>
      </section>

      {apiBrandList?.isError && <div>Failed to loaded</div>}
      {apiBrandList?.isFetching && <Loader />}
    </>
  );
};

export default Brand;
