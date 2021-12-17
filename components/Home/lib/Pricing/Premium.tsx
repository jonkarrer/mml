import { CardWrapper, Feature, Headline } from "./lib";

export const Premium = () => {
  return (
    <CardWrapper borderColor="border-006EFF" shadow="shadow-price_card">
      <Headline
        title="Premium"
        desc="Everything you need, real time, for one low monthly price"
      >
        <h3 className="font-black text-lg">
          $39<b className=" text-sm text-232333 opacity-50">/mo</b>
        </h3>
      </Headline>

      <div className="grid gap-2 lg:h-70 lg:flex lg:flex-col">
        <h5 className="hidden lg:block text-15 font-bold lg:mb-1">
          WHAT{"'"}S INCLUDED
        </h5>
        <i className="text-15 text-232333 dark:text-white lg:not-italic lg:font-bold">
          All basic features, plus:
        </i>

        <div className="hidden lg:grid gap-2">
          <Feature name="Proprietary models" />
          <Feature name="News feed" />
          <Feature name="Earn rewards" />
          <Feature name="Portfolio tracking" />
        </div>
        <Feature name="Real time options data" />
        <Feature name="Premium models and alerts" />
        <Feature name="All Discord channels" />
      </div>

      <button className="bg-006EFF text-white h-11 w-full dark:text-black hover:opacity-80">
        Subscribe
      </button>
    </CardWrapper>
  );
};
