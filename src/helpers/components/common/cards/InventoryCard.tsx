/* eslint-disable @typescript-eslint/no-explicit-any */

export const InventoryCard = (props: any) => {
  // Props
  const { label, value, title, icon, bgColor, textColor } = props;

  // Props variables

  // Custom Props
  const defaultCss =
    " min-w-[9rem] min-h-[10rem] px-2 py-1 gap-2 flex justify-center items-center flex-col bg-white text-[10px] leading-3 font-medium text-sm text-dark-200 cursor-pointer shadow-sm border border-slate-200 rounded-lg";

  return (
    <div className={defaultCss}>
      <div className="min-w-[9rem] flex flex-col gap-2.5 px-2">
        <div className="flex justify-center items-center text-2xl">
          {value.value}
        </div>
        <div
          className="flex min-h-[45px] justify-center items-center gap-2 text-lg rounded-lg  px-2"
          style={{ backgroundColor: `${bgColor}`, color: `${textColor}` }}
        >
          <div className="text-2xl">{icon.icon}</div>
          <div className="">{label.label}</div>
        </div>
        <div className="flex justify-center items-center h-6 text-lg">
          {title.title}
        </div>
      </div>
    </div>
  );
};
