import { useState } from "react";
import type { TechnoType } from "../../Types/TechnoType";

import AddStack from "./AddStack";
import TechnoCard from "./TechnoCard";

const AllTechno = ({ technology }: { technology: TechnoType[] }) => {
  const [stack, setStack] = useState<{ techno: TechnoType; idx: number }[]>([]);

  const handleAddToStack = (techno: TechnoType, idx: number) => {
    const alreadyAdded = stack.some((item) => item.idx === idx);
    if (alreadyAdded) return;

    setStack((prev) => [...prev, { techno, idx }]);
  };

  const handleRemoveFromStack = (idx: number) => {
    setStack((prev) => prev.filter((item) => item.idx !== idx));
  };

  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
      <div className="grid grid-cols-1 gap-2 lg:col-span-3 lg:mr-6 lg:grid-cols-3">
        {technology.map((techno: TechnoType, idx: number) => {
          const isInStack = stack.some((item) => item.idx === idx);
          return (
            <TechnoCard
              key={idx}
              techno={techno}
              isInStack={isInStack}
              onAddToStack={() => handleAddToStack(techno, idx)}
            />
          );
        })}
      </div>

      <div className="col-span-1 mb-12 min-h-50 w-full self-start rounded-2xl border border-gray-200 p-5 lg:w-86">
        <AddStack
          stack={stack}
          onRemove={handleRemoveFromStack}
          onRemoveAll={handleRemoveAll}
        />
      </div>
    </div>
  );
};

export default AllTechno;
