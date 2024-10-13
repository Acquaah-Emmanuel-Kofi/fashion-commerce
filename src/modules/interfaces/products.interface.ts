import { StaticImageData } from "next/image";
import { ICommonResponse } from "./common.interface";

export interface IProduct {
  id: string;
  name: string;
  type: string;
  images: string[] | StaticImageData[];
  thumbnail: string | StaticImageData;
  price: string;
  description: string;
  size: string;
  color: string;
  quantity: number;
}

export interface IProducts extends ICommonResponse {
  data: IProduct[];
}

export interface IProductDetails extends IProduct {
  description: string;
  available: boolean;
  categories: string[]; 
  colors: string[];
  sizes: string[];
  createdAt: string; 
  updatedAt: string; 
}

export interface IProductDetailsResponse extends ICommonResponse {
  data: IProductDetails[];
}

export interface ProductCreationForm {
  name: string;
  price: string;
  type: string;
  sizes: string[];
  colors: string[];
  category: string;
  isAvailable: string;
  description: string;
  images: (File | string)[];
}