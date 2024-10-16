import React from "react";
import Table from "../../../(components)/Table";
import { useOrders } from "@/hooks/useOrders";
import { IOrder } from "@/modules/interfaces/order.interface";
import { formatDate } from "@/app/shared/helpers/functions.helper";

const RecentPurchases = ({ filterValue }: { filterValue: string }) => {
  const { orders, loading, error } = useOrders();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const columns = [
    { header: "Product", accessor: "product" },
    { header: "Order ID", accessor: "orderId" },
    { header: "Date", accessor: "date" },
    { header: "Customer Name", accessor: "customer" },
    { header: "Status", accessor: "status" },
    { header: "Amount", accessor: "amount" },
  ];

  const filteredOrders = filterValue
    ? orders.filter((order: IOrder) => order.orderStatus === filterValue)
    : orders;

  const data = filteredOrders?.map((order: IOrder) => {
    const firstProductName = order.products[0]?.name || "N/A";

    const totalAmount = order.products.reduce(
      (sum, product) => sum + Number(product.price),
      0
    );

    return {
      product: firstProductName,
      orderId: `#${order.id}`,
      date: formatDate(order.dateCreated),
      customer: `${order.shippingAddress.firstname} ${order.shippingAddress.lastname}`,
      status: order.orderStatus,
      amount: `GHS${totalAmount.toFixed(2)}`,
    };
  });

  return (
    <div className="p-4 bg-white">
      <Table title="Recent Purchases" data={data} columns={columns} />
    </div>
  );
};

export default RecentPurchases;
