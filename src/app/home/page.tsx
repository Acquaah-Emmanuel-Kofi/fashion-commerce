import { getNewCollections, getNewThisWeek } from "@/services/products/api";
import Hero from "./components/Hero";
import LastYearCollections from "./components/LastYearCollections";
import { Fragment, Suspense } from "react";
import ApproachSection from "./components/ApproachSection";
import NewThisWeek from "./components/NewThisWeek";
import LoadingOverlay from "../shared/components/LoadingOverlay";

export default async function LandingPage() {
  const newCollections = await getNewCollections();
  const newThisWeek = await getNewThisWeek();

  return (
    <Fragment>
      <Hero products={newCollections} />
      <Suspense fallback={<LoadingOverlay isLoading={true} />}>
        <NewThisWeek products={newThisWeek} />
      </Suspense>
      <LastYearCollections />
      <ApproachSection />
    </Fragment>
  );
}
