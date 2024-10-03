import { IFilter } from "@/app/products/interfaces/filters.interface";

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

export const lastYearCollectionsFilterButtons: string[] = [
  "All",
  "Men",
  "Women",
  "KID",
];
