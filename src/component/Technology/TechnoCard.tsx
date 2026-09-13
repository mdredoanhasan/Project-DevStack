import type { TechnoType } from "../../Types/TechnoType";
import star from "../../assets/star.png";
import { IoCheckmarkSharp } from "react-icons/fa6";
import { toast } from "react-toastify";

interface TechnoCardProps {
  techno: TechnoType;
  isInStack: boolean;
  onAddToStack: () => void;
}

const TechnoCard = ({ techno, isInStack, onAddToStack }: TechnoCardProps) => {
  const handleClick = () => {
    if (isInStack) return;
    onAddToStack();
    toast(`${techno.name} Successfully added`);
  };

  return (
    <div className="mb-12 w-full rounded-2xl border border-gray-200 p-5 lg:w-86">
      <figure className="flex justify-between">
        <img src={techno.icon} className="w-9 mb-6" alt="Technology Icon" />
        <button
          className={`text-[13px] w-18.75 h-6.25 font-bold ${techno.bgColor} rounded-sm ${techno.textColor}`}
        >
          {techno.badge}
        </button>
      </figure>
      <h2 className="card-title mb-4 font-bold">{techno.name}</h2>
      <p className="mb-6 text-[#475569] text-[13px]">{techno.description}</p>

      <div className="flex justify-between mb-4">
        <button className="w-25 h-8 bg-[#475569]/10 rounded-lg text-[#475569]">
          {techno.category}
        </button>
        <p className="text-[#475569]">{techno.difficulty}</p>
        <div className="flex">
          <img src={star} className="w-3.5 h-3.5 mt-1.25 mr-1" />
          <p>{techno.rating}</p>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          className={`btn rounded-xl w-75.5 ${
            isInStack
              ? " text-pink-500 border-transparent bg-pink-200/40 "
              : "bg-black text-white border-transparent"
          }`}
          onClick={handleClick}
        >
          {isInStack ? (
            <>
              <IoCheckmarkSharp /> Added to Stack
            </>
          ) : (
            "Add to Stack"
          )}
        </button>
      </div>
    </div>
  );
};

export default TechnoCard;
