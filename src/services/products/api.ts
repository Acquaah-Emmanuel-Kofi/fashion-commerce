import { IProducts } from "@/modules/interfaces/products.interface";
import { fetchDataFromApi } from "../api";

export const getNewCollections = async () => {
  const response: IProducts = await fetchDataFromApi("/product/new-collection");

  return response?.data;
};

export const getNewThisWeek = async () => {
  const response: IProducts = await fetchDataFromApi("/product/new-this-week");

  return response?.data;
};

export const getLastYearCollections = async (
  getAll: boolean,
  gender: string
) => {
  const params = new URLSearchParams({
    all: getAll.toString(),
    gender,
  });

  const response: IProducts = await fetchDataFromApi(
    `/product/filter/all?${params.toString()}`
  );

  return response?.data;
};

export const getButtonTypes = async () => {
  const response: IProducts = await fetchDataFromApi("/product-type");

  return response?.data;
};
