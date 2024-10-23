import React from "react";
import Table from "../../../(components)/Table";
import { useOrders } from "@/hooks/useOrders";
import { IOrder } from "@/modules/interfaces/order.interface";
import { formatDate } from "@/app/shared/helpers/functions.helper";
import TableSkeletonPlaceholder from "@/app/admin/(components)/TableSkeletonPlaceholder";

const RecentPurchases = ({ filterValue }: { filterValue: string }) => {
  const { orders, loading, error } = useOrders();

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
    const firstProductName = order.products[0].product.name || "N/A";

    const totalAmount = order.products.reduce(
      (sum, products) => sum + Number(products.product.price),
      0
    );

    return {
      product: firstProductName,
      orderId: order.id,
      date: formatDate(order.dateCreated),
      customer: `${order.shippingAddress.firstname} ${order.shippingAddress.lastname}`,
      status: order.orderStatus,
      amount: `GHS${totalAmount.toFixed(2)}`,
    };
  });

  if (loading) {
    return (
      <div className="p-4 bg-white">
        <TableSkeletonPlaceholder
          title="Recent Purchases"
          columns={columns}
          rows={10}
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-white">
        <TableSkeletonPlaceholder
          title="Recent Purchases"
          columns={columns}
          rows={10}
          errorMessage="Something went wrong. We couldn't fetch the data."
        />
      </div>
    );
  }

  return (
    <div className="p-4 bg-white">
      <Table title="Recent Purchases" data={data} columns={columns} />
    </div>
  );
};

export default RecentPurchases;
