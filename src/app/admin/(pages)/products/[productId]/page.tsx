"use client";

import HeaderTitle from "@/app/admin/(components)/HeaderTitle";
import Breadcrumb from "@/app/shared/components/Breadcrumb";
import useFetch from "@/hooks/useFetch";
import {
  IProductDetails,
  ProductCreationForm,
} from "@/modules/interfaces/products.interface";
import ProductForm from "../components/ProductForm";
import Link from "next/link";
import ProductFormPlaceholder from "../components/ProductFormPlaceholder";

const breadcrumbItems = [
  { label: "All Products", href: "/admin/products" },
  { label: "Product Details", href: "" },
];

const AdminProductDetails = ({ params }: { params: { productId: string } }) => {
  const { data, loading, error } = useFetch<IProductDetails>(
    `/product/${params.productId}`
  );

  const handleDelete = () => {
    console.log("Product Deleted");
  };

  const handleUpdate = (data: ProductCreationForm) => {
    console.log("Product Data:", data);
  };

  const productDetails = data && {
    ...data,
    categories: data.categories,
    isAvailable: String(data.available),
    images: data.images.map((img) => {
      if (typeof img === "string") {
        return img;
      }
      return img.src;
    }),
  };

  if (error) {
    return (
      <div className="container mx-auto lg:w-[80%] py-20">
        <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-8 items-center text-center">
          <div className="p-6  lg:max-w-[60%]">
            <h1 className="lg:text-4xl text-2xl font-bold text-black font-beatrice mb-4">
              Oops! No Data Found
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              We couldn&apos;t find any information related to this ID.
              It&apos;s possible the item no longer exists or the link is
              incorrect.
            </p>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-2">
              <Link
                href="/admin"
                className="mt-4 px-4 py-2 bg-gray-100 text-black hover:bg-black hover:text-white transition-all"
              >
                Back to Homepage
              </Link>
              <Link
                href="/admin/products"
                className="mt-4 px-4 py-2 bg-black text-white hover:bg-slate-700"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="space-y-6 pb-6">
      <div>
        <HeaderTitle title="Product Details" />
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {loading ? (
        <ProductFormPlaceholder />
      ) : (
        productDetails && (
          <ProductForm
            product={productDetails}
            onSubmit={handleUpdate}
            onDelete={handleDelete}
          />
        )
      )}
    </section>
  );
};

export default AdminProductDetails;
