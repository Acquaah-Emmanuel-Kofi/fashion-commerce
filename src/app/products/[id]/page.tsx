"use client";

import ProductImages from "./components/ProductImages";
import ProductInfo from "./components/ProductInfo";
import AddToCartButton from "./components/AddToCartButton";
import Layout from "@/app/shared/components/Layout";
import AddToFavoriteButton from "@/app/shared/components/AddToFavoriteButton";
import useFetch from "@/hooks/useFetch";
import { IProductDetails } from "@/modules/interfaces/products.interface";
import ProductCardSkeleton from "@/app/shared/components/ProductCardSkeleton";
import ProductInfoSkeleton from "./components/ProductInfoSkeleton";
import { Fragment } from "react";

const ProductDetails = ({ params }: { params: { id: string } }) => {
  const { data, loading, error } = useFetch<IProductDetails>(
    `/product/${params.id}`
  );

  if (error) return <div>Error occured {error}</div>;

  return (
    <Fragment>
      {!loading ? (
        <Layout showFooter={false}>
          <div className="container mx-auto lg:w-[80%] py-[5%]">
            <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-[3%] items-start">
              <div className="flex flex-col lg:flex-row lg:w-2/4 w-full lg:p-6">
                {data ? (
                  <ProductImages
                    mainImage={data?.images[0]}
                    thumbnails={data?.images}
                  />
                ) : null}
              </div>

              <div className="lg:w-[30%] w-full lg:p-6 lg:pt-10 pt-10 py-6 px-4 mt-6 lg:mt-0 relative border-2 border-[#D9D9D9]">
                <div className="absolute top-0 right-0">
                  <AddToFavoriteButton />
                </div>

                {data && (
                  <ProductInfo
                    key={data.id}
                    name={data.name}
                    price={data.price}
                    description={data.description}
                    colors={data.colors}
                    sizes={data.sizes}
                    type={data.type}
                  />
                )}

                <AddToCartButton productId={params.id} />
              </div>
            </div>
          </div>
        </Layout>
      ) : (
        <Layout showFooter={false}>
          <div className="container mx-auto lg:w-[80%] py-[5%]">
            <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-[3%] items-start">
              <div className="flex flex-col lg:flex-row lg:w-2/4 w-full lg:p-6">
                <ProductCardSkeleton />
              </div>

              <div className="lg:w-[30%] w-full lg:p-6 lg:pt-10 pt-10 py-6 px-4 mt-6 lg:mt-0 border-2 border-[#D9D9D9]">
                <ProductInfoSkeleton />
              </div>
            </div>
          </div>
        </Layout>
      )}
    </Fragment>
  );
};

export default ProductDetails;
