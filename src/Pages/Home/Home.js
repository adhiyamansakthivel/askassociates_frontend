import React from "react";
import HelmetComp from "../../baseComponent/helmet/HelmetComp";
import { useQueries } from "@tanstack/react-query";

import AboutUs from "../../components/about/About";
import Clients from "../../components/clients/Clients";
import StatsCounter from "../../components/statsCounter/StatsCounter";
import OurServices from "../../components/ourServices/OurServices";
import Testimonials from "../../components/testimonials/Testimonials";
import Portfolio from "../../components/portfolio/Portfolio";
import FrequentlyAskedQuestions from "../../components/frequentlyAskedQuestions/FrequentlyAskedQuestions";
import Contact from "../../components/contact/Contact";
import Causal from "../../components/causal/Causal";

import getAPIData from "../../services/APIService";
import APIEndPoints from "../../utils/APIEndPoints";


const Home = () => {

  const [apiCarouselList,apiClientList,apiProductList_CategoryList] = useQueries({
    queries: [
      {
        queryKey: ["carouselList"],
        queryFn: () =>
          getAPIData("get", APIEndPoints.GetCarousel.url)
            .then((res) => res?.data)
            .catch((err) => err),
      },
      {
        queryKey: ["clientList"],
        queryFn: () =>
          getAPIData("get", APIEndPoints.GetClients.url)
            .then((res) => res?.data)
            .catch((err) => err),
      },
      {
        queryKey: ["ctyPrdList"],
        queryFn: () =>
          getAPIData("get", APIEndPoints.GetProductList_Category.url)
            .then((res) => res?.data)
            .catch((err) => err),
      },
    ],
  });

  
  return (
    <>
    <HelmetComp title={'Ask Associates'} />
      {<Causal id="top-portfolio-details" CarouselList={apiCarouselList?.data?.data} />}
      <main id="main">
        {/* <Breadcrumbs/> */}
        {/* <Causal/> */}
        <AboutUs />
      
        {/* <StatsCounter /> */}
        {/* <CallAction /> */}
        {/* <OurServices /> */}
        { (apiProductList_CategoryList.isSuccess && !apiProductList_CategoryList.isError) && <Portfolio DataList={apiProductList_CategoryList}/>}
        {(apiClientList.isSuccess && !apiClientList.isError && apiClientList?.data?.data?.length != 0) &&  <Clients  BrandList={apiClientList?.data?.data}/>}
        
        {/* <OurTeam /> */}
        {/* <Pricing /> */}
        {/* <FrequentlyAskedQuestions /> */}
        {/* <BlogPosts /> */}
        {/* <Testimonials /> */}
        <Contact />
      </main>
    </>
  );
};

export default Home;
