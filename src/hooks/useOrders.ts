import { useCallback, useEffect } from "react";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import { fetchOrders } from "@/redux/features/orders/ordersSlice";

export const useOrders = () => {
  const dispatch = useAppDispatch();

  const { orders, total, loading, error } = useAppSelector(
    (state: RootState) => state.orders
  );

  const refetch = useCallback(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  useEffect(() => {
    if (orders.length === 0) {
      refetch();
    }
  }, [refetch, orders.length]);

  return { orders, total, loading, error, refetch };
};
