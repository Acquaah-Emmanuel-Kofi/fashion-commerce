"use client";

import ProductImages from "./components/ProductImages";
import ProductInfo from "./components/ProductInfo";
import Layout from "@/app/shared/components/Layout";
import useFetch from "@/hooks/useFetch";
import { IProductDetails } from "@/modules/interfaces/products.interface";
import { Fragment } from "react";
import ProductImagesPlaceholder from "./placeholders/ProductImagesPlaceholder";
import ProductInfoPlaceholder from "./placeholders/ProductInfoSkeleton";
import Link from "next/link";
import AddToFavoriteButton from "@/app/shared/components/AddToFavoriteButton";

const ProductDetails = ({ params }: { params: { id: string } }) => {
  const { data, loading, error } = useFetch<IProductDetails>(
    `/product/${params.id}`
  );

  if (error)
    return (
      <Layout showFooter={false}>
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
                  href="/"
                  className="mt-4 px-4 py-2 bg-gray-100 text-black hover:bg-black hover:text-white transition-all"
                >
                  Back to Homepage
                </Link>
                <Link
                  href="/products"
                  className="mt-4 px-4 py-2 bg-black text-white hover:bg-slate-700"
                >
                  Browse Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );

  return (
    <Fragment>
      {!loading ? (
        <Layout showFooter={false}>
          <div className="container mx-auto lg:w-[80%] py-[5%]">
            <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-[3%] items-start">
              <div className="flex flex-col lg:flex-row lg:w-[55%] w-full lg:p-6">
                {data ? (
                  <ProductImages
                    mainImage={data?.images[0]}
                    thumbnails={data?.images}
                  />
                ) : null}
              </div>

              <div className="lg:w-[45%] w-full lg:p-6 lg:pt-10 pt-10 py-6 px-4 mt-6 lg:mt-0 relative border-2 border-[#D9D9D9]">
                <div className="absolute top-0 right-0">
                  {data && <AddToFavoriteButton products={data} />}
                </div>

                {data && <ProductInfo key={data.id} products={data} />}
              </div>
            </div>
          </div>
        </Layout>
      ) : (
        <Layout showFooter={false}>
          <div className="container mx-auto lg:w-[80%] py-[5%]">
            <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-[3%] items-start">
              <div className="flex flex-col lg:flex-row lg:w-2/4 w-full lg:p-6">
                <ProductImagesPlaceholder />
              </div>

              <div className="lg:w-[30%] w-full lg:p-6 lg:pt-10 pt-10 py-6 px-4 mt-6 lg:mt-0 border-2 border-[#D9D9D9]">
                <ProductInfoPlaceholder />
              </div>
            </div>
          </div>
        </Layout>
      )}
    </Fragment>
  );
};

export default ProductDetails;
