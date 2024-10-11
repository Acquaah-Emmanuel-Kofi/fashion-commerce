"use client";

import Brand from "@/app/shared/components/Brand";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaTachometerAlt, FaBox, FaList } from "react-icons/fa";

export default function DashboardSidebar() {
  const route = usePathname();

  const isActive = (pathname: string) => route === pathname;

  return (
    <div className="w-64 h-full bg-white border-r p-4 fixed hidden md:block">
      <div className="flex items-center space-x-2 p-4">
        <Brand />
      </div>
      <nav className="mt-6">
        <ul>
          <li
            className={`mb-4 flex items-center px-6 py-2 ${
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
            className={`mb-4 flex items-center px-6 py-2 ${
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
            className={`mb-4 flex items-center px-6 py-2 ${
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
