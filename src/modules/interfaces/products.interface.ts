import { StaticImageData } from "next/image";

export interface IProduct {
  id: string | number;
  title: string;
  description: string;
  images?: string[] | StaticImageData[];
  thumbnail: string | StaticImageData;
  price: number;
  quantity: number;
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

export interface IProducts {
  products: IProduct[];
}
