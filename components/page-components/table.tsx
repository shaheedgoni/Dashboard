"use client";

import { useState } from "react";
import {
  LuChevronLeft,
  LuChevronRight,
  LuEllipsisVertical,
} from "react-icons/lu";

export enum TableColumnType {
  text,
  profilePicture,
  pills,
  action,
}

export type TableColumnProps =
  | {
      type?: "profilePicture" | "pills" | "action";
      value?: string;
      subValue?: string;
      pillColor?: "green" | "red" | "yellow" | "gray";
    }
  | string;

export interface TableRowProps {
  columns: TableColumnProps[];
}

interface tableProps {
  headerContent: string[];
  rowContent: TableRowProps[];
  rowsPerPage?: number;
}

export default function Table({
  headerContent,
  rowContent,
  rowsPerPage = 6,
}: tableProps) {
  const itemsPerPage = rowsPerPage > 0 ? rowsPerPage : 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(rowContent.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const presentedData = rowContent.slice(start, start + itemsPerPage);
  return (
    <>
      <div className="overflow-x-auto rounded-lg border border-gray-200 ">
        <table className="min-w-full divide-y divide-gray-200 bg-white text-sm">
          <thead className="bg-gray-50 text-left">
            <tr>
              {headerContent.map((header, index) => (
                <th key={index} className="px-6 py-3 font-medium text-gray-900">
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {presentedData.map((row, index) => (
              <tr key={index}>
                {row.columns.map((column, index) => (
                  <td
                    key={index}
                    className={`whitespace-nowrap ${typeof column !== "string" && column.type === "action" ? "px-2" : "px-6"} py-3 text-gray-500`}
                  >
                    {typeof column === "string" ? (
                      column
                    ) : column.type === "action" ? (
                      <button className="flex justify-center items-center w-8 h-8 outline-none rounded-full active:bg-gray-200 transition-colors">
                        <LuEllipsisVertical size={20} />
                      </button>
                    ) : column.type === "pills" ? (
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium
                       ${column.pillColor === "green" ? "bg-green-200 text-green-800" : ""}
                       ${column.pillColor === "red" ? "bg-red-200 text-red-800" : ""}
                       ${column.pillColor === "yellow" ? "bg-yellow-200 text-yellow-800" : ""}
                       ${column.pillColor === "gray" ? "bg-gray-200 text-gray-800" : ""}
                     `}
                      >
                        {column.value}
                      </span>
                    ) : column.type === "profilePicture" ? (
                      <>
                        <div className="font-medium text-gray-900">
                          {column.value}
                        </div>
                        <div className="text-gray-500 text-xs">
                          {column.subValue}
                        </div>
                      </>
                    ) : (
                      <div></div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between px-6 py-3 bg-white">
        <p className="text-sm text-gray-500">
          Showing {start + 1} - {""}
          {Math.min(start + itemsPerPage, rowContent.length)} of{" "}
          {rowContent.length} users
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage((p) => p - 1)}
            disabled={currentPage === 1}
            className="flex items-center gap-1 px-3 h-8 rounded-md text-sm text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:hover:bg-transparent"
          >
            <LuChevronLeft size={16} />
            Previous
          </button>
          <button
            onClick={() => setCurrentPage((p) => p + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center gap-1 px-3 h-8 rounded-md text-sm text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:hover:bg-transparent"
          >
            Next
            <LuChevronRight size={16} />
          </button>
        </div>
      </div>
    </>
  );
}
