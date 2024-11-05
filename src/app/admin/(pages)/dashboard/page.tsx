"use client";

import React, { useEffect, useState } from "react";
import StatsCard from "../../(components)/StatsCard";
import RecentOrders from "./components/RecentOrders";
import Breadcrumb from "@/app/shared/components/Breadcrumb";
import HeaderTitle from "../../(components)/HeaderTitle";
import Graph from "./components/Graph";
import { fetchDataFromApi } from "@/services/api";
import { ApiResponse } from "@/modules/interfaces/common.interface";
import { IStats } from "@/modules/interfaces/analytics.interface";
import { getPreviousAndCurrentDate } from "@/app/shared/helpers/functions.helper";
import toast from "react-hot-toast";

const breadcrumbItems = [{ label: "Dashboard", href: "" }];

export default function Dashboard() {
  const PERCENTAGE = 100;
  const [statsData, setStatsData] = useState<IStats>({
    cancelledOrders: 0,
    deliveredOrders: 0,
    pendingOrders: 0,
    totalOrder: 0,
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);

    try {
      const fetchAnalytics = async () => {
        const query: ApiResponse<IStats> = await fetchDataFromApi(
          "/admin/dashboard/order/analytics"
        );
        setStatsData(query.data);
        setIsLoading(false);
      };

      fetchAnalytics();
    } catch (error) {
      setIsLoading(false);

      toast.error(`Something went wrong. ${error}`);
    }
  }, []);

  const stats = [
    {
      title: "Total Orders",
      value: statsData.totalOrder,
      percentage: statsData.totalOrder / PERCENTAGE,
    },
    {
      title: "Pending Orders",
      value: statsData.pendingOrders,
      percentage: statsData.pendingOrders / PERCENTAGE,
    },
    {
      title: "Delivered Orders",
      value: statsData.deliveredOrders,
      percentage: statsData.deliveredOrders / PERCENTAGE,
    },
    {
      title: "Cancelled Orders",
      value: statsData.cancelledOrders,
      percentage: statsData.cancelledOrders / PERCENTAGE,
    },
  ];

  return (
    <div className="space-y-6">
      <header>
        <HeaderTitle title="Dashboard" />
        <div className="flex justify-between items-center">
          <Breadcrumb items={breadcrumbItems} />
          <p className="font-beatrice text-sm font-semibold">
            {getPreviousAndCurrentDate()}
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
            isLoading={isLoading}
          />
        ))}
      </div>

      <Graph />

      <RecentOrders />
    </div>
  );
}
