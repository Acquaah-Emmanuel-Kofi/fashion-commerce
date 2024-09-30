import NewProducts from "./homepage/components/NewProducts";
import Hero from "./homepage/components/Hero";
import Layout from "./shared/components/Layout";

export default function Home() {
  return (
    <Layout showFooter={true}>
      <Hero />
      <NewProducts />
    </Layout>
  );
}
