import { ICartItem } from "@/modules/interfaces/products.interface";

interface CartSummaryProps {
  cartItems: ICartItem[];
}

const CartSummary = ({ cartItems }: CartSummaryProps) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0
  );

  return (
    <div className="lg:w-1/3 bg-gray-50 lg:p-6">
      <h2 className="text-xl font-bold mb-4 font-beatrice">ORDER SUMMARY</h2>
      <div className="flex justify-between mb-2">
        <p>Subtotal</p>
        <p>${totalPrice.toFixed(2)}</p>
      </div>
      <div className="flex justify-between mb-6">
        <p>Shipping</p>
        <p>$5.00</p>
      </div>
      <div className="flex justify-between font-bold text-lg mb-16 pt-10 border-t-2 border-[#D9D9D9]">
        <p className="uppercase">Total</p>
        <p>${(totalPrice + 5).toFixed(2)}</p>
      </div>

      <div className="space-y-4">
        <div className="text-base">
          <p>I agree to the Terms and Conditions</p>
        </div>
        <button
          type="button"
          className="hover:bg-black font-semibold hover:text-white bg-[#D9D9D9] text-black transition-all ease-in-out px-4 py-2 w-full"
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
