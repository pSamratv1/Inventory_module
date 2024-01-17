// Table
export const defaultThCss = "",
  tableThCss = (isFlag: boolean) =>
    isFlag
      ? "hidden"
      : "h-[52px] px-7 py-4 bg-gray-100 text-primary-lighter text-sm text-xs z-50",
  tableTdCss = (isLastRow: boolean, isFlag?: boolean) => {
    const commonCss = "text-[14px] p-7 z-[-10]";
    const rowCss = `${commonCss} border-b-[1px] border-primary-lighter/50`;
    const hiddenCss = "hidden";

    let result = "";

    if (isLastRow) {
      if (isFlag) {
        result = hiddenCss;
      } else {
        result = commonCss;
      }
    } else {
      if (isFlag) {
        result = hiddenCss;
      } else {
        result = commonCss;
      }
    }

    return result;
  };
