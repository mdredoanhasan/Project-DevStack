import bannerLogo from "../assets/banner-stack.png";

export default function Banner() {
  return (
    <section className="flex container mx-auto pt-10 pb-10 ">
      <div>
        <h1 className="text-6xl font-bold mb-10">
          Build Your Ideal
          <br />{" "}
          <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="text-2xl mb-12 text-[#374151]">
          Explore frontend, backend, database, and tooling options, <br />
          compare them side by side, and put together the stack that fits your{" "}
          <br />
          next project.
        </p>

        <button className="bg-linear-to-r from-[#EC4899] to-[#F97316] text-white px-6 py-3 rounded-lg mr-3">
          Explore Technologies
        </button>

        <button className="w-50 h-12 border border-gray-200 rounded-lg py-3 text-[#374151] bg-white">
          Learn More
        </button>
      </div>

      <div className="ml-50 flex justify-start items-start -mt-28 ">
        <img src={bannerLogo} className="w-170" ></img>
      </div>
    </section>
  );
}
