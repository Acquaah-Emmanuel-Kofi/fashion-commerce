import { IProduct } from "@/modules/interfaces/products.interface";
import {
  addToFavorite,
  clearFavorite,
  removeFromFavorite,
} from "@/redux/features/favoriteSlice";
import {
  AppDispatch,
  RootState,
  useAppDispatch,
  useAppSelector,
} from "@/redux/store";

const useFavorite = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const { items } = useAppSelector((state: RootState) => state.favorites);

  const addItem = (product: IProduct) => dispatch(addToFavorite(product));
  const removeItem = (id: string) => dispatch(removeFromFavorite(id));
  const clearFavorites = () => dispatch(clearFavorite());

  return { items, addItem, removeItem, clearFavorites };
};

export default useFavorite;
