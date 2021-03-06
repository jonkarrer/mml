import { Children, FC } from "react";

interface IHeadline {
  title: string;
  desc: string;
}

export const Headline: FC<IHeadline> = ({ title, desc, children }) => (
  <div className="grid gap-4 lg:gap-4 lg:pb-6 lg:border-b lg:border-D4D4D4">
    <h3 className="text-lg font-bold">{title}</h3>
    <p className="text-150727 leading-6 text-14 dark:text-999999">{desc}</p>
    {children}
  </div>
);
