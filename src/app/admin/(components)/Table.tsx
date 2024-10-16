"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface TableColumn {
  header: string;
  accessor: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render?: (data: any) => JSX.Element | string;
}

interface TableProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  columns: TableColumn[];
  title: string;
}

const Table: React.FC<TableProps> = ({ title, data, columns }) => {
  const pathname = usePathname();
  return (
    <div className="overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4 font-beatrice">{title}</h2>
      <table className="min-w-full text-left text-base">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} className="p-4 text-gray-600 font-medium">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-t hover:shadow-md cursor-pointer"
            >
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="py-6 px-4 font-semibold">
                  {!pathname.startsWith("/admin/orders/") ? (
                    <Link
                      href={`/admin/orders/${row["orderId"]}`}
                      className="block w-full h-full"
                      passHref
                    >
                      {column.render
                        ? column.render(row[column.accessor])
                        : column.accessor === "orderId"
                        ? `#${row["orderId"]}`
                        : row[column.accessor]}
                    </Link>
                  ) : column.render ? (
                    column.render(row[column.accessor])
                  ) : (
                    row[column.accessor]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
