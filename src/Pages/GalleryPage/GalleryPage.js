import React from "react";
import HelmetComp from "../../baseComponent/helmet/HelmetComp";
import { useAPIGet } from "../../services/APIService";
import CustomGallery from "../../components/customGallery/CustomGallery";
import APIEndPoints from "../../utils/APIEndPoints";
import Loader from "../../components/loader/Loader";

import "./GalleryPage.scss";

const GalleryPage = () => {
  const apiImageList = useAPIGet(
    "GalleryPage",
    "ImageList",
    `${APIEndPoints.GetGalleryImageList.url}`,
    {
      enabled: !!APIEndPoints?.GetGalleryImageList?.url,
      refetchOnWindowFocus: false,
      staleTime: 0,
    }
  );

  return (
    <>
      <HelmetComp title={'Gallery'} />
      <div className="container">
        <h1 className="fw-light text-center text-lg-start mt-4 mb-0">
          Gallery
        </h1>
        <hr className="mt-2 mb-4" />
        <div className="row text-center text-lg-start mb-4" id="GalleryPage">
          {!apiImageList?.isError &&
            apiImageList?.isSuccess &&
            apiImageList?.data.length !==0 ? (
              <CustomGallery id="#my-gallery" imageList={apiImageList?.data} />
            ):'Loading Images..!'}
          {apiImageList?.isError && <div>Failed to loaded</div>}
          {apiImageList?.isFetching && <Loader />}
        </div>
      </div>
    </>
  );
};

export default GalleryPage;
