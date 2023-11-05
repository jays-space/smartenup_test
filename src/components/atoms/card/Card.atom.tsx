import { ReactNode } from "react";

const Card = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      data-testid={`card`}
      className={`w-full flex flex-row bg-violet-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border-[2px] border-violet-500 border-opacity-30 rounded-[10px] relative ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
