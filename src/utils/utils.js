// export const navbarList=[
//     {
//         id:1,
//         title:'Home',
//         navLink:'portfolio-details',
//         isParentLink:false
//     },
//     {
//         id:2,
//         title:'About',
//         navLink:'about',
//         isParentLink:false
//     },
//     {
//         id:3,
//         title:'Services',
//         navLink:'services',
//         isParentLink:false
//     },
//     {
//         id:4,
//         title:'Portfolio',
//         navLink:'portfolio',
//         isParentLink:false
//     },
//     {
//         id:5,
//         title:'Team',
//         navLink:'team',
//         isParentLink:false
//     },
//     {
//         id:6,
//         title:'Blog',
//         navLink:'recent-posts',
//         isParentLink:false
//     },
//     {
//         id:8,
//         title:'Category',
//         navLink:'category',
//         isParentLink:true,
//         subLink:[
//             {
//                 id:9,
//                 title:'Category1',
//                 navLink:'category1',
//                 isParentLink:false
//             },
//             {
//                 id:10,
//                 title:'Category2',
//                 navLink:'category2',
//                 isParentLink:true,
//                 subLink:[
//                     {
//                         id:11,
//                         title:'SubCategory1',
//                         navLink:'subCategory1',
//                         isParentLink:false
//                     },
//                     {
//                         id:12,
//                         title:'SubCategory2',
//                         navLink:'subCategory2',
//                         isParentLink:false
//                     },
//                     {
//                         id:13,
//                         title:'SubCategory3',
//                         navLink:'subCategory3',
//                         isParentLink:false
//                     }
//                 ]
//             },
//             {
//                 id:14,
//                 title:'Category3',
//                 navLink:'category3',
//                 isParentLink:false
//             },
//             {
//                 id:15,
//                 title:'Category4',
//                 navLink:'category4',
//                 isParentLink:false
//             },
//             {
//                 id:16,
//                 title:'Category5',
//                 navLink:'category5',
//                 isParentLink:false
//             }
//         ]
//     },
//     {
//         id:7,
//         title:'Contact',
//         navLink:'contact',
//         isParentLink:false
//     },
// ]

export const navbarList = [
  {
    id: 1,
    title: "Home",
    navLink: "/",
    isParentLink: false,
  },
  {
    id: 2,
    title: "Our Products",
    navLink: "javascript:void(0)",
    isParentLink: true,
    subLink: [
    //   {
    //     id:11,
    //     title:'Batteries',
    //     navLink:'/products',
    //     itemURL:'batteries',
    //     isParentLink:false
    // },
    // {
    //     id:12,
    //     title:'Solar Products',
    //     navLink:'/products',
    //     itemURL:'solar-products',
    //     isParentLink:false
    // },
    ],
  },
  // {
  //   id: 3,
  //   title: "Our Manufacturing",
  //   navLink: "javascript:void(0)",
  //   isParentLink: true,
  //   subLink: [
  //   //   {
  //   //     id:11,
  //   //     title:'Batteries',
  //   //     navLink:'/products',
  //   //     itemURL:'batteries',
  //   //     isParentLink:false
  //   // },
  //   // {
  //   //     id:12,
  //   //     title:'Solar Products',
  //   //     navLink:'/products',
  //   //     itemURL:'solar-products',
  //   //     isParentLink:false
  //   // },
  //   ],
  // },
  
  {
    id: 3,
    title: "Gallery",
    navLink: "/gallery",
    isParentLink: false,
  },
  {
    id: 4,
    title: "About Us",
    navLink: "/about",
    isParentLink: false,
  },
  {
    id: 5,
    title: "Contact Us",
    navLink: "/contact",
    isParentLink: false,
  },
];

