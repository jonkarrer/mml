import { FC } from "react";
import { Free, Basic, Premium, Annual } from "./lib/Pricing";

const Plans: FC = () => {
  return (
    <section className="xl:px-4">
      <div id="pricing" className="grid gap-16 lg:gap-24">
        <h2 className="heading-text text-center md:w-120 md:m-auto lg:w-auto">
          Try free or sign up for premium features
        </h2>
        <div className="grid gap-7 md:grid-cols-2 md:max-w-700 m-auto xl:max-w-none xl:gap-4 xl:grid-cols-4">
          <Free />
          <Basic />
          <Premium />
          <Annual />
        </div>
      </div>
    </section>
  );
};

export default Plans;
