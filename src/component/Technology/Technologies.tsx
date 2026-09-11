import { use } from "react";
import type { TechnoType } from "../../Types/TechnoType";
import AllTechno from "./AllTechno";

interface TechnologiesProps {
  technoPromise: Promise<TechnoType[]>;
}

export default function Technologies({ technoPromise }: TechnologiesProps) {
  const technology = use(technoPromise);
  return (
    <div className="container mx-auto">
      <h1>Explore the Technologies</h1>
      <p>Pick one technology per category to build your ideal stack.</p>
      <AllTechno technology={technology} />
    </div>
  );
}
