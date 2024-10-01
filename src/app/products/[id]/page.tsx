"use client";

import img1 from "../../../../public/images/product_1.png";
import img2 from "../../../../public/images/product_2.png";
import ProductImages from "./components/ProductImages";
import ProductInfo from "./components/ProductInfo";
import AddToCartButton from "./components/AddToCartButton";
import Layout from "@/app/shared/components/Layout";
import AddToFavoriteButton from "@/app/shared/components/AddToFavoriteButton";

const thumbnails = [img1, img2];

const ProductDetails = ({ params }: { params: { id: string } }) => {

  return (
    <Layout showFooter={false}>
      <div className="container mx-auto lg:w-[80%] py-[5%]">
        <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-[3%] items-start">
          <div className="flex flex-col lg:flex-row lg:w-2/4 w-full lg:p-6">
            <ProductImages mainImage={img1} thumbnails={thumbnails} />
          </div>

          <div className="lg:w-[30%] w-full lg:p-6 lg:pt-10 pt-10 py-6 px-4 mt-6 lg:mt-0 relative border-2 border-[#D9D9D9]">
            <div className="absolute top-0 right-0">
              <AddToFavoriteButton />
            </div>

            <ProductInfo />

            <AddToCartButton productId={params.id} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
