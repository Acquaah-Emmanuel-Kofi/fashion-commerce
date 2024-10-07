import useCart from "@/hooks/useCart";
import { IProduct } from "@/modules/interfaces/products.interface";
import { HiPlus } from "react-icons/hi";

interface ICartItem {
  products: IProduct;
}

export default function AddToCartPlusButton({ products }: ICartItem) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    const cartItem = {
      ...products,
      size: products.size,
      color: products.color,
      quantity: 1,
    };
    addItem(cartItem);
  };
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        handleAddToCart();
      }}
      className="flex justify-between bg-[#DCDCDC70] text-[#0C0C0C] hover:bg-black hover:text-white transition items-center p-2.5"
    >
      <HiPlus />
    </button>
  );
}
