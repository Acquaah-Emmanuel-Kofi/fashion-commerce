interface AddToCartButtonProps {
  onAddToCart: () => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ onAddToCart }) => {
  return (
    <button
      type="button"
      onClick={onAddToCart}
      className="hover:bg-black font-semibold hover:text-white bg-[#D9D9D9] text-black transition-all ease-in-out px-4 py-2 w-full"
    >
      ADD
    </button>
  );
};

export default AddToCartButton;
