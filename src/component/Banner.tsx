import bannerLogo from "../assets/banner-stack.png";

export default function Banner() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 pb-10 pt-10 text-center lg:flex-row lg:items-start lg:px-0 lg:text-left">
      <div>
        <h1 className="mb-10 text-4xl font-bold sm:text-6xl">
          Build Your Ideal
          <br />{" "}
          <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="mb-12 text-lg text-[#374151] sm:text-2xl">
          Explore frontend, backend, database, and tooling options,{" "}
          <br className="hidden sm:block" />
          compare them side by side, and put together the stack that fits your{" "}
          next project.
        </p>

        <div className="flex justify-center gap-3">
          <button className="rounded-lg bg-linear-to-r from-[#EC4899] to-[#F97316] px-4 py-3 text-white sm:px-6">
            Explore Technologies
          </button>

          <button className="h-12 rounded-lg border border-gray-200 bg-white px-4 py-3 text-[#374151] sm:w-50">
            Learn More
          </button>
        </div>
      </div>

      <div className="mt-10 flex justify-center lg:ml-50 lg:-mt-28 lg:justify-start">
        <img
          src={bannerLogo}
          className="w-full max-w-170 lg:w-170"
          alt="Development stack"
        />
      </div>
    </section>
  );
}
