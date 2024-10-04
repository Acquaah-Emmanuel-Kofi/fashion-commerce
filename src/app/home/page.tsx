import { getNewCollections, getNewThisWeek } from "@/services/products/api";
import Hero from "./components/Hero";
import NewProducts from "./components/NewProducts";
import LastYearCollections from "./components/LastYearCollections";
import { Fragment, Suspense } from "react";
import ApproachSection from "./components/ApproachSection";

export default async function LandingPage() {
  const newCollections = await getNewCollections();
  const newThisWeek = await getNewThisWeek();

  return (
    <Fragment>
      <Hero products={newCollections} />
      <Suspense fallback={<div>Loading...</div>}>
        <NewProducts products={newThisWeek} />
      </Suspense>
      <LastYearCollections />
      <ApproachSection />
    </Fragment>
  );
}
