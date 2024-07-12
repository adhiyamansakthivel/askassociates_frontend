import React, { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { Gallery, Item } from "react-photoswipe-gallery";

const CustomGallery = ({ id, imageList }) => {
  const smallItemStyles = {
    cursor: "pointer",
    objectFit: "cover",
    width: "100%",
    maxHeight: "100%",
  };

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: id,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);


  return (
    <Gallery withCaption>
      {imageList?.data?.data?.length &&
        imageList?.data?.data?.map((item, index) => (
          <div className="col-lg-3 col-md-4 col-12 mt-2" key={index}>
            <Item
              original={item?.image}
              thumbnail={item?.image}
              width="1600"
              height="750"
              alt={item?.image}
              caption={`<h1>${item?.name}</h1>`}
            >
              {({ ref, open }) => (
                <img
                  style={smallItemStyles}
                  src={item?.image}
                  ref={ref}
                  onClick={open}
                  className="img-fluid img-thumbnail"
                />
              )}
            </Item>
          </div>
        ))}
    </Gallery>
  );
};

export default CustomGallery;
