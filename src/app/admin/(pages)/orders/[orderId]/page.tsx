"use client";

import HeaderTitle from "@/app/admin/(components)/HeaderTitle";
import Breadcrumb from "@/app/shared/components/Breadcrumb";
import React, { useEffect, useState } from "react";
import OrderDetailsInfo from "./components/OrderDetailsInfo";
import OrderProducts from "./components/OrderProducts";
import OrderTotalSummary from "./components/OrderTotalSummary";
import { ApiResponse } from "@/modules/interfaces/common.interface";
import { IOrder } from "@/modules/interfaces/order.interface";
import { fetchDataFromApi } from "@/services/api";

const breadcrumbItems = [
  { label: "Order List", href: "/admin/orders" },
  { label: "Order Details", href: "" },
];

export default async function OrderDetails({
  params,
}: {
  params: { orderId: string };
}) {
  const [orderDetails, setOrderDetails] = useState<IOrder>();

  useEffect(() => {
    const fetchOrders = async () => {
      const query: ApiResponse<IOrder> = await fetchDataFromApi(
        `/order/get?id=${params.orderId}`
      );
      const order = query.data;
      setOrderDetails(order);
    };

    fetchOrders();
  }, []);

  const totalAmount = orderDetails?.products.reduce(
    (sum, product) => sum + Number(product.price),
    0
  );

  return (
    <section className="space-y-6 pb-6">
      <header>
        <HeaderTitle title="Order Details" />
        <Breadcrumb items={breadcrumbItems} />
      </header>

      {orderDetails && <OrderDetailsInfo {...orderDetails} />}

      {orderDetails && (
        <OrderProducts products={orderDetails.products} />
      )}

      <div className="flex lg:justify-end">
        <OrderTotalSummary subTotal={totalAmount || 0} totalAmount={totalAmount || 0} />
      </div>
    </section>
  );
}
