import { HTMLAttributes } from "react";
import { classNames } from "../../utils/Helpers";

type TooltipPosition = "top" | "bottom" | "right" | "left";

interface TooltipProps extends HTMLAttributes<HTMLSpanElement> {
  title: string;
  postition?: TooltipPosition;
}

function Tooltip({
  children,
  postition = "right",
  className,
  title,
  ...props
}: TooltipProps) {
  return (
    <div className={classNames("relative group", className)}>
      <span
        {...props}
        className={classNames(
          "absolute text-sm rounded group-focus-within:inline-block animate-fadeIn shadow hidden group-hover:inline-block select-none text-white px-2 py-1 z-10 min-w-max bg-raisin-black",
          classesOnPosition[postition]
        )}
      >
        {title}
      </span>
      {children}
    </div>
  );
}

const classesOnPosition: Record<TooltipPosition, string> = {
  top: "bottom-full right-1/2 mb-2 translate-x-1/2",
  right: "top-0 translate-y-1/2 left-full ml-5",
  bottom: "top-full right-1/2 mt-2 translate-x-1/2",
  left: "top-0 translate-y-1/2 right-full mr-5",
};

export default Tooltip;
