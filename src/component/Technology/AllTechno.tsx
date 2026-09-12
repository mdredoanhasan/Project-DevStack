
import type { TechnoType } from "../../Types/TechnoType";

import AddStack from "./AddStack";
import TechnoCard from "./TechnoCard";

const AllTechno = ({ technology }: { technology: TechnoType[] }) => {

  return (
    <div className="grid grid-cols-4">
      <div className=" grid grid-cols-3 col-span-3 mr-6">
        {technology.map((techno:TechnoType,idx:number) => {
          return <TechnoCard key={idx} techno={techno} />;
        })}
      </div>

      <div className="col-span-1 border  border-gray-200 rounded-2xl p-5 mb-12 w-86 h-50">
        <AddStack />
      </div>
    </div>
  );
};

export default AllTechno;
