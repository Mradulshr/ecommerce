import testimonial1 from "../assets/test.jpg";
import testimonial2 from "../assets/test2.jpg";
import testimonial3 from "../assets/test3.jpg";
import testimonial4 from "../assets/test4.jpg";
import bestseller1 from "../assets/1.png";
import bestseller2 from "../assets/2.png";
import bestseller3 from "../assets/3.png";
import bestseller4 from "../assets/4.png";

export const products = [
  // {
  //   id: 1,
  //   name: "Rambler's Boots",q
  //   price: 899,
  //   images: [testimonial1, testimonial2, testimonial3],
  //   description: "May our boots always be muddy!",
  //   sizes: ["S", "M", "L", "XL"],
  //   colors: ["black", "white"],
  // },
  {
    id: 1,
    name: "Rambler's Boots",
    description: "May our boots always be muddy!",
    price: 1999,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Blue", "Green"],
    mainImage: bestseller1, // Main image added here
    images: [testimonial1, testimonial2, testimonial3],
  },
  {
    id: 2,
    name: "Bag full of Memories",
    price: 899,
    images: [bestseller1, bestseller2, testimonial3],
    mainImage: bestseller1, // Main image added here
    description: "A bag that carries your memories wherever you go.",
    sizes: ["S", "M", "L"],
    colors: ["blue", "green"],
  },
  {
    id: 3,
    name: "Brighter Day",
    price: 899,
    images: [bestseller1, bestseller3, bestseller4],
    description: "A product that makes your day brighter!",
    sizes: ["M", "L", "XL"],
    colors: ["yellow", "orange"],
    mainImage: bestseller1, // Main image added here
  },
  {
    id: 4,
    name: "Brighter Days",
    price: 899,
    images: [bestseller1, bestseller3, bestseller4],
    description: "A product that makes your day brighter!",
    sizes: ["M", "L", "XL"],
    colors: ["yellow", "orange"],
    mainImage: bestseller1, // Main image added here
  },
  {
    id: 5,
    name: "Brighter",
    price: 899,
    images: [bestseller1, bestseller3, bestseller4],
    description: "A product that makes your day brighter!",
    sizes: ["M", "L", "XL"],
    colors: ["yellow", "orange"],
    mainImage: bestseller1, // Main image added here
  },
  {
    id: 6,
    name: "Rambler's Boots",
    price: 899,
    images: [bestseller1, bestseller3, bestseller4],
    description: "A product that makes your day brighter!",
    sizes: ["M", "L", "XL"],
    colors: ["yellow", "orange"],
    mainImage: bestseller1, // Main image added here
  },
  {
    id: 7,
    name: "Rambler's ",
    price: 899,
    images: [bestseller1, bestseller3, bestseller4],
    description: "A product that makes your day brighter!",
    sizes: ["M", "L", "XL"],
    colors: ["yellow", "orange"],
    mainImage: bestseller1, // Main image added here
  },
  {
    id: 8,
    name: "Rambler's ",
    price: 899,
    images: [bestseller1, bestseller3, bestseller4],
    description: "A product that makes your day brighter!",
    sizes: ["M", "L", "XL"],
    colors: ["yellow", "orange"],
    mainImage: bestseller1, // Main image added here
  },
];
