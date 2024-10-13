import Table from "@/app/admin/(components)/Table";
import React from "react";

const OrderProducts = () => {
  const orders = [
    {
      product: "Lorem Ipsum",
      orderId: "#25424",
      quantity: 1,
      total: "GHS200.00",
    },
    {
      product: "Lorem Ipsum",
      orderId: "#25424",
      quantity: 4,
      total: "GHS200.00",
    },
    {
      product: "Lorem Ipsum",
      orderId: "#25424",
      quantity: 2,
      total: "GHS200.00",
    },
  ];

  const columns = [
    { header: "Product", accessor: "product" },
    { header: "Order ID", accessor: "orderId" },
    { header: "Quantity", accessor: "quantity" },
    { header: "Total", accessor: "total" },
  ];

  return (
    <div className="p-4 bg-white">
      <Table title="Products" data={orders} columns={columns} />
    </div>
  );
};

export default OrderProducts;
