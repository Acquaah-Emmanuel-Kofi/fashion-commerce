import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { fetchProducts } from "@/redux/features/productSlice";

const useProducts = () => {
  const dispatch: AppDispatch = useDispatch();

  const { products, loading, error, available, unavailable } = useSelector(
    (state: RootState) => state.products
  );

  const refetch = useCallback(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (products.length === 0) {
      refetch();
    }
  }, [refetch, products.length]);

  return {
    products,
    loading,
    error,
    available,
    unavailable,
    refetch,
  };
};

export default useProducts;
