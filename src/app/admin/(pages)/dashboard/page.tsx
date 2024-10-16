import React from "react";
import StatsCard from "../../(components)/StatsCard";
import RecentOrders from "./components/RecentOrders";
import Breadcrumb from "@/app/shared/components/Breadcrumb";
import HeaderTitle from "../../(components)/HeaderTitle";
import Graph from "../products/components/Graph";

const breadcrumbItems = [
  { label: "Dashboard", href: "" },
];

export default function Dashboard() {
  const stats = [
    {
      title: "Total Orders",
      value: 100,
      percentage: 0.5,
    },
    {
      title: "Active Orders",
      value: 100,
      percentage: 0.5,
    },
    {
      title: "Completed Orders",
      value: 100,
      percentage: 0.5,
    },
    {
      title: "Return Orders",
      value: 100,
      percentage: 0.5,
    },
  ];
  return (
    <div className="space-y-6">
      <header>
        <HeaderTitle title="Dashboard" />
        <div className="flex justify-between items-center">
          <Breadcrumb items={breadcrumbItems} />
          <p className="font-beatrice text-sm font-semibold">
            Oct 11,2023 - Nov 11,2022
          </p>
        </div>
      </header>
      {/* Stats Cards */}
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
        {stats.map((stat) => (
          <StatsCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            percentage={stat.percentage}
          />
        ))}
      </div>

      <Graph />

      <RecentOrders />
    </div>
  );
}
