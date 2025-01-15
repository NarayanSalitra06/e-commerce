// import SideBar from "../components/Collections/SideBar";
import type { Categories, Categories2, filterArr, sideBarBtnCategary, womenFitness} from "../types/types";
 export const categories: Categories = {
    featured: {
      adImage: "/header/men/img2.webp",

      items: [
        { name: "Featured", count: null, adImage: "/header/men/img1.webp" },
        { name: "New Arrivals", count: 132, adImage: "/header/men/img1.webp" },
        { name: "Best Sellers", count: 46, adImage: "/header/men/img1.webp" },
        {
          name: "Better in Black",
          count: 70,
          adImage: "/header/men/img1.webp",
        },
      ],
    },
    clothing: {
      adImage: "/header/men/img1.webp",
      items: [
        { name: "All Products", count: 328, adImage: "/header/men/img3.webp" },
        { name: "Shorts", count: 68, adImage: "/header/men/img3.webp" },
        { name: "T-Shirts", count: 109, adImage: "/header/men/img3.webp" },
      ],
    },
    activity: {
      adImage: "/header/men/img3.webp",
      items: [
        { name: "Running", count: 26, adImage: "/header/men/img2.webp" },
        { name: "Workout", count: 154, adImage: "/header/men/img2.webp" },
      ],
    },
  };

  export  const categories2: Categories2 = {
      featured: {
        adImage: "/header/women/img3.webp",
        items: [
          {
            name: "New Arrivals",
            count: 140,
            adImage: "/header/women/img1.webp",
          },
          { name: "Best Sellers", count: 48, adImage: "/header/women/img1.webp" },
          {
            name: "Better in Black",
            count: 105,
            adImage: "/header/women/img1.webp",
          },
        ],
      },
      clothing: {  
        adImage: "/header/women/img1.webp",
        items: [
          {
            name: "All Products",
            count: 615,
            adImage: "/header/women/img2.webp",
          },
          { name: "Shorts", count: 129, adImage: "/header/women/img2.webp" },
          { name: "Leggings", count: 89, adImage: "/header/women/img2.webp" },
        ],
      },
      sportsBras: {
        adImage: "/header/women/img2.webp",
        items: [
          { name: "Low Impact", count: 101, adImage: "/header/women/img3.webp" },
          {
            name: "Medium Impact",
            count: 123,
            adImage: "/header/women/img3.webp",
          },
        ],
      },
    };
   export const womenFitnessdata: womenFitness[] = [
        {
          image: "/womenpopular/img1.webp",
          text: "BRA",
        },
        {
          image: "/womenpopular/shorts2.webp",
          text: "SPORTS",
        },
        {
          image: "/womenpopular/legging2.webp",
          text: "LEGGINGS",
        },
        {
          image: "/womenpopular/hoodies.webp",
          text: "HOODIES",
        },
        {
          image: "/womenpopular/shirts.webp",
          text: "SHIRTS",
        },
        {
          image: "/womenpopular/sweatpants.webp",
          text: "SWEATPANTS",
        },
      ];
      export const menFitnessdata: womenFitness[] = [
        {
          image: "/menpopular/shirts.webp",
          text: "SHIRTS",
        },
        {
          image: "/menpopular/shorts.webp",
          text: "SHORTS",
        },
       
        {
          image: "/menpopular/pants.webp",
          text: "PANTS",
        },
        {
          image: "/menpopular/tanks.webp",
          text: "TANKS",
        },
        {
          image: "/menpopular/hoodies.webp",
          text: "HOODIES",
        },
        {
            image: "/menpopular/workout.webp",
            text: "WORKOUT",
          },
          {
            image: "/menpopular/running.webp",
            text: "RUNNING",
          },
          {
            image: "/menpopular/lifestyle.webp",
            text: "LIFESTYLE",
          },
      ];
      export const filterdata: filterArr[] = [
        {
            img1: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/img9.1.webp?updatedAt=1736870195988",
            img2: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/img9.webp?updatedAt=1736870195637",
        },
        {
            img1: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/img8.1.webp?updatedAt=1736870195574",
            img2:"https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/img8.webp?updatedAt=1736870194821",
          },
          {
            img1: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/img7.webp?updatedAt=1736870194167",
            img2:"https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/img7.1.webp?updatedAt=1736870193807",
          },
          {
            img1: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/img6.webp?updatedAt=1736870193145",
            img2:"https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/img6.1.webp?updatedAt=1736870192841",
          },
          {
            img1: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/img5.webp?updatedAt=1736870192912",
            img2:"https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/img5.1.webp?updatedAt=1736870190933",
          },
          {
            img1:"https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/img4.webp?updatedAt=1736870190899",
            img2:"https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/img4.1.webp?updatedAt=1736870191096",
          },
          {
            img1: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/img3.1.webp?updatedAt=1736870190646",
            img2:"https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/img3.webp?updatedAt=1736870190811",
          },
          {
            img1:"https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/img2.webp?updatedAt=1736870189954",
            img2:"https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/img2.1.webp?updatedAt=1736870189243",
          },
          {
            img1: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/img19.1.webp?updatedAt=1736870189100",
            img2:"https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/img19.webp?updatedAt=1736870188736",
          },
          {
            img1: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/img17.1.webp?updatedAt=1736870186511",
            img2:"https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/img17.webp?updatedAt=1736870187046",
          },
          {
            img1: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/img18.1.webp?updatedAt=1736870186286",
            img2: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/img18.webp?updatedAt=1736870188314",
          },
          {
            img1: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/img16.webp?updatedAt=1736870186622p",
            img2: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/img16.1.webp?updatedAt=1736870185808",
          },
          {
            img1: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/img15.webp?updatedAt=1736870186276",
            img2: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/img15.1.webp?updatedAt=1736870185359",
          },
          {
            img1: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/img14.webp?updatedAt=1736870184863",
            img2: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/img14.1.webp?updatedAt=1736870184550",
          },
          {
            img1: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/img13.jpg?updatedAt=1736870184176",
            img2: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/img13.1.webp?updatedAt=1736870182017",
          },
          {
            img1: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/img12.1.webp?updatedAt=1736870181247",
            img2: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/img12.webp?updatedAt=1736870182189",
          },
          {
            img1: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/img11.webp?updatedAt=1736870181113",
            img2: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/img11.1.webp?updatedAt=1736870180533",
          }, {
            img1: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/img1.webp?updatedAt=1736870180635",
            img2: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/img1.2.webp?updatedAt=1736870179850",
          }, {
            img1: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/img10.1.webp?updatedAt=1736870180054",
            img2: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/img10.webp?updatedAt=1736870180437",
          }, {
            img1: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/35.webp?updatedAt=1736870179066",
            img2: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/35.1.webp?updatedAt=1736870177984",
          },  {
            img1: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/34.webp?updatedAt=1736870176889",
            img2: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/34.1.webp?updatedAt=1736870176991",
          },  {
            img1: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/33.webp?updatedAt=1736870176620",
            img2: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/33.1.webp?updatedAt=1736870176229",
          },  {
            img1: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/32.webp?updatedAt=1736870176397",
            img2: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/32.1.webp?updatedAt=1736870176015",
          },  {
            img1: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/31.webp?updatedAt=1736870175720",
            img2: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/31.1.webp?updatedAt=1736870175753",
          },  {
            img1: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/30.webp?updatedAt=1736870174642",
            img2: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/30.1.webp?updatedAt=1736870174162",
          },  {
            img1: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/29.webp?updatedAt=1736870172510",
            img2: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/29.1.webp?updatedAt=1736870172316",
          },  {
            img1: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/28.webp?updatedAt=1736870172386",
            img2: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/28.1.webp?updatedAt=1736870171308",
          },  {
            img1: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/26.webp?updatedAt=1736870172056",
            img2: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/26.1.webp?updatedAt=1736870171785",
          },  {
            img1: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/27.1.webp?updatedAt=1736870171834",
            img2: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/27.webp?updatedAt=1736870171265",
          },  {
            img1: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/25.webp?updatedAt=1736870170408",
            img2: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/25.1.webp?updatedAt=1736870169286",
          },  {
            img1: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/24.webp?updatedAt=1736870168368",
            img2: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/24.1.webp?updatedAt=1736870167983",
          },  {
            img1: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/23.webp?updatedAt=1736870167738",
            img2: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/23.1.webp?updatedAt=1736870167736",
          },  {
            img1: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/22.webp?updatedAt=1736870167311",
            img2: "/https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/22.1.webp?updatedAt=1736870167371",
          },  {
            img1: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/21.webp?updatedAt=1736870167083",
            img2: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/21.1.webp?updatedAt=1736870166827",
          },  {
            img1: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/20.webp?updatedAt=1736870165932",
            img2: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/20.2.webp?updatedAt=1736870165087",
          },{
            img1: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/23.webp?updatedAt=1736870167738",
            img2: "https://ik.imagekit.io/7phi74j9v/ShopImage/Section3/Women/23.1.webp?updatedAt=1736870167736",
          },   
    ]

    export const SideBardata: sideBarBtnCategary[] = [
      {
        btnName: "Short By: Featured",
        btnAll: ["Feature", "Seller", "Newest", "Price: Low-High", "Price: High-Low"],
      },
      {
        btnName: "Gender",
        btnAll: ["Unisex", "Women"],
      },
      {
        btnName: "Color",
        btnAll: [
          "#000000", // Black
          "#008000", // Green
          "#FFFF00", // Yellow
          "#FFC0CB", // Pink
          "#800080", // Purple
          "#FFA500", // Orange
          "#FFFFFF", // White
          "#A52A2A", // Brown
          "#0000FF", // Blue
        ],
      },
      {
        btnName: "Size",
        btnAll: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      },
      {
        btnName: "Fit",
        btnAll: ["Boxy", "Compression", "Oversize", "Relaxed", "Slim"],
      },
      {
        btnName: "Product Type",
        btnAll: ["Longsleeve", "Matching Set", "Pump Color", "Shirt", "Top"],
      },
      {
        btnName: "Collection",
        btnAll: ["AirTech", "Origin", "Power", "Seamless", "Zero"],
      },
    ];
    