import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { fetchProducts } from "@/redux/features/productSlice";

const useProducts = () => {
  const dispatch: AppDispatch = useDispatch();

  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  const refetch = () => {
    dispatch(fetchProducts());
  };

  useEffect(() => {
    if (products.length === 0) {
      refetch();
    }
  }, [dispatch, products.length]);

  return {
    products,
    loading,
    error,
    refetch,
  };
};

export default useProducts;
