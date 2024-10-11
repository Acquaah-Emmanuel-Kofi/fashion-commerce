import React from "react";
import Table from "../../../(components)/Table";

const RecentOrders = () => {
  const orders = [
    {
      product: "Lorem Ipsum",
      orderId: "#25426",
      date: "Nov 8th, 2023",
      customer: "Kavin",
      status: "Delivered",
      amount: "₹200.00",
    },
    {
      product: "Lorem Ipsum",
      orderId: "#25425",
      date: "Nov 7th, 2023",
      customer: "Komal",
      status: "Cancelled",
      amount: "₹200.00",
    },
    {
      product: "Lorem Ipsum",
      orderId: "#25424",
      date: "Nov 6th, 2023",
      customer: "Nikhil",
      status: "Delivered",
      amount: "₹200.00",
    },
  ];

  const columns = [
    { header: "Product", accessor: "product" },
    { header: "Order ID", accessor: "orderId" },
    { header: "Date", accessor: "date" },
    { header: "Customer Name", accessor: "customer" },
    { header: "Status", accessor: "status" },
    { header: "Amount", accessor: "amount" },
  ];

  return (
    <div className="p-4 bg-white">
      <Table title="Recent Orders" data={orders} columns={columns} />
    </div>
  );
};

export default RecentOrders;
