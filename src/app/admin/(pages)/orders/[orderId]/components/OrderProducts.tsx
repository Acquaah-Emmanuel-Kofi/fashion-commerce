import Table from "@/app/admin/(components)/Table";
import CurrencyDisplay from "@/app/shared/components/CurrencyDisplay";
import { IOrderProduct } from "@/modules/interfaces/order.interface";
import React from "react";

type IProps = {
  products: IOrderProduct[];
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
      product: item.product.name,
      productId: `#${item.product.id}`,
      quantity: item.quantity,
      total: (
        <CurrencyDisplay
          amount={Number(item.product.price) * item.quantity}
          className="font-semibold"
        />
      ),
    };
  });

  return (
    <div className="p-4 bg-white">
      <Table title="Products" data={orders} columns={columns} />
    </div>
  );
};

export default OrderProducts;
