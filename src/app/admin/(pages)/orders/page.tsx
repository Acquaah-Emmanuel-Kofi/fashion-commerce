"use client";

import Breadcrumb from "@/app/shared/components/Breadcrumb";
import CustomSelect from "@/app/shared/components/CustomSelect";
import React, { useState } from "react";
import RecentPurchases from "./components/RecentPurchases";
import HeaderTitle from "../../(components)/HeaderTitle";

const breadcrumbItems = [{ label: "Orders List", href: "" }];

const options = [
  { value: "", label: "All" },
  { value: "DELIVERED", label: "Delivered" },
  { value: "CANCELLED", label: "Cancelled" },
  { value: "PENDING", label: "Pending" },
];

export default function Orders() {
  const [selectedType, setSelectedType] = useState<string>("");

  const handleSelect = (value: string) => {
    setSelectedType(value);
  };

  return (
    <section className="space-y-6 pb-6">
      <header>
        <HeaderTitle title="Orders List" />
        <div className="flex justify-between items-center">
          <Breadcrumb items={breadcrumbItems} />
          <p className="font-beatrice text-sm font-semibold">
            Oct 11,2023 - Nov 11,2022
          </p>
        </div>
      </header>

      <div className="flex justify-end">
        <div className="lg:w-[200px] w-full">
          <CustomSelect
            options={options}
            onSelect={handleSelect}
            placeholder="Change status"
          />
        </div>
      </div>

      <RecentPurchases filterValue={selectedType} />
    </section>
  );
}
