import { useState } from "react";
import star from "../../assets/star.png";
import type { TechnoType } from "../../Types/TechnoType";
import { FaCheck } from "react-icons/fa6";
import {toast} from "react-toastify"

const TechnoCard = ({ techno }: { techno: TechnoType }) => {
  const [isStack, setIsStack] = useState(false);

  const handleClick = () => {
      setIsStack(true);
      toast(`${techno.name} Successfully added `)
      
  };
  return (
    <div className=" border  border-gray-200 rounded-2xl p-5 mb-12 w-86 ">
      <figure className="flex justify-between">
        <img src={techno.icon} className="w-9 mb-6" alt="Technology Icon" />
        <button className=" text-[13px] w-18.75 h-6.25 font-bold bg-[#475569]/10 rounded-sm text-[#475569]">
          {" "}
          {techno.badge}{" "}
        </button>
      </figure>
      <h2 className="card-title mb-4 font-bold">{techno.name}</h2>
      <p className="mb-6 text-[#475569]">{techno.description}</p>

      <div className="flex justify-between  mb-4">
        <button className="w-25 h-8 bg-[#475569]/10 rounded-lg text-[#475569]">
          {techno.category}
        </button>
        <p className="text-[#475569]">{techno.difficulty}</p>
        <div className="flex ">
          <img src={star} className="w-3.5 h-3.5 mt-1.25 mr-1"></img>
          <p>{techno.rating}</p>
        </div>
      </div>

      <div className=" flex justify-center">
        <button
          className={`btn  rounded-xl w-75.5  ${isStack ? " text-pink-500 border-transparent bg-pink-200/40 " : "bg-black text-white border-transparent"}`}
          onClick={handleClick}
        >
          {isStack ? (
            <>
              <FaCheck /> Added to Stack
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
