import NewProducts from "./homepage/components/NewProducts";
import Hero from "./homepage/components/Hero";
import Layout from "./shared/components/Layout";
import { IProducts } from "@/modules/interfaces/products.interface";
import { fetchDataFromApi } from "@/services/api";

export default async function Home() {
  const response: IProducts = await fetchDataFromApi("/product/new-collection");
  const products = response.data;
  
  if (!response) {
    return <div>Error fetching data.</div>;
  }

  return (
    <Layout showFooter={true}>
      <Hero products={products} />
      <NewProducts />
    </Layout>
  );
}
