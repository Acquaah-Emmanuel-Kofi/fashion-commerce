interface IAddToCartButtonProps {
  productId: string;
}

const AddToCartButton: React.FC<IAddToCartButtonProps> = ({ productId }) => {
  const handleAddToCart = () => {
    console.log(`Product ${productId} added to cart`);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="hover:bg-black font-semibold hover:text-white bg-[#D9D9D9] text-black transition-all ease-in-out px-4 py-2 w-full"
    >
      ADD
    </button>
  );
};

export default AddToCartButton;
