/* eslint-disable @typescript-eslint/no-explicit-any */
export const addBtnControlbar =
  "min-w-[8rem] min-h-[2.5rem] max-h-[2.5rem] px-3 flex gap-1 justify-center items-center bg-primary-dark font-medium text-white text-sm rounded-lg shadow-custom-10";

export const sidebarIconCss = {
  className: "text-xl",
};

export const myModulesIconCss = (rotate: boolean) =>
  `text-lg transition-all duration-300 ${rotate ? "rotate-180" : ""}`;
