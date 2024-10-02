import {
  getNewCollections,
  getNewThisWeek,
} from "@/services/products/products";
import Hero from "./components/Hero";
import NewProducts from "./components/NewProducts";
import LastYearCollections from "./components/LastYearCollections";
import { Fragment } from "react";

export default async function LandingPage() {
  const newCollections = await getNewCollections();
  const newThisWeek = await getNewThisWeek();

  return (
    <Fragment>
      <Hero products={newCollections} />
      <NewProducts products={newThisWeek} />
      <LastYearCollections />
    </Fragment>
  );
}
