import NewProducts from "./homepage/components/NewProducts";
import Hero from "./homepage/components/Hero";
import Layout from "./shared/components/Layout";
import { getNewCollections, getNewThisWeek } from "@/services/products/products";

export default async function Home() {
  const newCollections = await getNewCollections();
  const newThisWeek = await getNewThisWeek();

  return (
    <Layout showFooter={true}>
      <Hero products={newCollections} />
      <NewProducts products={newThisWeek} />
    </Layout>
  );
}
