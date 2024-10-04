import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({
  children,
  showFooter = true,
}: Readonly<{ children: React.ReactNode; showFooter?: boolean }>) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;
