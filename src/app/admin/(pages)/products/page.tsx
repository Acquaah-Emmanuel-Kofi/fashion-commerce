import Breadcrumb from "@/app/shared/components/Breadcrumb";
import React from "react";
import HeaderTitle from "../../(components)/HeaderTitle";
import { LuPlusCircle } from "react-icons/lu";
import ProductList from "./components/ProductList";
import SearchBar from "@/app/shared/components/Searchbar";

const breadcrumbItems = [
  { label: "Home", href: "/admin" },
  { label: "All Products", href: "/admin/products" },
];

export default function AllProducts() {
  return (
    <section className="space-y-6 pb-6">
      <header>
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
          <div>
            <HeaderTitle title="All Products" />
            <Breadcrumb items={breadcrumbItems} />
          </div>
          <div className="lg:w-[250px] w-full">
            <button
              type="button"
              className="hover:bg-gray-500 bg-black flex items-center gap-2 justify-center font-semibold hover:text-black  text-white transition-all ease-in-out p-2 w-full"
            >
              <LuPlusCircle />
              ADD NEW PRODUCT
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        <div className="lg:w-[300px] w-full">
          <SearchBar />
        </div>
      </div>

      <ProductList />
    </section>
  );
}
