"use client";

import React from "react";
import ProductForm from "../components/ProductForm";
import HeaderTitle from "@/app/admin/(components)/HeaderTitle";
import { ProductCreationForm } from "@/modules/interfaces/products.interface";
import Breadcrumb from "@/app/shared/components/Breadcrumb";

const breadcrumbItems = [
  { label: "All Products", href: "/admin/products" },
  { label: "Add New Product", href: "" },
];

export default function AddNewProduct() {
  const handleSubmit = (data: ProductCreationForm) => {
    console.log("Product Data:", data);
  };
  return (
    <section className="space-y-6 pb-6">
      <div>
        <HeaderTitle title="Product Details" />
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <ProductForm onSubmit={handleSubmit} />
    </section>
  );
}
