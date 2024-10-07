import useCart from "@/hooks/useCart";
import { IProduct } from "@/modules/interfaces/products.interface";
import toast from "react-hot-toast";
import { HiPlus } from "react-icons/hi";

interface ICartItem {
  products: IProduct;
}

export default function AddToCartPlusButton({ products }: ICartItem) {
  const { addItem } = useCart();

  const notify = () => toast.success("Added to cart successfully!");

  const handleAddToCart = () => {
    const cartItem = {
      ...products,
      size: products.size,
      color: products.color,
      quantity: 1,
    };
    addItem(cartItem);
    notify();
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
