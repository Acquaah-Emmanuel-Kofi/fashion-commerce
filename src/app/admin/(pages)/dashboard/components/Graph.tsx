"use client";

import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { fetchDataFromApi } from "@/services/api";
import { ApiResponse } from "@/modules/interfaces/common.interface";
import { IAnalytics } from "@/modules/interfaces/analytics.interface";
import toast from "react-hot-toast";
import { USER_CURRENCY } from "@/app/shared/helpers/constants.helper";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const Graph = () => {
  const [labels, setLabels] = useState<string[]>([]);
  const [salesData, setSalesData] = useState<number[]>([]);

  useEffect(() => {
    try {
      const fetchAnalytics = async () => {
        const query: ApiResponse<IAnalytics> = await fetchDataFromApi(
          "/admin/dashboard/order/graph-analytics"
        );
        setLabels(query.data.labels);
        setSalesData(query.data.data);
      };

      fetchAnalytics();
    } catch (error) {
      toast.error(`Something went wrong. ${error}`);
    }
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: "Sale Graph",
        data: salesData,
        borderColor: "#000000",
        backgroundColor: "rgba(0, 123, 255, 0.1)",
        fill: true,
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        mode: "index" as const,
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        title: {
          display: true,
          text: `Sales (${localStorage.getItem(USER_CURRENCY) || "GHS"})`,
        },
      },
    },
  };

  return (
    <div className="bg-white p-4">
      <Line data={data} options={options} height={300} />
    </div>
  );
};

export default Graph;
