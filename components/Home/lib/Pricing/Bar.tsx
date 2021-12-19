import { FC } from "react";
import Cards from "../Bar/Cards";
import Background from "../Bar/Background";

const Bar: FC = () => (
  <section className="overflow-hidden bg-F6F8FE dark:bg-121212 lg:bg-white lg:dark:bg-121212">
    <article className="wrapper grid gap-12 m-auto w-full lg:grid-cols-2 lg:gap-0 lg:h-60 relative">
      <div className="w-full flex items-center justify-center lg:justify-start">
        <Background />

        <h2 className="heading-text text-center md:w-120 lg:text-left lg:w-110">
          Find the approach that fits your style
        </h2>
      </div>

      <Cards />
    </article>
  </section>
);

export default Bar;