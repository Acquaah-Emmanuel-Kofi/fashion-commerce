import { StaticImageData } from "next/image";

export interface IProduct {
  id: string | number;
  title: string;
  description: string;
  images?: string[] | StaticImageData[];
  thumbnail: string | StaticImageData;
  price: number;
}

export interface IProducts {
  products: IProduct[];
}
