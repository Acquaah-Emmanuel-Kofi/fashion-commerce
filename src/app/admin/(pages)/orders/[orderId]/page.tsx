import HeaderTitle from "@/app/admin/(components)/HeaderTitle";
import Breadcrumb from "@/app/shared/components/Breadcrumb";
import React, { Fragment } from "react";
import OrderDetailsInfo from "./components/OrderDetailsInfo";
import OrderProducts from "./components/OrderProducts";
import OrderTotalSummary from "./components/OrderTotalSummary";

const breadcrumbItems = [
  { label: "Order List", href: "/admin/orders" },
  { label: "Order Details", href: "" },
];

export default function OrderDetails({
  params,
}: {
  params: { orderId: string };
}) {
  const orderDetails = {
    orderId: `${params.orderId}`,
    customer: {
      name: "Shristi Singh",
      email: "shristi@gmail.com",
      phone: "091 904 231 1212",
    },
    orderInfo: {
      shippingMethod: "Next Express",
      paymentMethod: "Paypal",
      status: "Pending",
    },
    deliveryAddress: {
      address: "Dharam Colony",
      city: "Gurgaon",
      region: "Haryana",
      country: "India",
    },
    paymentInfo: {
      cardType: "MasterCard",
      maskedCardNumber: "**** **** **** 6557",
      businessName: "Shristi Singh",
      phone: "091 904 231 1212",
    },
    orderDate: {
      start: "Feb 16, 2022",
      end: "Feb 20, 2022",
    },
  };

  return (
    <section className="space-y-6 pb-6">
      <header>
        <HeaderTitle title="Order Details" />
        <Breadcrumb items={breadcrumbItems} />
      </header>

      <OrderDetailsInfo {...orderDetails} />
      <OrderProducts />

      <div className="flex lg:justify-end">
        <OrderTotalSummary />
      </div>
    </section>
  );
}
