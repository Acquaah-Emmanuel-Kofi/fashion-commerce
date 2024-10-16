"use client";

import React from "react";
import { TableColumn } from "../interfaces/table.interface";

interface TableSkeletonProps {
  columns: TableColumn[];
  rows: number;
  title: string;
}

const TableSkeletonPlaceholder: React.FC<TableSkeletonProps> = ({
  columns,
  rows,
  title,
}) => {
  return (
    <div className="overflow-x-auto">
      {/* Title */}
      <h2 className="text-xl font-semibold mb-4 font-beatrice">{title}</h2>

      <table className="min-w-full text-left text-base">
        {/* Table header */}
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} className="p-4 text-gray-600 font-medium">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        {/* Table body with skeleton rows */}
        <tbody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-t hover:shadow-md cursor-pointer"
            >
              {columns?.map((_, colIndex) => (
                <td key={colIndex} className="py-6 px-4 font-semibold">
                  <div className="h-6 w-full bg-gray-200 animate-pulse rounded"></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSkeletonPlaceholder;
