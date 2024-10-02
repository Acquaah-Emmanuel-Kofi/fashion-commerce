import { IProducts } from "@/modules/interfaces/products.interface";
import { fetchDataFromApi } from "../api";

export const getNewCollections = async () => {
  const response: IProducts = await fetchDataFromApi("/product/new-collection");

  return response.data;
};

export const getNewThisWeek = async () => {
  const response: IProducts = await fetchDataFromApi("/product/new-this-week");

  return response.data;
};
