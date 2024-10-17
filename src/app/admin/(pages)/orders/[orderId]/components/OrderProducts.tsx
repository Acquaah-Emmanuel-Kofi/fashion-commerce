import Table from "@/app/admin/(components)/Table";
import { IProductDetails } from "@/modules/interfaces/products.interface";
import React from "react";

type IProps = {
  products: IProductDetails[];
};

const OrderProducts: React.FC<IProps> = ({ products }) => {
  const columns = [
    { header: "Product", accessor: "product" },
    { header: "Product ID", accessor: "productId" },
    { header: "Quantity", accessor: "quantity" },
    { header: "Total", accessor: "total" },
  ];

  const orders = products?.map((item) => {
    return {
      product: item.name,
      productId: `#${item.id}`,
      quantity: products.length || 1,
      total: `GHS${item.price}`,
    };
  });

  return (
    <div className="p-4 bg-white">
      <Table title="Products" data={orders} columns={columns} />
    </div>
  );
};

export default OrderProducts;
