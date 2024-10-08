import GoBackButton from "../shared/components/GoBack";
import Form from "./components/Form";

export default function Checkout() {
  return (
    <section>
      <header className="flex w-full p-6">
        <GoBackButton />
      </header>

      <main className="p-6">
        <h1 className="font-beatrice font-bold text-2xl mb-6">CHECKOUT</h1>

        <div className="flex lg:flex-row flex-col gap-7 lg:gap-0 justify-between">
          <div className="lg:w-2/5 w-full">
            <Form />
          </div>

          <div className="lg:w-2/5 w-full h-[500px] border border-[#D9D9D9] "></div>
        </div>
      </main>
    </section>
  );
}
