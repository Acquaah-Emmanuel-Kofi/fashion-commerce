"use client";

export default function ApproachSection() {
  return (
    <section className="min-h-[calc(100vh-80px)] mt-[10%]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="uppercase text-5xl font-normal font-beatrice">
          Our Approach to fashion design
        </h1>
        <p className="font-beatrice font-light text-base text-center w-[53%] mx-auto">
          at elegant vogue , we blend creativity with craftsmanship to create
          fashion that transcends trends and stands the test of time each design
          is meticulously crafted, ensuring the highest quelity exqulsite finish
        </p>
      </div>

      <div className="lg:w-4/5 w-full mx-auto my-[5%]">
        <div className="flex flex-col items-center justify-center h-[300px] lg:h-[500px] bg-gray-100 border-2 border-gray-300 rounded-lg">
          <svg
            className="w-16 h-16 text-gray-400 mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3v18h18V3H3zM9 9l3 3m0 0l3-3m-3 3v6"
            />
          </svg>
          <p className="text-gray-600 text-lg">No Videos Yet</p>
          <p className="text-gray-500 text-sm">Coming soon!</p>
        </div>
      </div>
    </section>
  );
}
