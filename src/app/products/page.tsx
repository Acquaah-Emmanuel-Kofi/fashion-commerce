import ProductsPage from "./components/ProductsPage";
import Layout from "../shared/components/Layout";

export default function Products() {
  return (
      <Layout showFooter={false}>
        <ProductsPage />
      </Layout>
  );
}
