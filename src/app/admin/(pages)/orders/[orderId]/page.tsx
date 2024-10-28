import HeaderTitle from "@/app/admin/(components)/HeaderTitle";
import Breadcrumb from "@/app/shared/components/Breadcrumb";
import React from "react";
import OrderDetailsInfo from "./components/OrderDetailsInfo";
import OrderProducts from "./components/OrderProducts";
import OrderTotalSummary from "./components/OrderTotalSummary";
import { ApiResponse } from "@/modules/interfaces/common.interface";
import { IOrderSummary } from "@/modules/interfaces/order.interface";
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
  const query: ApiResponse<IOrderSummary> = await fetchDataFromApi(
    `/order/get?id=${params.orderId}`
  );
  const { order, subTotal, totalPrice, shippingCost, tax } = query.data;

  return (
    <section className="space-y-6 pb-6">
      <header>
        <HeaderTitle title="Order Details" />
        <Breadcrumb items={breadcrumbItems} />
      </header>

      <OrderDetailsInfo {...order} />

      <OrderProducts products={order?.products} />

      <div className="flex lg:justify-end">
        <OrderTotalSummary
          subTotal={subTotal}
          shippingCost={shippingCost}
          tax={tax}
          totalAmount={totalPrice}
        />
      </div>
    </section>
  );
}
