"use client";

import { useRouter } from "next/navigation";

interface CartSummaryProps {
  totalAmount: number;
}

const CartSummary: React.FC<CartSummaryProps> = ({ totalAmount }) => {
  const router = useRouter();

  const goToCheckout = () => {
    router.push("/checkout");
  };

  return (
    <div className="lg:w-1/3 bg-gray-50 lg:p-6">
      <h2 className="text-xl font-bold mb-4 font-beatrice">ORDER SUMMARY</h2>
      <div className="flex justify-between mb-2">
        <p>Subtotal</p>
        <p>${totalAmount.toFixed(2)}</p>
      </div>
      <div className="flex justify-between mb-6">
        <p>Shipping</p>
        <p>$0.00</p>
      </div>
      <div className="flex justify-between font-bold text-lg mb-16 pt-10 border-t-2 border-[#D9D9D9]">
        <p className="uppercase">Total</p>
        <p>${totalAmount.toFixed(2)}</p>
      </div>

      <div className="space-y-4">
        <div className="text-base flex">
          <input
            type="checkbox"
            className="shrink-0 mt-0.5 border-gray-200 rounded text-black accent-black"
          />
          <label
            htmlFor="hs-checkbox-group-1"
            className="text-base text-black font-thin ms-3"
          >
            I agree to the Terms and Conditions
          </label>
        </div>
        <button
          type="button"
          onClick={goToCheckout}
          className="hover:bg-black font-semibold hover:text-white bg-[#D9D9D9] text-black transition-all ease-in-out px-4 py-2 w-full"
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
