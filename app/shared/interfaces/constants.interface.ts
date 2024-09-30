import { StaticImageData } from "next/image";

export interface IProductProps {
  id: string | number;
  img: string | StaticImageData;
  title: string;
  description: string;
  price: number;
}