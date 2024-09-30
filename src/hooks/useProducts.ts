import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { RootState, AppDispatch } from "../redux/store";
import { fetchProducts } from "@/redux/features/productSlice";

const useProducts = () => {
  const dispatch: AppDispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    if (products.products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.products.length]);

  return { products, loading, error };
};

export default useProducts;
