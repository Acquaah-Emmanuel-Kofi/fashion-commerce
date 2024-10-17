"use client";

import React from "react";
import { TableColumn } from "../interfaces/table.interface";

interface TableSkeletonProps {
  columns: TableColumn[];
  rows: number;
  title: string;
  errorMessage?: string;
}

const TableSkeletonPlaceholder: React.FC<TableSkeletonProps> = ({
  columns,
  rows,
  title,
  errorMessage,
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

        {errorMessage ? (
          <tbody>
            <tr>
              <td colSpan={columns.length}>
                <div className="flex flex-col items-center justify-center py-16">
                  <svg
                    className="w-16 h-16 text-gray-400 mb-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3v18h18V3H3zM9 9l3 3m0 0l3-3m-3 3v6"
                    />
                  </svg>

                  <p className="text-lg font-semibold text-gray-500">
                    {errorMessage}
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        ) : (
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
        )}
      </table>
    </div>
  );
};

export default TableSkeletonPlaceholder;
