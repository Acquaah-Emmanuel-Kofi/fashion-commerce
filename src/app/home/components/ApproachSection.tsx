"use client";

import NotAvailable from "@/app/shared/components/NotAvailable";

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
        <NotAvailable title="No Videos Yet" subTitle="Coming soon!" />
      </div>
    </section>
  );
}
