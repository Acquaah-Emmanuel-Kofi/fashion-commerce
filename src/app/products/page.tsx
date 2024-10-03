import ProductsPage from "./components/ProductsPage";
import Layout from "../shared/components/Layout";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
];

export default function Products() {
  return (
      <Layout showFooter={false}>
        <ProductsPage />
      </Layout>
  );
}
