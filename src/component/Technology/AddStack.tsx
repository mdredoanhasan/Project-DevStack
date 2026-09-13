import type { TechnoType } from "../../Types/TechnoType";
import { FaXmark } from "react-icons/fa6";

interface AddStackProps {
  stack: { techno: TechnoType; idx: number }[];
  onRemove: (idx: number) => void;
  onRemoveAll: () => void;
}

const AddStack = ({ stack, onRemove, onRemoveAll }: AddStackProps) => {
  return (
    <div>
      <h1 className="font-bold text-xl">Your Stack</h1>

      {stack.length === 0 ? (
        <>
          <p className="text-[#475569] mt-2 mb-2">No technologies selected yet</p>
          <p className="badge badge-neutral badge-dash text-[#475569]/40 w-75 h-23">
            Your stack is empty
          </p>
        </>
      ) : (
        <>
          <p className="text-[#475569] mt-2 mb-2">
            {stack.length} Technology Selected
          </p>

          <div className="flex flex-col gap-2 mb-4">
            {stack.map(({ techno, idx }) => (
              <div
                key={idx}
                className="flex items-center justify-between border border-gray-200 rounded-lg p-2"
              >
                <div className="flex items-center gap-2">
                  <img src={techno.icon} className="w-6 h-6" alt={techno.name} />
                  <div>
                    <p className="font-semibold text-sm">{techno.name}</p>
                    <p className="text-xs text-[#475569]">{techno.category}</p>
                  </div>
                </div>
                <button onClick={() => onRemove(idx)}>
                  <FaXmark className="text-[#475569]" />
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={onRemoveAll}
            className="btn btn-outline text-red-500 border-red-300 w-full rounded-lg"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
};

export default AddStack;
