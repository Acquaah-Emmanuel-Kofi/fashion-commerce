"use client"

import { RootState, useAppSelector } from "@/redux/store";
import GoBackButton from "../shared/components/GoBack";
import Form from "./components/Form";
import OrderInfo from "./components/OrderInfo";
import LoadingOverlay from "../shared/components/LoadingOverlay";

export default function Checkout() {
  const isLoading = useAppSelector(
    (state: RootState) => state.loading.isLoading
  );

  return (
    <section>
      <LoadingOverlay isLoading={isLoading} />
      <header className="flex w-full p-6">
        <GoBackButton />
      </header>

      <main className="p-6">
        <h1 className="font-beatrice font-bold text-2xl mb-6">CHECKOUT</h1>

        <div className="flex lg:flex-row flex-col gap-7 lg:gap-0 justify-between">
          <div className="lg:w-2/5 w-full">
            <Form />
          </div>

          <div className="lg:w-2/5 w-full min-h-[500px] border border-[#D9D9D9] ">
            <OrderInfo />
          </div>
        </div>
      </main>
    </section>
  );
}
