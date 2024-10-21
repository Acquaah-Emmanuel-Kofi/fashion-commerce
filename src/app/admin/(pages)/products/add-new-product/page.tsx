"use client";

import React from "react";
import ProductForm from "../components/ProductForm";
import HeaderTitle from "@/app/admin/(components)/HeaderTitle";
import { ProductCreationForm } from "@/modules/interfaces/products.interface";
import Breadcrumb from "@/app/shared/components/Breadcrumb";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/store";
import { createProduct } from "@/redux/features/productSlice";
import { hideLoading, showLoading } from "@/redux/features/loadingSlice";

const breadcrumbItems = [
  { label: "All Products", href: "/admin/products" },
  { label: "Add New Product", href: "" },
];

export default function AddNewProduct() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSubmit = async (data: ProductCreationForm) => {
    dispatch(showLoading());

    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("isAvailable", data.isAvailable);

    data.types.forEach((type) => formData.append("types[]", type));
    data.sizes.forEach((size) => formData.append("sizes[]", size));
    data.colors.forEach((color) => formData.append("colors[]", color));
    data.categories.forEach((category) =>
      formData.append("categories[]", category)
    );

    data.images.forEach((image) => {
      formData.append("images", image);
    });

    try {
      const responseAction = await dispatch(createProduct(formData));

      if (createProduct.fulfilled.match(responseAction)) {
        dispatch(hideLoading());
        toast.success("Product created successfully!");
        router.push("/admin/products");
      } else {
        dispatch(hideLoading());
        toast.error("Something went wrong!");
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error(`Failed to create product. ${error}`);
    }
  };

  return (
    <section className="space-y-6 pb-6">
      <header>
        <HeaderTitle title="Product Details" />
        <Breadcrumb items={breadcrumbItems} />
      </header>
      <ProductForm onSubmit={handleSubmit} />
    </section>
  );
}
