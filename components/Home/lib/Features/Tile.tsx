import { FC } from "react";

interface ITile {
  text: string;
}

const Tile: FC<ITile> = ({ children, text }) => (
  <div className="grid place-items-center gap-7">
    <div className="grid place-content-center h-26 w-26 rounded-3xl bg-F6F8FE dark:bg-dk.25 dark:bg-opacity-25">
      {children}
    </div>
    <p className="text-87 text-xs font-medium text-center w-26">{text}</p>
  </div>
);

export default Tile;
