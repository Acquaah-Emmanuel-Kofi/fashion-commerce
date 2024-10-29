"use client";

import React, { useState } from "react";
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
  rowsPerPage?: number; // Optional prop to define the initial rows per page
}

const Table: React.FC<TableProps> = ({
  title,
  data,
  columns,
  rowsPerPage = 5,
}) => {
  const pathname = usePathname();

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPageState, setRowsPerPage] = useState(rowsPerPage);

  // Calculate pagination details
  const indexOfLastRow = currentPage * rowsPerPageState;
  const indexOfFirstRow = indexOfLastRow - rowsPerPageState;
  const currentData = data.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(data.length / rowsPerPageState);

  // Change page handler
  const handleChangePage = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Change rows per page handler
  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1); // Reset to first page after changing rows per page
  };

  // Check if data is empty
  const isEmpty = data.length === 0;

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
          {isEmpty ? (
            // Render empty message and SVG if no data
            <tr>
              <td colSpan={columns.length} className="py-10">
                <div className="flex flex-col items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-24 w-24 text-gray-400 mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 14l2-2 4 4m0 0l6-6M15 14l-2-2-4 4m-4 0v6m0 0H3m0 0h6m-3 0h.01"
                    />
                  </svg>
                  <p className="text-gray-500 text-lg">No data available</p>
                </div>
              </td>
            </tr>
          ) : (
            currentData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-t hover:shadow-md cursor-pointer fade-down"
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
            ))
          )}
        </tbody>
      </table>

      {/* Pagination controls */}
      {!isEmpty && (
        <div className="flex justify-between items-center mt-4">
          {/* Rows per page selector */}
          <div className="flex items-center">
            <span className="mr-2">Rows per page:</span>
            <select
              value={rowsPerPageState}
              onChange={handleRowsPerPageChange}
              className="border p-1 outline-none"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
          </div>

          {/* Pagination buttons */}
          <div className="flex items-center space-x-2">
            <button
              className="px-4 py-2 border bg-gray-200"
              onClick={() => handleChangePage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="px-4 py-2 bg-gray-200"
              onClick={() => handleChangePage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
