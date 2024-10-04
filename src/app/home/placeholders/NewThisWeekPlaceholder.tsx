const NewThisWeekPlaceholder = () => {
  return (
    <section id="new-this-week" className="">
      <div className="lg:mt-24 mt-12 px-6">
        <h1 className="text-5xl font-bold font-beatrice">
          NEW <br /> THIS WEEK{" "}
          <sup className="text-[#000E8A] text-2xl font-bold font-sans">(0)</sup>
        </h1>
      </div>

      <main>
        <div className="flex justify-end items-center mb-5 px-6">
          <button type="button" className="text-gray-500">
            See all
          </button>
        </div>

        <div>
          <div className="flex gap-4 overflow-x-auto p-6">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="w-full bg-white overflow-hidden hover:shadow-lg animate-pulse"
              >
                {/* Skeleton Product Image */}
                <div className="relative">
                  <div className="w-full h-[200px] lg:h-[350px] bg-gray-300" />
                </div>

                {/* Skeleton Product Details */}
                <div className="p-2">
                  <div className="bg-gray-300 h-4 w-3/4 rounded mb-2" />
                  <div className="flex items-center justify-between">
                    <div className="bg-gray-300 h-4 w-1/2 rounded" />
                    <div className="bg-gray-300 h-4 w-1/4 rounded" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <div className="flex items-center justify-center gap-3 mt-6">
        <button className="bg-gray-300 h-8 w-10 rounded animate-pulse" />
        <button className="bg-gray-300 h-8 w-10 rounded animate-pulse" />
      </div>
    </section>
  );
};

export default NewThisWeekPlaceholder;
