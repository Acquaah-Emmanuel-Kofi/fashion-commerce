import { RootState, AppDispatch, useAppSelector, useAppDispatch } from "../redux/store";
import { addToCart, clearCart, removeFromCart, updateCartQuantity } from "@/redux/features/cartSlice";
import { ICartItem } from "@/modules/interfaces/products.interface";


const useCart = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const { items, totalAmount } = useAppSelector(
    (state: RootState) => state.cart
  );

  const addItem = (product: ICartItem) => dispatch(addToCart(product));
  const removeItem = (id: string) => dispatch(removeFromCart(id));

  const increaseQuantity = (id: string) => {
    const item = items.find((item) => item.id === id);
    if (item) {
      dispatch(updateCartQuantity({ id, quantity: item.quantity + 1 }));
    }
  };

  const decreaseQuantity = (id: string) => {
    const item = items.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      dispatch(updateCartQuantity({ id, quantity: item.quantity - 1 }));
    }
  };

  const clear = () => dispatch(clearCart());

  return {
    items,
    totalAmount,
    addItem,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    clear,
  };
};

export default useCart;
