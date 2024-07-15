import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { navbarList } from "../../utils/utils";
import APIEndPoints from "../../utils/APIEndPoints";
import { useAPIGet } from "../../services/APIService";
import { DataContext } from "../../context/DataContext";
import "./Header.scss";

const mobileNavToogleLink = (event) => {
  event.preventDefault();

  const mobileNavShow = document.querySelector(".mobile-nav-show");
  const mobileNavHide = document.querySelector(".mobile-nav-hide");

  document.querySelector("body").classList.toggle("mobile-nav-active");
  mobileNavShow.classList.toggle("d-none");
  mobileNavHide.classList.toggle("d-none");
};

const mobileNavToogle = () => {
  const mobileNavShow = document.querySelector(".mobile-nav-show");
  const mobileNavHide = document.querySelector(".mobile-nav-hide");

  document.querySelector("body").classList.toggle("mobile-nav-active");
  mobileNavShow.classList.toggle("d-none");
  mobileNavHide.classList.toggle("d-none");
};

const navDropdowns = (event) => {
  if (document.querySelector(".mobile-nav-active")) {
    event.preventDefault();
    event.currentTarget.classList.toggle("active");
    event.currentTarget.nextElementSibling.classList.toggle("dropdown-active");

    let dropDownIndicator = event.currentTarget.querySelector(
      ".dropdown-indicator"
    );
    dropDownIndicator.classList.toggle("bi-chevron-up");
    dropDownIndicator.classList.toggle("bi-chevron-down");
  }
};