export const productList = [
  {
    id: "3c724359-5b3e-4766-86ae-c8752b7d935d",
    name: "JC Force",
    image:
      "http://localhost:8000/images/products/c57cf734-d498-4d08-ae05-283f73dc8924.jpg",
    description:
      "<p>JC Batteries offers a wide range of car batteries that suits best for all the brands of Car, SUV and MUV. These batteries comes with maintenance free, ultra low maintenance and long lasting quality. JC also manufacturers automotive batteries for various segments like Three-wheeler, Trucks, Buses, LCV &amp; HCV vehicles.</p>",
    brand: {
      id: "0b617a25-d6b8-4faf-9c34-aaec6eaa975c",
      name: "JC Batteries",
      brand_url: "jc-batteries",
      logo: "http://localhost:8000/images/brand_logo/77ba3353-4e90-4c9f-b8fe-4093cc13cab5.jpg",
      meta_title: "JC Batteries",
      meta_keywords: "",
      meta_description: "",
    },
    category: {
      id: "089e4f5c-7b47-4a68-98a4-c3575912f4bc",
      name: "Batteries",
      category_url: "batteries",
      meta_title: "Batteries",
      meta_keywords: "",
      meta_description: "",
    },
    subcategory: {
      id: "e89db0ff-50c3-4de0-9cb8-99a7a6e0ab2e",
      name: "JC Automative Batteries",
      subcategory_url: "jc-automative-batteries",
      category: null,
      meta_title: "JC Automative Batteries",
      meta_keywords: "",
      meta_description: "",
    },
    product_use: [
      {
        id: "10166559-3dbd-4d3e-93cc-4d82ac2027d2",
        name: "Vehicle",
      },
    ],
    product_url: "jc-force",
    price: "10000.00",
    quantity: 12,
    meta_title: "JC Force",
    meta_keywords: "",
    meta_description: "",
    productImages: [],
  },
  {
    id: "ee3575a5-b1ca-4a15-9efd-91ae4c10d09e",
    name: "JC Cruize XTRA",
    image:
      "http://localhost:8000/images/products/84a5deac-d92c-4525-947a-26393707cb50.jpg",
    description:
      "<p>JC Batteries offers a wide range of car batteries that suits best for all the brands of Car, SUV and MUV. These batteries comes with maintenance free, ultra low maintenance and long lasting quality. JC also manufacturers automotive batteries for various segments like Three-wheeler, Trucks, Buses, LCV &amp; HCV vehicles. All the batteries are tested as per IS14257, Japanese JISD5301, SAEJ537 &amp; DIN standards. JC batteries delivers high power and long lasting durability.</p>",
    brand: {
      id: "0b617a25-d6b8-4faf-9c34-aaec6eaa975c",
      name: "JC Batteries",
      brand_url: "jc-batteries",
      logo: "http://localhost:8000/images/brand_logo/77ba3353-4e90-4c9f-b8fe-4093cc13cab5.jpg",
      meta_title: "JC Batteries",
      meta_keywords: "",
      meta_description: "",
    },
    category: {
      id: "089e4f5c-7b47-4a68-98a4-c3575912f4bc",
      name: "Batteries",
      category_url: "batteries",
      meta_title: "Batteries",
      meta_keywords: "",
      meta_description: "",
    },
    subcategory: {
      id: "e89db0ff-50c3-4de0-9cb8-99a7a6e0ab2e",
      name: "JC Automative Batteries",
      subcategory_url: "jc-automative-batteries",
      category: null,
      meta_title: "JC Automative Batteries",
      meta_keywords: "",
      meta_description: "",
    },
    product_use: [
      {
        id: "10166559-3dbd-4d3e-93cc-4d82ac2027d2",
        name: "Vehicle",
      },
    ],
    product_url: "jc-cruize-xtra",
    price: "15000.00",
    quantity: 25,
    meta_title: "JC Cruize XTRA",
    meta_keywords: "",
    meta_description: "",
    productImages: [
      {
        id: "96a10132-6485-4799-adbf-dc82fc2c948d",
        product: "ee3575a5-b1ca-4a15-9efd-91ae4c10d09e",
        product_Image:
          "http://localhost:8000/images/productlist/280e23e8-57e5-41a3-b49d-1750b87c0ac3.jpg",
      },
    ],
  },
];

export const homeProfolioFilterMenu = [
  {
    id: "1",
    name: "all",
    title: "All",
    dataFilter: "*",
  },
  // {
  //   id: "2",
  //   name: "products",
  //   title: "Products",
  //   dataFilter: "filter-products",
  // },
  // {
  //   id: "3",
  //   name: "brands",
  //   title: "Brands",
  //   dataFilter: "filter-brands",
  // },
  // {
  //   id:'2',
  //   name:'batteries',
  //   title:'Batteries',
  //   dataFilter:'filter-batteries',
  // },
  // {
  //   id:'3',
  //   name:'solarProduct',
  //   title:'Solar Product',
  //   dataFilter:'filter-solarproduct',
  // }
];
