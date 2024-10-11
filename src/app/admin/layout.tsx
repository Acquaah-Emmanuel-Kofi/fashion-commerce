import DashboardNavbar from "./(components)/DashboardNavbar";
import DashboardSidebar from "./(components)/DashboardSidebar";

export default function DasboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content Area */}
      <div className="ml-0 lg:ml-64 w-full">
        <header className="sticky top-0">
          <DashboardNavbar />
        </header>
        <main className="p-4 bg-gray-100 min-h-[calc(100vh-75px)]">
          {children}
        </main>
      </div>
    </div>
  );
}
