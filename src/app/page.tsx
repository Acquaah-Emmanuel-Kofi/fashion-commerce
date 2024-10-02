import LandingPage from "./(homepage)/page";
import Layout from "./shared/components/Layout";

export default async function Home() {
  return (
    <Layout showFooter={true}>
      <LandingPage />
    </Layout>
  );
}
