import React, { useState } from "react";
import { clsx } from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";

export type CollapsingDirection = "closeToLeft" | "closeToRight";

interface Props {
  className?: string;
  collapsingDirection: CollapsingDirection;
  children?: React.ReactNode;
}

export const CollapsibleWrapper: React.FC<Props> = ({
  children,
  className,
  collapsingDirection,
}) => {
  const [isChildrenCollapsed, toggleChildren] = useState(false);

  const onTogglePress = () => {
    toggleChildren((isCollapsedState) => !isCollapsedState);
  };

  return (
    <div
      className={clsx(
        className,
        "relative z-[1] transition-[padding] duration-selection",
        collapsingDirection === "closeToLeft"
          ? isChildrenCollapsed
            ? "pr-[var(--selection-width-closed)]"
            : "pr-0"
          : isChildrenCollapsed
          ? "pl-[var(--selection-width-closed)]"
          : "pl-0"
      )}
    >
      <button
        className={clsx(
          "absolute top-[16px] cursor-pointer bg-red-500 border-none w-[32px] h-[32px] rounded-[16px]",
          "transition-transform duration-selection",
          "shadow-regular",
          "hover:bg-white hover:shadow-regular_hover",
          collapsingDirection === "closeToLeft"
            ? "right-0 mr-[-16px]"
            : "left-0 ml-[-16px]",
          collapsingDirection === "closeToLeft"
            ? isChildrenCollapsed
              ? "rotate-[180deg]"
              : "rotate-0"
            : isChildrenCollapsed
            ? "rotate-0"
            : "rotate-[180deg]"
        )}
        onClick={onTogglePress}
      >
        <FontAwesomeIcon icon={faAnglesLeft} />
      </button>
      <div
        className={clsx(
          "flex px-[8px] py-[10px] w-selection-open h-screen overflow-y-auto transition-[margin] duration-selection",
          collapsingDirection === "closeToLeft"
            ? isChildrenCollapsed
              ? "ml-[calc(-1*var(--selection-width-open))]"
              : "ml-0"
            : isChildrenCollapsed
            ? "mr-[calc(-1*var(--selection-width-open))]"
            : "mr-0"
        )}
      >
        {!isChildrenCollapsed && children}
      </div>
    </div>
  );
};
