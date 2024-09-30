import { IFilter } from "@/app/products/interfaces/filters.interface";

export const sizeOptions: string[] = ["2L", "6L", "12L", "18L", "20L", "40L"];
export const colorOptions: string[] = [
  "#D9D9D9",
  "#A9A9A9",
  "#1E1E1E",
  "#A6D6CA",
  "#FFFFFF",
  "#B9C1E8",
];

export const filters: IFilter[] = [
  {
    id: "availability",
    name: "Availability",
    options: [
      { value: 450, label: `Availability (${540})`, checked: false },
      {
        value: 18,
        label: `Out Of Stock (${18})`,
        checked: false,
      },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "New Arrivals", checked: false },
      { value: "sale", label: "Sale", checked: false },
      { value: "travel", label: "Travel", checked: true },
      { value: "organization", label: "Organization", checked: false },
      { value: "accessories", label: "Accessories", checked: false },
    ],
  },
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: true },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "price_range",
    name: "Price Range",
    options: [
      { value: 500, label: "GHC 500", checked: true },
      {
        value: 350,
        label: "GHC 350",
        checked: false,
      },
    ],
  },
  {
    id: "collections",
    name: "Collections",
    options: [{ value: "Something", label: "Something", checked: false }],
  },
  {
    id: "tags",
    name: "Tags",
    options: [{ value: "Something", label: "Something", checked: false }],
  },
  {
    id: "ratings",
    name: "Ratings",
    options: [{ value: "Something", label: "Something", checked: false }],
  },
];

export const productTypes: string[] = [
  "New",
  "SHIRTS",
  "POLO SHIRTS",
  "SHORTS",
  "JEANS",
  "JACKETS",
  "New",
  "SHIRTS",
  "POLO SHIRTS",
  "SHORTS",
  "JEANS",
  "JACKETS",
];


import productImage1 from "@/assets/images/product_1.png";
import productImage2 from "@/assets/images/product_2.png"; 

export const dummyProducts = [
  {
    id: 1,
    img: productImage1,
    title: "Cotton T Shirt",
    description: "Full Sleeve Zipper",
    price: 199,
  },
  {
    id: 2,
    img: productImage2,
    title: "Cotton T Shirt",
    description: "Full Sleeve Zipper",
    price: 199,
  },
  {
    id: 3,
    img: productImage1,
    title: "Cotton T Shirt",
    description: "Full Sleeve Zipper",
    price: 199,
  },
  {
    id: 4,
    img: productImage2,
    title: "Cotton T Shirt",
    description: "Full Sleeve Zipper",
    price: 199,
  },
];
