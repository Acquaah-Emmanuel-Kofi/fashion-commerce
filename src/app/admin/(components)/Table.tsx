import React from "react";

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
            <tr key={rowIndex} className="border-t">
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="p-4 font-semibold">
                  {column.render
                    ? column.render(row[column.accessor])
                    : row[column.accessor]}
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
