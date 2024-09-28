import Layout from "./shared/components/Layout";
import ProductSlider from "./shared/components/ProductSlider";
import Sidebar from "./shared/components/Sidebar";

export default function Home() {
  return (
    <Layout showFooter={true}>
      <div className="flex flex-col lg:flex-row">
        <Sidebar />
        <div className="w-full lg:w-3/4 p-4 lg:p-6 hidden lg:block">
          <ProductSlider />
        </div>
      </div>
    </Layout>
  );
}