const Header = () => {
  const [headerList, setHeaderList] = useState(navbarList);
  const businessDetails = useContext(DataContext);
  const businessDet = businessDetails?.businessContants;

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


 

  useEffect(() => {


    if (apiheaderProductList.isSuccess) {
      const ourProductHeaderList = apiheaderProductList?.data?.data?.data?.map((subitem) => {
        return {
          ...subitem,
          title: subitem?.name,
          navLink: "/category",
          itemURL: subitem?.slug_url,
          isParentLink: false,
        };
      });

      

      const newHeaderList = navbarList?.map((item) => {

        if (item?.id === 2 || item?.id === 3) {
          return {
            ...item, subLink: [...item?.id === 2 ? ourProductHeaderList : '', {
              id: 19,
              title: "All Products",
              navLink: item?.id === 3 ? "/manufacture" : "/category",
              itemURL: "all",
              name: 'All Product',
              isParentLink: false,
            }]
          };
        } else {
          return { ...item };
        }
      });
      setHeaderList(newHeaderList);
    }
  }, [apiheaderProductList.isSuccess])

  useEffect(() => {
    /**
     * Sticky Header on Scroll
     */
    const selectHeader = document.querySelector("#header");
    if (selectHeader) {
      let headerOffset = selectHeader.offsetTop;
      let nextElement = selectHeader.nextElementSibling;

      const headerFixed = () => {
        if (headerOffset - window.scrollY <= 0) {
          selectHeader.classList.add("sticked");
          if (nextElement) nextElement.classList.add("sticked-header-offset");
        } else {
          selectHeader.classList.remove("sticked");
          if (nextElement)
            nextElement.classList.remove("sticked-header-offset");
        }
      };
      headerFixed();
      document.addEventListener("scroll", headerFixed);
    }

    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = document.querySelectorAll("#navbar a");

    function navbarlinksActive() {
      navbarlinks.forEach((navbarlink) => {
        if (!navbarlink.hash) return;

        let section = document.querySelector(navbarlink.hash);
        if (!section) return;

        let position = window.scrollY + 200;

        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          navbarlink.classList.add("active");
        } else {
          navbarlink.classList.remove("active");
        }
      });
    }
    navbarlinksActive();
    document.addEventListener("scroll", navbarlinksActive);

    /**
     * Scroll top button
     */
    const scrollTop = document.querySelector(".scroll-top");
    if (scrollTop) {
      const togglescrollTop = function () {
        window.scrollY > 100
          ? scrollTop.classList.add("active")
          : scrollTop.classList.remove("active");
      };
      togglescrollTop();
      document.addEventListener("scroll", togglescrollTop);
      scrollTop.addEventListener(
        "click",
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      );
    }
  }, []);

  const navbarlinkClickHandler = () => {
    if (document.querySelector(".mobile-nav-active")) {
      mobileNavToogle();
    }
  };
  

  return (
    <>
     
      <section id="topbar" className="topbar d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            {/* <i className="bi bi-envelope d-flex align-items-center">
              <a className="headerMail" href={`mailto:${businessDet?.email}`}>
               {businessDet?.email}
              </a>
            </i> */}
            <i className="bi bi-phone d-flex align-items-center ms-4">
              <a
                href={`tel:${businessDet?.phone_1}`}
              >
                <span>+91 {businessDet?.phone_1}</span>
              </a>

            </i>
          </div>
          <div className="social-links d-none d-md-flex align-items-center">
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
      </section>
     
      <header id="header" className="header d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center">
            <h1>
              <img
                src={businessDet?.logo}
                style={{width:'60px', height:'60px'}}          
                className="cursor"
              />
              <span style={{color:"#C60101", fontWeight:"bold"}}>ASK</span>&nbsp;<label style={{color:"#474646"}}>Associates</label>
            </h1>
          </a>
          <nav id="navbar" className="navbar">
            <ul>
              {headerList.length !== 0 &&
                headerList.map((item) => {
                  if (item?.isParentLink) {
                    return (
                      <li
                        key={item.navLink + item.id}
                        className="dropdown navLinkCustom"
                      >
                        <NavLink
                          to={
                            item.itemURL
                              ? item.navLink + "/" + item.itemURL
                              : item.navLink
                          }
                          state={{
                            data: item,
                          }}
                          onClick={(event) => navDropdowns(event)}
                        >
                          <span>{item.title}</span>
                          <i className="bi bi-chevron-down dropdown-indicator"></i>
                        </NavLink>
                        <ul>
                          {item.subLink.length !== 0 &&
                            item.subLink.map((item2) => {
                              if (item2?.isParentLink) {
                                return (
                                  <li
                                    key={item2.navLink + item2.id}
                                    className="dropdown navLinkCustom"
                                  >
                                    <a
                                      href={item2.navLink}
                                      onClick={(event) => navDropdowns(event)}
                                    >
                                      <span>{item2.title}</span>
                                      <i className="bi bi-chevron-down dropdown-indicator"></i>
                                    </a>
                                    <ul>
                                      {item2.subLink.length !== 0 &&
                                        item2.subLink.map((item3) => {
                                          if (item3?.isParentLink) {
                                            return (
                                              <li
                                                key={item3.navLink + item3.id}
                                                className="dropdown navLinkCustom"
                                              >
                                                <a
                                                  href={item3.navLink}
                                                  onClick={(event) =>
                                                    navDropdowns(event)
                                                  }
                                                >
                                                  <span>{item3.title}</span>
                                                  <i className="bi bi-chevron-down dropdown-indicator"></i>
                                                </a>
                                                <ul>
                                                  <li>
                                                    <a href="/">None</a>
                                                  </li>
                                                </ul>
                                              </li>
                                            );
                                          } else {
                                            return (
                                              <li key={item3.navLink + item3.id}>
                                                <NavLink
                                                  to={
                                                    item2.itemURL
                                                      ? item3.navLink +
                                                      "/" +
                                                      item3.itemURL
                                                      : item3.navLink
                                                  }
                                                  state={{
                                                    data: item3,
                                                  }}
                                                  onClick={() =>
                                                    navbarlinkClickHandler()
                                                  }
                                                >
                                                  <p>{item3.title}</p>
                                                </NavLink>
                                              </li>
                                            );
                                          }
                                        })}
                                    </ul>
                                  </li>
                                );
                              } else {
                                if (item2.itemURL === "all") {
                                  return (
                                    <>
                                      <hr />
                                      <li key={item2.navLink + item2.id} className="childNavAll">
                                        {/* <a href={`${item2.navLink}`}>
                                      {item2.title}
                                    </a> */}
                                        <NavLink
                                          to={
                                            item2.itemURL
                                              ? item2.navLink + "/" + item2.itemURL
                                              : item2.navLink
                                          }
                                          state={{
                                            data: item2,
                                          }}
                                          onClick={() => navbarlinkClickHandler()}
                                        >
                                          <p>{item2.title}</p>
                                        </NavLink>
                                      </li>
                                    </>
                                  )
                                }
                                else {
                                  return (
                                    <li key={item2.navLink + item2.id} className="childNav">
                                      {/* <a href={`${item2.navLink}`}>
                                            {item2.title}
                                          </a> */}
                                      <NavLink
                                        to={
                                          item2.itemURL
                                            ? item2.navLink + "/" + item2.itemURL
                                            : item2.navLink
                                        }
                                        state={{
                                          data: item2,
                                        }}
                                        onClick={() => navbarlinkClickHandler()}
                                      >
                                        <p>{item2.title}</p>
                                      </NavLink>
                                    </li>
                                  )
                                }
                              }
                            })}
                        </ul>
                      </li>
                    );
                  } else {
                    return (
                      <li key={item.title}>
                        <NavLink
                          to={
                            item.itemURL
                              ? item.navLink + "/" + item.itemURL
                              : item.navLink
                          }
                          state={{ data: item }}
                          onClick={() => navbarlinkClickHandler()}
                        >
                          <p>{item.title}</p>
                        </NavLink>
                      </li>
                    );
                  }
                })}
            </ul>
          </nav>
          <i
            className="mobile-nav-toggle mobile-nav-show bi bi-list"
            onClick={(event) => mobileNavToogleLink(event)}
          ></i>
          <i
            className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"
            onClick={(event) => mobileNavToogleLink(event)}
          ></i>
        </div>
      </header>
    </>
  );
};

export default Header;
