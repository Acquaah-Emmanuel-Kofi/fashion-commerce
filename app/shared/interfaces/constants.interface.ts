import { StaticImageData } from "next/image";

export interface IProductProps {
  id: number;
  img: string | StaticImageData;
  title: string;
  description: string;
  price: number;
  onAddToCart: (id: number) => void;
}