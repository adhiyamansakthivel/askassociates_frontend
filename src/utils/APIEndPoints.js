const APIEndPoints = {
  GetAllHeaders: {
    url: `/header`,
    method: "get",
    methodName: "getHeader",
  },
  PostHeader: {
    url: "/header",
    method: "post",
    methodName: "postHeader",
  },
  GetAllProducts: {
    url: 'products/',
    method: "get",
    methodName: "getProducts",
  },
  GetAllBrands: {
    url: 'brand/',
    method: "get",
    methodName: "getBrands",
  },
  GetGalleryImageList: {
    url: 'gallery/',
    method: "get",
    methodName: "getProducts",
  },
  GetCarousel: {
    url: 'carousel/',
    method: "get",
    methodName: "getCarousel",
  },
  GetCategory: {
    url: 'category',
    method: "get",
    methodName: "getCategory",
  },
  GetOwnProductHeaderList: {
    url: 'category_ownproducts/',
    method: "get",
    methodName: "getCategory",
  },
  GetAllBrands_Products: {
    url: 'brand_products/',
    method: "get",
    methodName: "getBrandsProducts",
  },
  GetProductList_Category: {
    url: 'category_products/',
    method: "get",
    methodName: "getCategory",
  },
  GetRelatedProducts: {
    url: 'related_products',
    method: "get",
    methodName: "getRelatedProducts",
  },
  GetOwnProductList_Category: {
    url: 'category_ownproducts/products/',
    method: "get",
    methodName: "getCategory",
  },
  GetAllOwnProducts: {
    url: 'muthuvelagency_products/',
    method: "get",
    methodName: "getProducts",
  },
  GetOwnRelatedProducts: {
    url: 'muthuvelagency/related_products',
    method: "get",
    methodName: "getRelatedProducts",
  },
  GetTestimonials: {
    url: 'testimonials/',
    method: "get",
    methodName: "getTestimonials",
  },
  GetContactus: {
    url: 'contactus/',
    method: "get",
    methodName: "getContactus",
  },
  GetBusiness: {
    url: 'business/',
    method: "get",
    methodName: "getBusiness",
  },
  GetClients: {
    url: 'clients/',
    method: "get",
    methodName: "getClients",
  },

};

export default APIEndPoints;
