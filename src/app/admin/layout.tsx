"use client";

import { Fragment, useState } from "react";
import DashboardNavbar from "./(components)/DashboardNavbar";
import DashboardSidebar from "./(components)/DashboardSidebar";
import { RootState, useAppSelector } from "@/redux/store";
import LoadingOverlay from "../shared/components/LoadingOverlay";

export default function DasboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const isLoading = useAppSelector(
      (state: RootState) => state.loadingSlice.isLoading
  );
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <LoadingOverlay isLoading={isLoading} />
      <div className="flex">
        {/* Sidebar */}
        <DashboardSidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

        {/* Main Content Area */}
        <div className="ml-0 lg:ml-64 w-full">
          <header className="sticky top-0 z-40">
            <DashboardNavbar toggleSidebar={toggleSidebar} />
          </header>
          <main className="p-4 bg-gray-100 min-h-[calc(100vh-75px)]">
            {children}
          </main>
        </div>
      </div>
    </Fragment>
  );
}
