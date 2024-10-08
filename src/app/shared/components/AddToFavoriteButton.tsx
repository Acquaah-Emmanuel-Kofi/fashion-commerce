import React from "react";
import { useSelector } from "react-redux";
import useFavorite from "@/hooks/useFavorites";
import {
  IProduct,
  IProductDetails,
} from "@/modules/interfaces/products.interface";
import toast from "react-hot-toast";
import { RootState } from "@/redux/store";

interface Props {
  products: IProduct | IProductDetails;
}

const AddToFavoriteButton: React.FC<Props> = ({ products }) => {
  const { addItem, removeItem } = useFavorite();

  // Access the favorites list from the Redux store
  const favorites = useSelector((state: RootState) => state.favorites.items);

  // Check if the product already exists in the favorites list
  const isFavorite = favorites.some(
    (favorite: IProduct) => favorite.id === products.id
  );

  const notifyAdd = () => toast.success("Added to favorites successfully!");
  const notifyRemove = () =>
    toast.success("Removed from favorites successfully!");

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeItem(products.id);
      notifyRemove();
    } else {
      const favoriteItem = {
        ...products,
        size: products.size,
        color: products.color,
        quantity: 1,
      };

      addItem(favoriteItem);
      notifyAdd();
    }
  };

  return (
    <button
      type="button"
      title={isFavorite ? "Remove from favorites" : "Add to favorites"}
      onClick={(e) => {
        e.preventDefault();
        handleToggleFavorite();
      }}
      className={`flex justify-between items-center border border-[#D9D9D9] p-2.5 hover:bg-[#D9D9D9]  ${
        isFavorite ? "bg-black" : "bg-white"
      }`}
    >
      <svg
        width="11"
        height="10"
        viewBox="0 0 11 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.27919 9.48979L7.25766 9.14045L7.27919 9.48979ZM4.16808 3.87948L4.14172 4.22849C4.2366 4.23565 4.3303 4.20389 4.40126 4.1405C4.47221 4.07711 4.51431 3.98757 4.51784 3.89249L4.16808 3.87948ZM9.39345 7.60105L9.73816 7.66168L9.39345 7.60105ZM7.25766 9.14045C6.35892 9.19583 5.41962 9.30499 4.50199 9.19854C3.60232 9.09417 2.76301 8.78436 2.08002 8.01982L1.55799 8.48617C2.38652 9.41363 3.40496 9.77597 4.42133 9.89388C5.41974 10.0097 6.45477 9.89125 7.30072 9.83912L7.25766 9.14045ZM2.08002 8.01982C1.4115 7.27148 1.27374 6.26616 1.61525 5.48669C1.94702 4.72943 2.76111 4.12421 4.14172 4.22849L4.19444 3.53048C2.55623 3.40674 1.44003 4.14228 0.974082 5.20578C0.517874 6.24707 0.714989 7.54251 1.55799 8.48617L2.08002 8.01982ZM7.30072 9.83912C7.60445 9.82041 7.92963 9.79931 8.22475 9.7394C8.51975 9.67951 8.8232 9.57396 9.06343 9.35935L8.59708 8.83732C8.48938 8.93354 8.32513 9.00474 8.08549 9.05339C7.84597 9.10201 7.56958 9.12123 7.25766 9.14045L7.30072 9.83912ZM9.73816 7.66168C9.88497 6.82694 10.1189 5.81176 10.116 4.80666C10.113 3.78348 9.86732 2.73078 9.03879 1.80332L8.51675 2.26967C9.19974 3.03421 9.41332 3.90301 9.41598 4.80871C9.41869 5.73249 9.20472 6.65359 9.04874 7.54042L9.73816 7.66168ZM9.03879 1.80332C8.19579 0.859669 6.93067 0.518298 5.84474 0.854663C4.73563 1.19821 3.87938 2.22473 3.81832 3.86648L4.51784 3.89249C4.56929 2.5089 5.26213 1.76794 6.05185 1.52332C6.86475 1.27153 7.84823 1.52133 8.51675 2.26967L9.03879 1.80332ZM9.04874 7.54042C8.99461 7.84821 8.94447 8.12069 8.86925 8.35323C8.79399 8.58589 8.70479 8.7411 8.59708 8.83732L9.06343 9.35935C9.30366 9.14474 9.44263 8.85507 9.53527 8.56866C9.62796 8.28214 9.68544 7.96139 9.73816 7.66168L9.04874 7.54042Z"
          fill={isFavorite ? "#FFFFFF" : "#1E1E1E"}
        />
      </svg>
    </button>
  );
};

export default AddToFavoriteButton;
