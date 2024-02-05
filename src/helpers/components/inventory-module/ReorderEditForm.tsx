/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button, TextInput } from "../common";
import { addItemBtnProps } from "./formProps";

const ReorderEditForm = ({ formObj, form }: any) => {
  // Props
  // Destucuring Props
  const { handleSubmit, onSubmit } = form;
  console.log(formObj, "formObj");
  // Redux
  if (Object.keys(formObj).length === 0) {
    // Render a loading state or return null
    return null;
  }
  // Redux variables

  // Validation
  // Hooks
  // Methods

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 mt-8 "
    >
      <div className="grid grid-cols-12  sm:gap-4">
        <div className="col-span-6 min-w-[160px] justify-items-start">
          <TextInput {...formObj.item_name} />
        </div>
        <div className="col-span-6  min-w-[160px] justify-items-start">
          <TextInput {...formObj.item_on_hand} />
        </div>
      </div>
      <div className="grid grid-cols-12 sm:gap-4 ">
        <div className=" col-span-6  min-w-[160px] md:w-full sm:w-[14.5rem] justify-items-start ">
          <TextInput {...formObj.item_reorder_quantity} />
        </div>
        <div className=" col-span-6  w-[160px] md:w-full sm:w-full justify-items-start">
          <TextInput {...formObj.item_expiry_date} />
        </div>
      </div>

      <div className="flex mt-4 w-full justify-start">
        <Button {...addItemBtnProps} />
      </div>
    </form>
  );
};

export default ReorderEditForm;
