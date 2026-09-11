import type { TechnoType } from "../../Types/TechnoType";
import star from "../../assets/star.png";

const AllTechno = ({ technology }) => {
  return (
    <div className="grid grid-cols-3">
      {technology.map((techno: TechnoType) => {
        return (
            <div className=" shadow-sm p-6 mb-5 w-96">
              <figure className="flex justify-between">
                <img src={techno.icon} className="w-9 mb-6" alt="Technology Icon" />
                <button className=" text-[13px] w-18.75 h-6.25 font-bold bg-[#475569]/10 rounded-sm text-[#475569]"> {techno.badge} </button>
              </figure>
              <h2 className="card-title mb-4">{techno.name}</h2>
              <p className="mb-6 text-[#475569]">{techno.description}</p>

              <div className="flex justify-between  mb-4">
                <button className="w-25 h-8 bg-[#475569]/10 rounded-lg text-[#475569]">
                  {techno.category}
                </button>
                <p className="text-[#475569]">{techno.difficulty}</p>
                <div className="flex ">
                  <img src={star} className="w-3.5 h-3.5 mt-1.25"></img>
                  <p>{techno.rating}</p>
                </div>
              </div>

              <div className=" flex justify-center">
                <button className="btn  text-white bg-black rounded-xl w-85.5 ">
                  Add to Stack
                </button>
              </div>
            </div>
        );
      })}
    </div>
  );
};

export default AllTechno;
