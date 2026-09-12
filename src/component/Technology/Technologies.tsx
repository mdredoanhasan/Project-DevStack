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
      <h1 className="text-4xl font-bold mb-3">Explore the <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span></h1>
      <p className="text-[17px] text-[#374151] mb-12">Pick one technology per category to build your ideal stack.</p>
      <AllTechno  technology={technology} />
    </div>
  );
}
