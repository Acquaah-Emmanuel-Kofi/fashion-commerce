import { StaticImageData } from "next/image";
import { ICommonResponse } from "./common.interface";

export interface IProduct {
  id: string | number;
  name: string;
  description: string;
  images: string[] | StaticImageData[];
  thumbnail: string | StaticImageData;
  price: string;
}

export interface ICartItem {
  id: string | number;
  title: string;
  description: string;
  thumbnail: StaticImageData;
  size: string;
  color: string;
  price: number;
  quantity: number;
}


export interface IProducts extends ICommonResponse {
  data: IProduct[];
}
