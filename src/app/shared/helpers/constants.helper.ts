import { FormFields } from "@/modules/types/common.type";

export const lastYearCollectionsFilterButtons: string[] = [
  "All",
  "Men",
  "Women",
  "KIDS",
];

export const ORDER_FORM_FIELDS: FormFields = {
  email: "",
  phone: "",
  firstname: "",
  lastname: "",
  country: "",
  state: "",
  address: "",
  city: "",
  postalCode: "",
};

export const CATEGORY_OPTIONS = [
  { value: "men", label: "MEN" },
  { value: "women", label: "WOMEN" },
  { value: "kids", label: "KIDS" },
];

export const PRODUCT_TYPE_OPTIONS = [
  { value: "T-SHIRT", label: "T-SHIRT" },
  { value: "SHORTS", label: "SHORTS" },
];

export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhoneNumber = (phone: string) => {
  const phoneRegex = /^\d{10,15}$/;
  return phoneRegex.test(phone);
};
