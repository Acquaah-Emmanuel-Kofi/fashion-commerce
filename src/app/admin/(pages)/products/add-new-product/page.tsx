"use client";

import React from "react";
import ProductForm from "../components/ProductForm";
import HeaderTitle from "@/app/admin/(components)/HeaderTitle";

export default function AddNewProduct() {
  const handleSubmit = (data: any) => {
    console.log("Product Data:", data);
  };
  return (
    <section className="space-y-6 pb-6">
      <HeaderTitle title="Add Product" />
      <ProductForm onSubmit={handleSubmit} />
    </section>
  );
}
