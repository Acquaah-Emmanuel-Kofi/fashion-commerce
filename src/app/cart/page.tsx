"use client";

import CartItem from "./components/CartItem";
import CartSummary from "./components/CartSummary";
import product1 from "../../../public/images/product_1.png";
import product2 from "../../../public/images/product_2.png";
import { useState } from "react";
import Layout from "../shared/components/Layout";
import AddToFavoriteButton from "../shared/components/AddToFavoriteButton";

const CartPage = () => {
  const initialItems = [
    {
      id: 1,
      title: "T Shirt",
      description: "Abstract Print T-Shirt",
      thumbnail: product1,
      size: "M",
      color: "red",
      price: 50,
      quantity: 1,
    },
    {
      id: 2,
      title: "T Shirt",
      description: "Embroidered Shirt",
      thumbnail: product2,
      size: "L",
      color: "green",
      price: 70,
      quantity: 2,
    },
  ];

  const [cartItems, setCartItems] = useState(initialItems);

  return (
    <Layout showFooter={false}>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center gap-10">
          <h1 className="lg:text-2xl text-lg font-bold">SHOPPING BAG</h1>
          <div className="flex items-center gap-2">
            <AddToFavoriteButton />
            <h1 className="text-lg text-gray-600 font-semibold">FAVOURITES</h1>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between">
          {/* Cart Items */}
          <div className="flex lg:flex-row flex-col gap-10 border-t-2 border-b-2 border-[#C9C9C9] pt-5 pb-8">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  thumbnail={item.thumbnail!}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  quantity={item.quantity}
                />
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>

          {/* Cart Summary */}
          <CartSummary cartItems={cartItems} />
        </div>

        {/* Clear Cart Button */}
        {/* {cartItems.length > 0 && (
          <button type="button" onClick={handleClearCart}>
            Clear Cart
          </button>
        )} */}
      </div>
    </Layout>
  );
};

export default CartPage;
