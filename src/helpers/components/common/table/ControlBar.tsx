/* eslint-disable @typescript-eslint/no-explicit-any */
import AddButton from "../buttons/AddButton";
import ExportButton from "../buttons/ExportButton";
import FilterButton from "../buttons/FilterButton";
import TextInput from "../forms/TextInput";
import { controlBarSearch } from "./props/table";

export const ControlBar = (props: any) => {
  // Props
  const {
    addCategoryBtnControlbar,
    addItemBtnControlbar,
    addSupplierBtnControlbar,
    openCameraControlbar,
  } = props;

  return (
    <div className="w-full h-[64px] py-4 px-4 flex justify-between">
      <div className="flex h-[40px] gap-2">
        {addCategoryBtnControlbar && (
          <div className="w-[10rem] h-[40px] flex justify-around">
            <AddButton {...addCategoryBtnControlbar} />
          </div>
        )}

        {addItemBtnControlbar && (
          <div className="w-[10rem] h-[40px] flex justify-around">
            <AddButton {...addItemBtnControlbar} />
          </div>
        )}
        {addSupplierBtnControlbar && (
          <div className="w-[10rem] h-[40px] flex justify-around">
            <AddButton {...addSupplierBtnControlbar} />
          </div>
        )}
        {openCameraControlbar && (
          <div className="w-[10rem] h-[40px] flex justify-around">
            <AddButton {...openCameraControlbar} />
          </div>
        )}
      </div>

      <div className="h-full flex justify-center mt-1 items-center gap-4">
        <TextInput {...controlBarSearch} />
        <FilterButton css={{}} />
        <ExportButton css={{}} />
      </div>
    </div>
  );
};
