"use client";

import Brand from "@/app/shared/components/Brand";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaTachometerAlt, FaBox, FaList } from "react-icons/fa";

export default function DashboardSidebar({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) {
  const route = usePathname();

  const isActive = (pathname: string) => route === pathname;

  return (
    <div
      className={`fixed inset-0 z-50 transition-transform md:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } bg-white border-r p-4 md:block w-64 h-full`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2 p-4">
          <Brand />
        </div>

        <button
          type="button"
          onClick={toggleSidebar}
          className="md:hidden block text-gray-600"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>

      <nav className="mt-6">
        <ul>
          <li
            onClick={toggleSidebar}
            className={`mb-4 flex items-center px-6 py-2 font-beatrice ${
              isActive("/admin/dashboard")
                ? "text-white bg-black rounded font-bold"
                : ""
            }`}
          >
            <FaTachometerAlt className="mr-2" />
            <Link
              href="/admin/dashboard"
              className={
                isActive("/admin/dashboard")
                  ? "text-white bg-black rounded"
                  : ""
              }
            >
              Dashboard
            </Link>
          </li>

          {/* All Products Link */}
          <li
            onClick={toggleSidebar}
            className={`mb-4 flex items-center px-6 py-2 font-beatrice ${
              isActive("/admin/products")
                ? "text-white bg-black rounded font-bold"
                : ""
            }`}
          >
            <FaBox className="mr-2" />
            <Link
              href="/admin/products"
              className={
                isActive("/admin/products") ? "text-white bg-black rounded" : ""
              }
            >
              All Products
            </Link>
          </li>

          {/* Order List Link */}
          <li
            onClick={toggleSidebar}
            className={`mb-4 flex items-center px-6 py-2 font-beatrice ${
              isActive("/admin/orders")
                ? "text-white bg-black rounded font-bold"
                : ""
            }`}
          >
            <FaList className="mr-2" />
            <Link
              href="/admin/orders"
              className={
                isActive("/admin/orders") ? "text-white bg-black rounded" : ""
              }
            >
              Order List
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
