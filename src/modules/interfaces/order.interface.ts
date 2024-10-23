import { IProductDetails } from "./products.interface";

export interface IContactInfo {
  email: string;
  phone: string;
}

export interface IShippingAddress {
  address: string;
  city: string;
  country: string;
  firstname: string;
  lastname: string;
  postalCode: string;
  region: string;
}

export interface IOrderProduct {
  product: IProductDetails;
  quantity: number;
}

export interface IOrder {
  id: string;
  contactInfo: IContactInfo;
  dateCreated: string;
  dateUpdated: string;
  orderStatus: string;
  products: IOrderProduct[];
  shippingAddress: IShippingAddress;
}
