/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { CardSchema } from "views/organization/pages/InventoryPage";
export const Cards = React.forwardRef((props: CardSchema, ref: any) => {
  // Props
  const { label, value } = props;

  // Props variables

  // Custom Props
  const defaultCss =
    " min-w-[5rem] min-h-[6rem] px-4 py-3 gap-2 flex flex-coljustify-center items-center flex-col bg-white text-[10px] leading-3 font-medium text-sm text-dark-200 cursor-pointer shadow-sm border border-slate-200 rounded-lg";
  const combinedCss = defaultCss;

  return (
    <div ref={ref && ref} className={combinedCss}>
      <div className="flex justify-center text-xl font-medium text-[#1E1E1E]">
        {value}
      </div>
      <div className="flex justify-center sm:text-lg gap-2 text-gray-500 font-normal text-sm">
        <div className="">{label}</div>
      </div>
    </div>
  );
});
